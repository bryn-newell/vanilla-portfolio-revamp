/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addWatchTarget('./src/styles/');

  return {
    dir: {
      input: 'src',
    },
  };
};