const { existsSync } = require("fs");
const path = require("path");
const which = require("which");

let platform = process.platform;
function getEdgeLinux(name) {
  try {
    let path = which.sync(name);
    return path;
  } catch (e) {}
  return null;
}
function getEdgeWindows(edgeDirName) {
  let paths = [];
  let suffix = `\\Microsoft\\${edgeDirName}\\Application\\msedge.exe`;
  let prefixes = [
    process.env.LOCALAPPDATA,
    process.env.PROGRAMFILES,
    process.env["PROGRAMFILES(X86)"],
  ].filter((v) => !!v);
  for (let prefix of prefixes) {
    let edgePath = path.join(prefix, suffix);
    paths.push(edgePath);
    if (existsSync(edgePath)) {
      return edgePath;
    }
  }
  return null;
}
function getEdgeDarwin(defaultPath) {
  if (existsSync(defaultPath)) {
    return defaultPath;
  }
  return null;
}
const edgePaths = {
  edge: {
    linux: () => getEdgeLinux("microsoft-edge-stable"),
    darwin: () =>
      getEdgeDarwin(
        "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge"
      ),
    win32: () => getEdgeWindows("Edge"),
  },
  dev: {
    linux: () => getEdgeLinux("microsoft-edge-dev"),
    darwin: () =>
      getEdgeDarwin(
        "/Applications/Microsoft Edge Dev.app/Contents/MacOS/Microsoft Edge Dev"
      ),
    win32: () => getEdgeWindows("Edge Dev"),
  },
  beta: {
    linux: () => getEdgeLinux("microsoft-edge-beta"),
    darwin: () =>
      getEdgeDarwin(
        "/Applications/Microsoft Edge Beta.app/Contents/MacOS/Microsoft Edge Beta"
      ),
    win32: () => getEdgeWindows("Edge Beta"),
  },
  canary: {
    darwin: () =>
      getEdgeDarwin(
        "/Applications/Microsoft Edge Canary.app/Contents/MacOS/Microsoft Edge Canary"
      ),
    win32: () => getEdgeWindows("Edge SxS"),
  },
};
exports.getEdgePath = () => {
  let edge = edgePaths.edge;
  if (platform && platform in edgePaths.edge) {
    let pth = edge[platform]();
    if (pth) {
      return pth;
    }
  }
  return null;
};
