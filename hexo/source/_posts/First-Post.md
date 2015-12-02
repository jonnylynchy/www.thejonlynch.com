title: Hexo - Blogging Platform for Developers
date: 2015-12-01 14:39:15
categories:
- General
tags:
- Hexo
- Node.js
---
## Welcome!

I've done blogging before here and there with WordPress, Blogger, etc., but I don't feel any of those old posts are relevant to my career or life in general anymore. So... goodbye old and hello new!

I'm using [Hexo](http://hexo.io/). Hexo is not just a blogging platform, it's also a powerful static file generator which uses Node.js to generate content on your local machine, or where you choose to configure the generated content to deploy. Although not a traditional blogging platform such as WordPress, it's very versatile and has loads of features.

Once installed via NPM, creating a new blog post via command line is easy, like-a-so:
``` bash
$ hexo new "My First Blog Post!"
```

Hexo then creates a new source file within your hexo directory. With the default setup, Hexo creates these files in Markdown. No need to edit HTML. There are also configuration options to create files as Jade, Haml or Ejs.

Example of post:
``` markdown
title: First Post
date: 2015-12-01 13:15:15
categories:
- Stuff
tags:
- Cool Stuff
- Other Cool Stuff
---
### Content
Write stuff

## Sub Content
Write some more stuff
```

Once you've created your file and written up your post, you can generate the static files via:
``` bash
$ hexo generate
```

This will create files within your configured directory (mine is /public).
Then you can deploy this to Heroku or GitHub and voila! Since I have the GitHub repo for my site setup to trigger a Heroku deployment, this makes it super easy for me.

Obviously, this is for the more tech savvy user who wants to blog. But once it's setup, a couple of commands will do the trick.

Anyway, I'll be blogging about life, work, all things javascript, Front-End development, etc. so check back!

Thanks for stopping by.
-Jon
