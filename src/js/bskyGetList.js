// shout out Salma - thanks for letting me steal most of your code :)
// https://whitep4nth3r.com/blog/show-bluesky-likes-on-blog-posts/

const LIMIT = 25;
const bskyAPI = 'https://public.api.bsky.app/xrpc/';
const eliteCadreUri =
  'at://did:plc:vgti27vqwdnwfh3rn2sijoho/app.bsky.graph.list/3mlojkqwjcv27';
const container = document.querySelector('[data-bsky-container]');

// I'm not using this funciton but I'm leaving it here - you know how it is.
const getList = async () => {
  const getPostURL = `${bskyAPI}app.bsky.graph.getList?limit=${LIMIT}&list=${eliteCadreUri}`;

  try {
    const bskyList = await fetch(getPostURL);
    const listData = await bskyList.json();
  } catch (error) {
    console.log(error);
  }
};

const loadBskyEmbedScript = () => {
  const embedScript = document.createElement('script');
  embedScript.src = 'https://embed.bsky.app/static/embed.js';
  embedScript.async = true;
  embedScript.charset = 'utf-8';
  document.body.appendChild(embedScript);
};

const COLUMN_COUNT = 3;

const getListFeed = async () => {
  const getFeedUrl = `${bskyAPI}app.bsky.feed.getListFeed?limit=${LIMIT}&list=${eliteCadreUri}`;

  try {
    const bskyListFeed = await fetch(getFeedUrl);
    const feedData = await bskyListFeed.json();
    const feed = feedData.feed;

    if (feed) {
      const columns = Array.from({ length: COLUMN_COUNT }, () => {
        const col = document.createElement('div');
        col.classList.add('flow');
        container.appendChild(col);
        return col;
      });

      let colIndex = 0;
      feed.forEach((feedObj) => {
        const post = feedObj.post;
        if (!post || feedObj.reply) return;

        const postBlockQuote = document.createElement('blockquote');
        postBlockQuote.setAttribute('data-bluesky-cid', post.cid);
        postBlockQuote.setAttribute('data-bluesky-uri', post.uri);
        postBlockQuote.setAttribute('data-bluesky-embed-color-mode', 'system');
        postBlockQuote.classList.add('bluesky-embed');

        columns[colIndex].appendChild(postBlockQuote);
        colIndex = (colIndex + 1) % COLUMN_COUNT;
      });
    }
  } catch (error) {
    console.log(error);
  } finally {
    loadBskyEmbedScript();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  getListFeed();
});
