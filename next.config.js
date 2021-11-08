const basePath = process.env.NODE_ENV === "production" ? "/visit-georgia" : "";

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`,
};
