import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { routePaths } from "../src/routePaths.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const ssrDir = path.join(rootDir, "dist-ssr");
const outDir = path.join(rootDir, "out");

function run(command) {
  execSync(command, {
    cwd: rootDir,
    stdio: "inherit",
  });
}

function ensureCleanDir(dirPath) {
  fs.rmSync(dirPath, { recursive: true, force: true });
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyDirContents(sourceDir, targetDir) {
  fs.mkdirSync(targetDir, { recursive: true });
  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const sourcePath = path.join(sourceDir, entry.name);
    const targetPath = path.join(targetDir, entry.name);

    if (entry.isDirectory()) {
      copyDirContents(sourcePath, targetPath);
      continue;
    }

    fs.copyFileSync(sourcePath, targetPath);
  }
}

function htmlForRoute(template, appHtml) {
  return template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

function findTagStart(html, marker, tagName) {
  const markerIndex = html.indexOf(marker);
  if (markerIndex === -1) {
    return -1;
  }

  return html.lastIndexOf(`<${tagName}`, markerIndex);
}

function findElementEnd(html, startIndex, tagName) {
  if (startIndex === -1) {
    return -1;
  }

  let depth = 0;
  let cursor = startIndex;

  while (cursor < html.length) {
    const openIndex = html.indexOf(`<${tagName}`, cursor);
    const closeIndex = html.indexOf(`</${tagName}>`, cursor);

    if (closeIndex === -1) {
      return -1;
    }

    if (openIndex !== -1 && openIndex < closeIndex) {
      depth += 1;
      cursor = openIndex + tagName.length + 1;
      continue;
    }

    depth -= 1;
    cursor = closeIndex + tagName.length + 3;

    if (depth === 0) {
      return cursor;
    }
  }

  return -1;
}

function extractElement(html, marker, tagName = "div") {
  const startIndex = findTagStart(html, marker, tagName);
  const endIndex = findElementEnd(html, startIndex, tagName);

  if (startIndex === -1 || endIndex === -1) {
    return { html: "", startIndex: -1, endIndex: -1 };
  }

  return {
    html: html.slice(startIndex, endIndex),
    startIndex,
    endIndex,
  };
}

function extractRootHtml(pageHtml) {
  const rootStartMarker = '<div id="root">';
  const rootStart = pageHtml.indexOf(rootStartMarker);
  const bodyEnd = pageHtml.lastIndexOf("</body>");

  if (rootStart === -1 || bodyEnd === -1) {
    return "";
  }

  return pageHtml.slice(rootStart + rootStartMarker.length, bodyEnd).trim();
}

function stripOuterWrapper(rootHtml) {
  if (!rootHtml.startsWith("<div>") || !rootHtml.endsWith("</div>")) {
    return rootHtml;
  }

  return rootHtml.slice(5, -6);
}

function routeSlug(routePath) {
  return routePath === "/" ? "home" : routePath.replace(/^\/+/, "");
}

function ensureParentDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function writeTextFile(filePath, contents) {
  ensureParentDir(filePath);
  fs.writeFileSync(filePath, contents, "utf8");
}

function classifyAsset(fileName) {
  const ext = path.extname(fileName).toLowerCase();

  if ([".png", ".jpg", ".jpeg", ".webp", ".gif", ".svg"].includes(ext)) {
    return "images";
  }

  if ([".ttf", ".woff", ".woff2", ".otf", ".eot"].includes(ext)) {
    return "fonts";
  }

  if ([".mp4", ".webm", ".mp3", ".wav"].includes(ext)) {
    return "media";
  }

  if (ext === ".css") {
    return "css";
  }

  if (ext === ".js") {
    return "js";
  }

  return "misc";
}

function createAssetCopies() {
  const assetSourceDir = path.join(outDir, "assets");
  const organizedAssetsDir = path.join(outDir, "assets-organized");

  ensureCleanDir(organizedAssetsDir);

  for (const fileName of fs.readdirSync(assetSourceDir)) {
    const sourcePath = path.join(assetSourceDir, fileName);
    if (!fs.statSync(sourcePath).isFile()) {
      continue;
    }

    const bucket = classifyAsset(fileName);
    const targetPath = path.join(organizedAssetsDir, bucket, fileName);
    ensureParentDir(targetPath);
    fs.copyFileSync(sourcePath, targetPath);
  }
}

function createSectionFiles(routePath, pageHtml) {
  const slug = routeSlug(routePath);
  const rootHtml = stripOuterWrapper(extractRootHtml(pageHtml));

  const announcement = extractElement(rootHtml, 'class="announcement_banner"');
  const navbar = extractElement(rootHtml, 'class="container-fluid navbar_bg"');
  const footerStart = rootHtml.lastIndexOf("<footer");
  const footerEnd = rootHtml.lastIndexOf("</footer>");
  const footerHtml =
    footerStart !== -1 && footerEnd !== -1
      ? rootHtml.slice(footerStart, footerEnd + "</footer>".length)
      : "";

  const headerHtml = `${announcement.html}${navbar.html}`;
  const bodyStart = navbar.endIndex;
  const bodyEnd = footerStart;
  const bodyHtml =
    bodyStart !== -1 && bodyEnd !== -1 && bodyEnd > bodyStart
      ? rootHtml.slice(bodyStart, bodyEnd).trim()
      : "";

  writeTextFile(path.join(outDir, "header", slug, "index.html"), headerHtml);
  writeTextFile(path.join(outDir, "body", slug, "index.html"), bodyHtml);
  writeTextFile(path.join(outDir, "footer", slug, "index.html"), footerHtml);
}

function outputPathForRoute(routePath) {
  if (routePath === "/") {
    return path.join(outDir, "index.html");
  }

  const cleanRoute = routePath.replace(/^\/+/, "");
  return path.join(outDir, cleanRoute, "index.html");
}

run("npm run build");
run("npx vite build --ssr src/entry-server.jsx --outDir dist-ssr");

ensureCleanDir(outDir);
copyDirContents(distDir, outDir);

const template = fs.readFileSync(path.join(distDir, "index.html"), "utf8");
const serverEntryUrl = pathToFileURL(path.join(ssrDir, "entry-server.js")).href;
const { render } = await import(serverEntryUrl);

for (const routePath of routePaths) {
  const appHtml = render(routePath);
  const destination = outputPathForRoute(routePath);

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, htmlForRoute(template, appHtml), "utf8");
}

for (const routePath of routePaths) {
  const pageHtml = fs.readFileSync(outputPathForRoute(routePath), "utf8");
  createSectionFiles(routePath, pageHtml);
}

createAssetCopies();

fs.rmSync(ssrDir, { recursive: true, force: true });

console.log(`Static export created in ${outDir}`);
