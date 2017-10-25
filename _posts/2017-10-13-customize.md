---
title: "Customize Duo"

# To set og:image:
# image: ...
---

## Step 1: Customize `_config.yml`

- Edit `_config.yml`, and change to change the site's title, URL, etc.
- Please change all the entries under `Customize Options: Must Change`.

## Step 2: Write Articles

- Change `README.md`, which will appear on the home page and also at the bottom of each article page.
- Then write articles under `_posts`.
- If you don't have anything under `_posts`, then duo will be a single-page site.
- If you want to add a Youtube video, read: [Responsive Youtube Example](/duo/posts/responsive-youtube-example/)

## Step 3: Deploy

If you `git clone`'d `duo`, then make sure to Change your git repository's `origin` before pushing:

```bash
git remote set-url origin https://github.com/USERNAME/REPOSITORY.git
```

## Optional

These steps are optional.

### Customize HTML

- All of the HTML is written in `_layouts/default.html`.

### Customize CSS

- You can use any of the classes from [Tachyons](http://tachyons.io/) CSS library, as well as [colors from material design](https://github.com/shuhei/material-colors)
- CSS is preprocessed using [Laravel Mix](https://github.com/JeffreyWay/laravel-mix/), a [Webpack](https://webpack.js.org/) wrapper.
- To edit CSS, first install [`yarn`](https://yarnpkg.com/en/), and run:

```bash
# Download npm modules
yarn install

# Run Jekyll and also watch for CSS changes
yarn watch
```

- Then edit `_static/app.css`, then wait for it to be compiled into `static/app.css`.
- You can also edit `webpack.mix.js` to customize Webpack config.

### Customize Favicon

Favicon is generated using [`favicon-emoji`](https://github.com/albinekb/favicon-emoji).

### Enabled Jekyll Plugins

- [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag/) for meta/og tag generation
- [jekyll-feed](https://github.com/jekyll/jekyll-feed) for RSS feed generation
- [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap) for sitemap generation
- [jemoji](https://github.com/jekyll/jemoji) for GitHub style emojis
