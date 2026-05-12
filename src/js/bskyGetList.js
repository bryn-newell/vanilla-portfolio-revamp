// shout out Salma - thanks for letting me steal most of your code :)
// https://whitep4nth3r.com/blog/show-bluesky-likes-on-blog-posts/

const LIMIT = 55;
const bskyAPI = 'https://public.api.bsky.app/xrpc/';
const eliteCadreUri =
  'at://did:plc:pbr2nzfsr6bcqjeqlvohmh5y/app.bsky.graph.list/3logwpkuzxb2h';
const container = document.querySelector('[data-bsky-container]');

const getList = async () => {
  const getPostURL = `${bskyAPI}app.bsky.graph.getList?limit=${LIMIT}&list=${eliteCadreUri}`;

  try {
    const bskyList = await fetch(getPostURL);
    const listData = await bskyList.json();
    console.log(listData);
  } catch (error) {
    console.log(error);
  }
};

getListFeed = async () => {
  const getFeedUrl = `${bskyAPI}app.bsky.feed.getListFeed?limit=${LIMIT}&list=${eliteCadreUri}`;

  try {
    const bskyListFeed = await fetch(getFeedUrl);
    const feedData = await bskyListFeed.json();
    const feed = feedData.feed;
    console.log(feedData);

    // if (feed) {
    //   const likesMore = document.createElement('li');
    //   likesMore.classList.add('post__like');
    //   likesMore.classList.add('post__like--howManyMore');
    //   likesMore.innerText = `+${postLikesCount - likesActorLength}`;
    //   likesContainer.appendChild(likesMore);
    // }
  } catch (error) {
    console.log(error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  getList();
  getListFeed();
});
