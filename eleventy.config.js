/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./assets");
  // eleventyConfig.addWatchTarget('./src/scss/**/*');
};