import React from "react";

const renderInlineElements = (block) => {
  switch (block.type) {
    case "b":
      return <b key={block.text}>{block.text}</b>;
    case "i":
      return <i key={block.text}>{block.text}</i>;
    case "u":
      return <u key={block.text}>{block.text}</u>;
    default:
      return block.text;
  }
};

const renderBlock = (block, index) => {
  const renderChildren = (block) => {
    if (!block) return null;

    if (block.children) {
      return block.children.map((child, idx) =>
        renderInlineElements(child, idx)
      );
    }
    return block.text || null;
  };

  switch (block.type) {
    case "br":
      return <br/>;
    case "h1":
      return <h1 className="mt-3 sm:mt-4 mb-2 leading-[1.1] font-berlin tracking-wide font-bold text-3xl sm:text-4xl" key={index}>{renderChildren(block)}</h1>;
    case "h2":
      return <h2 className="mt-2 sm:mt-3 mb-2 leading-[1.1] font-berlin tracking-wide font-semibold text-2xl sm:text-3xl" key={index}>{renderChildren(block)}</h2>;
    case "h3":
      return <h3 className="sm:mt-2 leading-snug font-semibold text-xl sm:text-2xl" key={index}>{renderChildren(block)}</h3>;
    case "h4":
      return <h4 className="sm:mt-2 leading-snug font-semibold text-xl sm:text-2xl text-gray" key={index}>{renderChildren(block)}</h4>;
    case "h5":
      return <h5 className="mt-2 sm:mt-4 leading-snug text-xl sm:text-2xl font-medium" key={index}>{renderChildren(block)}</h5>;
    case "h6":
      return <h6 className="mt-2 sm:mt-4 leading-snug text-xl sm:text-2xl text-gray" key={index}>{renderChildren(block)}</h6>;
    case "p":
      return <p className="text-base sm:text-xl leading-normal" key={index}>{renderChildren(block)}</p>;
    case "small":
      return <small className="text-xs sm:text-sm leading-none" key={index}>{renderChildren(block)}</small>;
    case "ul":
      return (
        <ul className="text-base sm:text-xl leading-snug pl-[1.5em] list-outside list-disc" key={index}>
          {block.children?.map((li, idx) => (
            <li className="my-3" key={idx}>{renderChildren(li)}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="text-base sm:text-xl leading-snug pl-[1.5em] list-outside list-decimal" key={index}>
          {block.children?.map((li, idx) => (
            <li className="my-3" key={idx}>{renderChildren(li)}</li>
          ))}
        </ol>
      );
    default:
      return null;
  }
};

const RichTextRenderer = ({ content }) => {
  return <>{content.map(renderBlock)}</>;
};

export default RichTextRenderer;
