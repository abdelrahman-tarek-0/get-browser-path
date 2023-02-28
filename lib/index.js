const { edg, chrome, def } = require("./module/path-getter");


/**
 *
 * @param {String | null} opts | Edg or Chrome or null - default will beck edg first if not exist then will take chrome
 */
module.exports = (opts) => {
  try {
    if (!opts) {
      opts = "Edg-Chrome";
    }

    if (opts === "Edg") {
      return edg();
    } else if (opts === "Chrome") {
      return chrome();
    } else if (opts === "Edg-Chrome") {
      return def();
    } else {
      throw new Error("invalid opts value ether (edg , chrome or null)");
    }
  } catch (error) {
    throw error;
  }
};
