---
title: 'Swapping from Vue to Eleventy'
date: '2025-03-01'
categories: ['tech']
# to do - this one is mad because of the template override I think
templateEngineOverride: "11ty.js,md"
permalink: 'writing/vue-to-11ty/index.hml'
featured: true
---

\* a heads up - I have a bit of a sailor’s mouth and have opted to not censor myself anymore. If you’d like the censored version you can click here. 

“Oh no it’s time to redesign my website again isn’t it?” The running joke that every technologist knows the plague of well, especially when anyone in your circle starts posting about their re-launch. This thought had just started to infect me when I realized, wait, I actually still really love the general design of my site and I don’t want to throw it all away. Was there something else I could work on instead? I originally built my site in 2019, surely there must be a new iteration. 

And then it dawned on me that I was using Vue for a single page static site. 

I’m embarrassed to admit this, so thanks for not jumping to Bluesky to publicly shame me for it right away. Over the years I’ve realized this is one of my biggest qualms about the tech industry in general - we fuckin lovveeee over-engineering shit. Why did I use an entire gigantic framework, ready to invoke state management, handle reactivity, and componentize things into the ground, for literally one page of HTML and CSS? Because it was what I knew. React-titude \(that’s OC, ya like it?\) is a plague. I know big frameworks have a time and a place. I’ve worked on nothing but React, React Native, and Vue in the entirety of my professional career. And I stand by my choice of Vue over React at least. But I’m just begging us, now, to remember and to teach that it doesn’t have to be the only way. 

