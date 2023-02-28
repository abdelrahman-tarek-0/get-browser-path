const getChromePath = require("chrome-paths");
const { getEdgePath } = require("../utils/edgPath");
const fs = require("fs");


exports.edg = () => {
  let edgPath = getEdgePath();
  if (edgPath && fs.existsSync(edgPath)) {
    return edgPath;
  } else {
    return null;
  }
};
exports.chrome = () => {
  let chromePath = getChromePath.chrome;
  if (fs.existsSync(chromePath)) {
    return chromePath;
  } else {
    return null;
  }
};

exports.def = () => {
  const edgP = this.edg();
  const chromeP = this.chrome();
  if (edgP) {
    return edgP;
  } else if (chromeP) {
    return chromeP;
  }
  return null;
};
