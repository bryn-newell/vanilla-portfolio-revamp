import { feedPlugin } from "@11ty/eleventy-plugin-rss"

/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */
export default function (eleventyConfig) {
  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss",
    outputPath: "/feed.xml",
    collection: {
      name: "article",
      limit: 0,
    },
    metadata: {
      language: "en",
      title: "Bryn Newell | Creative Developer",
      subtitle: "The personal portfolio site of Creative Developer Bryn Newell",
      base: "https://bryn.codes/",
      author: {
        name: "Bryn Newell",
        email: "bryn.codes@gmail.com",
      }
    }
  });
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addWatchTarget('./src/styles/');

  return {
    dir: {
      input: 'src',
    },
  };
};