---
title: 'A Request to Stop Saying “Accessibility Is Hard”'
# to do - this is showing up at UTC
date: '2020-06-24'
displayDate: 'June 24th, 2020'
---

It’s not. Just learn it. The end.

***

Just kidding. That’s not very empathetic of me...

But seriously, this is a request to please give accessibility like 5% more of your attention. I know you care about other people and you care about your content reaching as many others as possible. On top of that, I truly believe this is a part of your job, whatever type of web related work you do, so let’s learn how to tackle it well together! 

First off, if you’re struggling initially with caring about implementing accessibility into your work, may I first suggest a brief shift in mentality? I believe it will make your teams’, your clients’, and your users' lives better!

What if I told you there were a few simple ways to gain some free advertising, improve SEO, and build your client base?

Or save time and resources on development and post-launch bug fixes to allocate them to more important or more exciting new projects?

What about saving your company money and preventing bad PR from a future lawsuit?

How, you might ask?

Accessibility!! 

Alright Bryn, I hear you, you’re clearly very heated about this subject and you’ve been throwing that word around a lot now - but what does it even actually mean? And how do I make it not suck? 

Well I’m gonna let the experts explain it best -

>“Accessibility is the practice of making your websites usable by as many people as possible. We traditionally think of this as being about people with disabilities, but the practice of making sites accessible also benefits other groups such as those using mobile devices, or those with slow network connections.

>You might also think of accessibility as treating everyone the same, and giving them equal opportunities, no matter what their ability or circumstances. Just as it is wrong to exclude someone from a physical building because they are in a wheelchair (modern public buildings generally have wheelchair ramps or elevators), it is also not right to exclude someone from a website because they have a visual impairment. We are all different, but we are all human, and therefore have the same human rights.” - [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)

So you get it, right? It’s basically making sure that anyone, in any circumstance, disability or not, permanent or temporary, can get the same information from and interact with your stuff in an equivalent manner. It’s not going to be exactly the same experience, just making sure that everyone has access to the beautiful product that you have produced! 

Sounds pretty great right? 

But I get it. Maybe you’ve had an experience with an old site needing to be completely uplifted and overhauled to meet AA standards. And maybe it wasn’t even your project or your company’s application to begin with. I hear you. That IS tough! It takes a lot of trial and error and tweaking and frustration. But I promise you it’s not without its rewards. And - do you know how we can prevent these annoyances in the future?

**Build new projects the right way, the first time, with accessibility in mind.**

***

So what are these standards we have to meet anyway? Well it depends on where you live, where the users that your project is serving live, and what kind of work it is. There’s different laws existing already or coming very soon all over the world. But in general, [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) (The Web Content Accessibility Guidelines) created by W3C (The World Wide Web Consortium) is the way to go. At time of writing this article there are two WCAG Standards to follow as a ‘ruleset’, [2.0](https://www.w3.org/TR/WCAG20/) and [2.1](https://www.w3.org/TR/WCAG21/). There are also testable success criteria for each guideline they set out at three levels, A, AA, AAA. In my experience AA is what’s commonly sought after as “a pass”. 

The great news is that HTML 5, when used semantically, does like 90% of the work for you. Start there. When you need a button, use `<button>`, not `<div>`, and style it accordingly (rant about CSS for another time…) Use the elements like `<footer>`, `<aside>`, and `<nav>` that HTML 5 was kind enough to add. 

What about unique content Bryn? Like modals, carousels, and select dropdowns that need to look nicer than browser implemented styles? Good question, reader! For that I direct you to [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/)! The Accessible Rich Internet Applications (ARIA) suite of web standards, that came out of the Web Accessibility Initiative (WAI… lots of acronyms I know…) It’s basically a bunch of helpful roles and properties and such that help with “dynamic content and advanced user interface controls” - aka your fun custom stuff! 

And here, I even got you [this cheat sheet](https://www.w3.org/WAI/standards-guidelines/aria/), from WAI-ARIA themselves, to help you accessibly build a handful of the most common components. 

There are so many tools out there - such as pre-built accessible UI libraries, for whatever your favorite framework may be, and browser extensions to help you audit your site and learn what needs to be updated. I’ll put a list of a handful of my favorites in the notes below. 

So you got this! I believe in you. Let’s make the internet a more accessible place. Let’s boost your user base, lower your bounce rate, and provide a better experience to your users overall. I hope I’ve provided a little extra motivation for you and some context on where to begin. 

Feel free to get in touch if you have any favorite tool suggestions to add to this list or if you have questions on where to begin! 

*** 

## Tools & Resources:
[axe Beta](https://www.deque.com/axe/beta/) - my new favorite addition to the accessibility tool world
[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) - automated audits for performance, accessibility, progressive web apps, SEO, and more
[The a11y project](https://www.a11yproject.com/)
[WAVE](https://wave.webaim.org/)
[ARC toolkit](https://www.tpgi.com/arc-platform/arc-toolkit/)

## Sources:

<https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility>

<https://www.w3.org/WAI/standards-guidelines/wcag/>

<https://a11yproject.com/>

<https://www.ada.gov/pcatoolkit/chap5toolkit.htm>

<https://www.huntonlaborblog.com/2019/01/articles/public-accommodations/muddy-waters-ada-website-compliance-may-become-less-murky-2019/>

## Notes:

[From MDN -](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Accessibility/What_is_accessibility)  

"Building accessible sites benefit everyone:

- Semantic HTML, which improves accessibility, also improves SEO, making your site more findable.
- Caring about accessibility demonstrates good ethics and morals, which improves your public image.
- Other good practices that improve accessibility also make your site more usable by other groups, such as mobile phone users or those on low network speed. In fact, everyone can benefit from many such improvements.
- Did we mention it is also the law in some places?"

[From the a11y project](https://www.a11yproject.com/about/)

"Why accessibility is important: 

Blind and visually impaired makeup 285,000,000 people according to the World Health Organization (June 2012) with 39,000,000 categorized as legally blind and the remaining 246,000,000 visually impaired. Deaf and hearing impaired makeup 275,000,000 (2004) in the moderate-to-profound hearing impairment category.

To put these in perspective, the population of the United States of America is 315,000,000 (January 2013).
Disabilities can also be conditional. A broken arm, a loud restaurant, harsh glare, not speaking the local language—all are examples where someone may benefit from accessible practices."