Remember good ol’ HTML? Vanilla CSS? It handles SO MUCH of the heavy lifting for you when you just… learn it and use it well. They are languages of their own right that have come so far, especially in the last handful of years. If you haven’t followed along I highly encourage you to [check the specs](https://www.w3.org/TR/2025/NOTE-css-2024-20250225/) and learn about the many capabilities that have been added to the baseline in recent times. 

The goal of the project became: revamp the website by simplifying everything. Return to the core tools and core developing principles. Vanilla languages are good languages. 

---

6+ years in this field and I still don’t *really* understand what goes on under the hood of compiling and literally deploying a website. So, I still needed something to handle the goofy ish for me: enter [Eleventy](https://www.11ty.dev/).

Following their docs I whipped up a new project \(which took like 2 seconds because it’s so lightweight weeee!\) and sat there for a moment wondering - huh - how on earth do I approach rebuilding this whole thing? I ended up not coming up with a plan at all and decided to just wing it. But now, dear reader, if you ever find yourself in this situation, hopefully you won’t have to “just wing it” and can learn from what I did. 

I started by copy pasting the first main section of my Vue project over to the `index.html` - yes manually - but thankfully vue is *mostly* plain html, especially when you’re not using any complex logic. I had to edit a few lines of code, mostly removing a lot of `:` s before things like the `src` attribute, and again all by hand, but this is a small project. I copied the assets folder over. Ran  `npx @11ty/eleventy --serve` to take a look at it on localhost anddddddd saw there were no images rendering.  

Eleventy has a lot of “default” knowledge. It compiles your index.html and any other .html files into other pages directly into the `_site` directory, but it doesn’t necessarily “automatically” know about anything else you throw in the project. This is where [addPassthroughCopy](https://www.11ty.dev/docs/copy/) comes in. Adding this nice quick little one liner to `eleventy.config.js` is all it took for my images to magically start working! 

```js
  eleventyConfig.addPassthroughCopy("./assets");
```
<small>eleventy.config.js</small>

> Debugging tip: if you’re not seeing something locally that you’re expecting to see - crack open the `_site` directory and see if you can find whatever is missing in there. More often than not, I was missing a config rule or a `/` in a folder name, and my missing item was never even being noticed by 11ty. 

My strategy here was to get one bite sized piece of the page fully up and running. Images, styles and all looking exactly like it does on my shipped site. So the next step was to get styles added in! Now Bryn, you *just* ranted about vanilla everything - why are you using Sass when CSS has come so far over the years?? First of all reader, mind your business, but mostly because I’m so ingrained in and still love it. The in depth explanation deserves its own blog that I might eventually write, but for now just know that to me Sass handles more overhead, while still writing pure CSS declarations. So it counts okay?  I was using Sass in my previous project too, so I copied over the entire `/styles` folder into the new project and installed it as a dependency in this one. 

Now I also don’t need 11ty to know or care that I’m using Sass. In my index.html inside the `head` I’ll include a link to a stylesheet. So I just need one css file in the built files. In my case called `_site/css/main.css`

```html
<link rel="stylesheet" href="/css/main.css" />
```
<small>index.html</small>

We can allow Sass to compile all its own stuff into that `main.css` file as well as make things look pretty for us locally with a little bit of configuration magic again. This time we’ll create a new script in our `package.json` so that in the future we can just run the command `npm start` without having to think about anything. We’ll also need to install concurrently to make this magic happen… well… concurrently. 

```json
"start": "concurrently 'sass --watch styles:_site/css' 'npx @11ty/eleventy --serve'"
```
<small>package.json</small>


Once I saw it was compiling to the right place I added another eleventy config rule so I would keep hot reloading with any style changes as well. 

```js
eleventyConfig.addWatchTarget('./styles/');
```
<small>eleventy.config.js</small>


Fonts weren’t working quite right though, and this was a matter of double checking all of my import paths. I was using Vue’s silly little shorthand everywhere. So a full once over of all `url()`s and `import()`s to use absolute paths was in order. From here everything looked 1:1 with the header on my original site - so now it was time to begin bringing the rest of the project over! 

---

I pretty much just copy pasta-ed each component section over into the index.html followed by its CSS style block into its own new `.scss` file. Each sass file got a new line to use those sweet sweet variables. And I double checked there weren’t any lingering Vue template colons  `:`  hanging out. 

```scss
@use 'variables' as *;
```
<small>{sectionName}.scss</small>

Now I do have a few pieces of work ✨componentized✨ and using some JS - namely the projects section and my social media links. So here’s where I had to figure out templating and learn some 11ty techniques. 11ty has a concept of [global data](https://www.11ty.dev/docs/data-global/), so I decided to move my “projects” data array into a json object. It lives in `_data/projects.json`. 11ty has very few opinions about almost anything, which is one of the things that makes it so flexible and great, but when you’re used to something as strongly opinionated as React like I was, it can also be a little confusing. The direction I decided to go with was Nunjucks. I wasn’t familiar with it before this project, but I know it’s incredibly widely used and supported, and all of the [11ty docs](https://www.11ty.dev/docs/languages/nunjucks/) have Nunjucks examples, so it seemed a safe bet. 

To begin using it, I simply renamed the `index.html` to `index.njk`. It too is incredibly lightweight so you only have to use as much of it as you want. Where I previously had a `v-for` to loop over my projects array, I now added one line to access that projects json and loop through it, and one line to tell the loop when to end. 

```liquid
	{% for project in projects %}
	  <div> {... project html here} </div>
	{% endfor %}
```
<small>index.njk</small>

Here’s where I started to get a big confused again \(thanks [^1] React Brain\) because how do I actually make a component now?? Well there’s sort of two ways to go about this with 11ty. In the case of my social media links, a little chunk of styled HTML I’m including in multiple places and don’t want to have to rewrite/duplicate the code for we’re going to use an [includes](https://www.11ty.dev/docs/config/#directory-for-includes) folder. Creating this folder in 11ty does something similar to the data folder. Any files inside of it are, well, included in the project and can therefore be referenced anywhere else. They too, like the data folder, don’t get compiled directly to the `_site` folder, but what is referenced will be magically compiled where it is referenced. So I created a `socialLinks.html` inside of the folder and on the appropriate line of my index.njk added 

```liquid
{% include 'socialLinks.html' %}
```
<small>index.njk</small>

[^1]: please note this thank you is ironic

Another option to handle components is to use 11ty’s concept of a [layout](https://www.11ty.dev/docs/layouts/). This makes a lot more sense for a parent component, or perhaps a wrapper with the same style/logic containing multiple elements. I’m jumping a little out of order here, but when I added in the new functionality of hosting my own articles, layouts came in really handy. I can have one layout that every article page uses, so they’ll all have the same header, nav, footer, and styling. 

---

At this point I was feeling pretty proud scrolling through the site and feeling like I might be done with the basic swap. Until I caught a CSS bug. It was at this moment, I realized I had fucked up. I forgot that Vue automatically scopes all styles. And while I may preach until my throat is dry about using [BEM](https://getbem.com/) or now [CUBE](https://piccalil.li/blog/cube-css/) \(shout out to [Andy](https://bsky.app/profile/bell.bz)\), I hadn’t actually done that on this project and I had overlapping styles out the wazoo. 

I also, for whatever reason in my early career, hadn’t written my styles mobile first. So seeing this opportunity, even though I’d just copied everything over, I lovingly threw all of my styles away. Seriously. <kbd>ctrl</kbd> <kbd>a</kbd> <kbd>delete</kbd> on every `.scss` file. My skills have grown, I wanted to code it the most right way I know how at this point. Sometimes the easiest way to do that is to just write it from scratch. I gave everything new class names, went section by section, all mobile first this time, and eventually we got back to looking 1:1 \(if not a little cleaner\) to the live site. 

Before I called it done, I wanted to create a new /writing page and host all of my own blogs and musings. When I started working on the writing and individual article pages I realized I wanted some navigation and breadcrumbs to be shared across all of the inner pages. Where the links route back to, would need to be different depending on what page you were currently on. This left me with the quandary of - how do I do the breadcrumbs programmatically? My head started spinning a little bit, and although at work that would have felt like an easy peasy problem to solve with setting some state, I didn’t know the “right” way to do it in such a vanilla environment. Until I realized “wait fuck that. I don’t want to do it programmatically.” What I actually wanted was to write HTML. I know what page it needs to go back to in every instance. So I allowed myself a little not-so-DRY code, included the `nav` with a specific `href` wherever it was needed, and used CSS to create the shared styles that I wouldn’t have to rewrite over and over again, like it’s so very good at doing. \(Almost like someone created it for this???\) This was breaking away from the pattern of solutioning I’ve known for so long in this industry, and it’s been really nice to ask myself often along this project - “wait why?” and “do I *want* to do it that way still?” Most of the time I found the answer was no, for this little site, the “programmatic” way feels incredibly over-engineered. 

---

My favorite embarrassing moment  of this project came on the writing page, and I wanted to make sure the article cards were accessible following [Inclusive Design](https://inclusive-components.design/cards/). I needed to add some JavaScript to the project - by way of adding an event listener to the document. And suddenly my head began to spin once more. How on earth do I get JS into the project?? Reader when I tell you - that all these years of React had me utterly and completely forgetting about `<script>`  tags. To say I was embarrassed is an understatement.[^2] It is my dearest hope that this saves one of you. I created a new folder called `js` and a file `clickableCards.js` with my `addEventListener` logic etc. I also invoked that function on `DOMContentLoaded` in the same file because it seemed the easiest place to keep the logic together and clean. Then I added another addPassthroughCopy and addWatchTarget in the `eleventy.config.js`. And finally in the `index.njk` \(or `layout.njk` if you end up using those like I eventually did\) added a script tag to use that JS file.

```html
<script src="/js/clickableCard.js"></script>
```
<small>layout.njk</small>

[^2]: Henry didn’t even laugh at me when he reminded me how to do this over a literal phone call. 

---

This was the real point where I felt I could “soft launch” the Vue to Eleventy swapped site. But of course, development is never that simple. I had an idea for a cute animation to add in… I wanted to add a /now page… I thought I might rewrite some content and change the designs up… And so the to-do list that was almost done of “simplifying my site” started growing again instead. As a developer is wont to do. Though at least the tech stack, really is simpler this time. 

But the best part about having your own personal website? If I want to keep changing it and adding to it and taking away from what I no longer like - I simply can :) One of the best parts of this industry is iteration. We should never have to flinch away from change or updates in this world. And while you’re reading this on what is, now, the launched revamp of my site supported by Eleventy, the next time you come back it could be a little different again. That’s what is so beautiful about the simplicity of the web, my friend. It can be an ever-changing [little garden](https://maggieappleton.com/garden-history/) online.

---

I would be remiss if I didn’t end this article with an especially big thank you to [Henry Desroches](https://bsky.app/profile/strange.website). He was the one that put the worm in my ear about a redesign \(as well as designed the original site back in 2019\), but he also introduced me to Eleventy, shared code snippets and tips, answered a million ~~stupid~~ questions when I got confused, and kept wonderful company over many hours and many a coffee shop ensuring I had an empathetic listening ear when I lost motivation or got stuck. He’s an invaluable resource, expert in this industry, and mostly I’m just grateful to call him my friend. 


Thanks so much for following along my little uplift journey and feel free to take a look [at the code](https://github.com/bryn-newell/vanilla-portfolio-revamp) itself. If there’s any corrections or questions you’d like to pose, please feel free to bang my line via [Bluesky](https://bsky.app/profile/bryn.codes) or [email](mailto:bryn.codes@gmail.com)!