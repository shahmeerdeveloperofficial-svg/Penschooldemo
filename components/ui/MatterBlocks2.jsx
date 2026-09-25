'use client'
import { useEffect, useRef, useCallback } from "react";
import Matter from "matter-js";

const MatterBlocks = ({ children }) => {
  const matterContainerRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const runnerRef = useRef(null);
  const rectanglesRef = useRef([]);
  const labelsRef = useRef(new Map());

  // Function to create a rectangle and add it to the world
  const addLabelToWorld = useCallback((HtmlLabel) => {
    const matterContainer = matterContainerRef.current;
    if (!matterContainer) return;

    const { x, y } = { x: Math.random() * matterContainer.offsetWidth, y: Math.random() * 100 };

    const computedStyle = window.getComputedStyle(HtmlLabel);
    const borderRadius = parseFloat(computedStyle.borderRadius) || 0; // Default to 0 if not set
    const w = HtmlLabel.offsetWidth + 1;
    const h = HtmlLabel.offsetHeight + 1;

    const box = {
      body: Matter.Bodies.rectangle(x, y, w, h, {
        restitution: 0,
        friction: 0.3,
        frictionAir: 0.01,
        chamfer: { radius: borderRadius },
        mass: w * h * 0.0001
      }),
      elem: HtmlLabel,
      render() {
        const { x, y } = this.body.position;
        this.elem.style.top = `${y}px`;
        this.elem.style.left = `${x}px`;
        this.elem.style.transform = `translate(-50%, -50%) rotate(${this.body.angle}rad)`;
      },
    };

    rectanglesRef.current.push(box);
    Matter.Composite.add(engineRef.current.world, box.body);
    labelsRef.current.set(HtmlLabel, box);
  }, []);

  // Initialize Matter.js
  useEffect(() => {
    const matterContainer = matterContainerRef.current;
    if (!matterContainer) return;

    const engine = Matter.Engine.create();
    engine.gravity.y = .8;
    engineRef.current = engine;

    const render = Matter.Render.create({
      element: matterContainer,
      engine: engine,
      options: {
        width: matterContainer.offsetWidth,
        height: matterContainer.offsetHeight,
        background: "transparent",
        wireframes: false,
        showAngleIndicator: false,
      },
    });
    renderRef.current = render;

    const runner = Matter.Runner.create();
    runnerRef.current = runner;
    Matter.Runner.run(runner, engine);
    // Matter.Render.run(render);

    const ground = Matter.Bodies.rectangle(
      matterContainer.clientWidth / 2,
      matterContainer.clientHeight + 1000 / 2,
      27184,
      1000,
      { isStatic: true, render: { fillStyle: "brown" } }
    );
    const top = Matter.Bodies.rectangle(
      matterContainer.clientWidth / 2,
      0 - 2 - 1000 / 2,
      27184,
      1000,
      { isStatic: true, render: { fillStyle: "brown" } }
    );
    const leftWall = Matter.Bodies.rectangle(
      0 - 1000 / 2,
      matterContainer.clientHeight / 2,
      1000,
      matterContainer.clientHeight * 5,
      { isStatic: true, render: { fillStyle: "brown" } }
    );
    const rightWall = Matter.Bodies.rectangle(
      matterContainer.clientWidth + 1000 / 2,
      matterContainer.clientHeight / 2,
      1000,
      matterContainer.clientHeight * 5,
      { isStatic: true, render: { fillStyle: "red" } }
    );

    Matter.Composite.add(engine.world, [ground, top, leftWall, rightWall]);

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, { mouse: mouse });
    Matter.Composite.add(engine.world, mouseConstraint);
    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

    (function rerender() {
      rectanglesRef.current.forEach((element) => element.render());
      Matter.Engine.update(engine);
      requestAnimationFrame(rerender);
    })();

    const handleResize = () => {
      const containerWidth = matterContainer.offsetWidth;
      const containerHeight = matterContainer.offsetHeight;
      render.canvas.width = containerWidth;
      render.canvas.height = containerHeight;

      Matter.Body.setPosition(
        ground,
        Matter.Vector.create(containerWidth / 2, containerHeight + 1000 / 2)
      );

      Matter.Body.setPosition(
        rightWall,
        Matter.Vector.create(containerWidth + 1000 / 2, containerHeight / 2)
      );

      rectanglesRef.current.forEach((rectangle) => {
        const newWidth = rectangle.elem.offsetWidth + 1;
        const newHeight = rectangle.elem.offsetHeight + 1;

        const scaleX = newWidth / (rectangle.body.bounds.max.x - rectangle.body.bounds.min.x);
        const scaleY = newHeight / (rectangle.body.bounds.max.y - rectangle.body.bounds.min.y);

        Matter.Body.scale(rectangle.body, scaleX, scaleY);

        const { x, y } = rectangle.body.position;
        Matter.Body.setPosition(rectangle.body, { x, y });
        Matter.Body.setAngle(rectangle.body, rectangle.body.angle); // Retain the current angle
      });
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Composite.clear(engine.world);
      Matter.Engine.clear(engine);
    };
  }, []);

  // Update labels when children change
  useEffect(() => {
    const HtmlLabels = document.getElementsByClassName("dragableLabels");

    Array.from(HtmlLabels).forEach((HtmlLabel) => {
      if (!labelsRef.current.has(HtmlLabel)) {
        addLabelToWorld(HtmlLabel);
      }
    });
  }, [children, addLabelToWorld]);

  return (
    <div id="matterContainer" className="matterContainer cursor-grabbing w-full h-full" ref={matterContainerRef}>
      {children}
    </div>
  );
};

export default MatterBlocks;
