# fallenshard.github.io

My personal portfolio site, built on [al-folio](https://github.com/alshedivat/al-folio) **v1** (the pluginized, gem-based Jekyll architecture). This repo holds only my **content and configuration** — the actual theme runtime (layouts, includes, styles, JS) lives in versioned `al_folio_*` gems, so there's very little machinery to maintain here.

> This README is a practical "how do I work on this" guide. For the deep architecture (how the gems fit together, CI gates, ownership boundaries) see [CLAUDE.md](CLAUDE.md) and [AGENTS.md](AGENTS.md).

---

## Quick start (Docker — recommended)

Docker is the easiest path: no Ruby/Python setup, and it auto-rebuilds as you edit.

```bash
docker compose up -d        # build + serve (first run is slow)
```

Then open: **http://127.0.0.1:8080/** (this site has a blank `baseurl`, so it serves at the root path, not under `/al-folio/`).

- Editing content or `_sass/` files → the site **rebuilds automatically**; just refresh the browser. CSS is aggressively cached, so use a **hard refresh (Ctrl+F5)** to see style changes.
- Editing **`_config.yml`** → **not picked up automatically.** Jekyll's `--watch` doesn't reload config, and the container's auto-restart is unreliable. Run **`docker compose restart`** (or `down` + `up`) to apply config changes, then hard-refresh.
- Stop it with `docker compose down`. Logs: `docker compose logs --tail=80`.

> ⚠️ **Don't trust the local `_site/` folder.** Docker builds to a container-internal `/tmp/_site` (deliberately, to avoid bind-mount write deadlocks), so the `_site/` on disk is stale. Always judge changes from the running server, not the files.

### Alternative: local Ruby

If you'd rather run it natively (faster reloads):

```bash
bundle install
bundle exec jekyll serve              # → http://localhost:4000/
```

Optional extras: `bin/setup-python-deps` installs the Python toolchain (notebook rendering, CV/RenderCV, scholar citations). Responsive images (`imagemagick.enabled: true` in `_config.yml`) need ImageMagick's `convert` on your PATH.

---

## Where my data lives

Everything you'd actually edit to update the site:

| What | Where |
| --- | --- |
| **Bio / landing page** | [`_pages/about.md`](_pages/about.md) — the intro text + `subtitle` |
| **Profile photo** | [`assets/img/prof_pic.jpg`](assets/img/) |
| **CV / résumé** | [`assets/json/resume.json`](assets/json/resume.json) (JSONResume format) + the downloadable PDF in [`assets/pdf/`](assets/pdf/) |
| **Publications** | [`_bibliography/papers.bib`](_bibliography/papers.bib) — one BibTeX entry per paper; previews come from [`assets/img/publication_preview/`](assets/img/) |
| **Projects** | [`_projects/*.md`](_projects/) — one file per project; `category` + `importance` control grouping/order; card image is the `img:` field |
| **Project card images** | [`assets/img/cards/`](assets/img/) |
| **Social links** | [`_data/socials.yml`](_data/socials.yml) — uncomment the ones you use |
| **Social preview / SEO** | [`_config.yml`](_config.yml) — `og_image` (link thumbnail), `description`, `keywords`; `serve_og_meta` / `serve_schema_org` toggles |
| **Site-wide settings** | [`_config.yml`](_config.yml) — name, URL, feature toggles, plugin list |
| **Navbar pages** | [`_pages/`](_pages/) — a page shows in the nav when it has `nav: true` (ordered by `nav_order`) |

### Adding a project

Copy an existing file in [`_projects/`](_projects/), e.g. [`crisp.md`](_projects/crisp.md), and edit the front matter:

```yaml
---
layout: page
title: My Project
description: One-line summary shown under the title on the card.
img: assets/img/cards/my-project.png   # card thumbnail
importance: 1                          # lower = earlier within its category
category: personal                     # must be one of the categories in _pages/projects.md
---
```

The categories and their order are defined by `display_categories` in [`_pages/projects.md`](_pages/projects.md).

### Adding a publication

Append a BibTeX entry to [`_bibliography/papers.bib`](_bibliography/papers.bib). Useful non-standard fields al-folio understands: `selected={true}` (shows it on the landing page), `preview={image.png}` (thumbnail from `assets/img/publication_preview/`), `abstract`, `pdf`, `arxiv`, `code`, `award`.

### Writing blog posts (kept for future use)

The blog is **fully wired but switched off** right now — all the machinery (pagination, year/tag/category archives, related posts, the blog layout) is in place and intentionally kept. To start blogging:

1. **Turn the blog page on:** in [`_pages/blog.md`](_pages/blog.md) set `published: true` and uncomment the `permalink`, `title`, and `nav_order` lines so it appears in the navbar.
2. **Create a `_posts/` folder** and drop in Markdown files named `YYYY-MM-DD-title.md`:

   ```markdown
   ---
   layout: post
   title: My First Post
   date: 2026-06-16
   description: One-line summary.
   tags: rendering vulkan       # optional; become /blog/tag/... pages
   categories: notes            # optional; become /blog/category/... pages
   featured: true               # optional; pins it to the top of the blog page
   ---

   Post body in Markdown. Math, code, and image tools all work.
   ```

3. Optionally set `blog_name` / `blog_description` in [`_config.yml`](_config.yml) to your own title/tagline — they render as the blog page header (currently blank).

**Native posts vs. imported posts — don't confuse the two:**

- Writing your own posts (above) needs **none** of the `al_ext_posts` plugin or `external_sources` config.
- `external_sources` in [`_config.yml`](_config.yml) (with the `al_ext_posts` plugin) is a *separate* feature that mirrors **external** RSS/URL posts into your blog. It's empty by default — add an entry there only if you want to surface posts you publish elsewhere (e.g. Medium).

---

## Custom styling

**All theme CSS/Sass lives in the gems** — don't go looking for `_sass/_base.scss` here, it doesn't exist. Your one place for custom styles is:

### [`_sass/_custom.scss`](_sass/_custom.scss)

It's `@use`'d **last** by `assets/css/main.scss`, so your rules win on equal specificity. Add only what you want to change; everything else comes from the gems. Example (already in there) — muting the project-card description:

```scss
.card .card-text {
  opacity: 0.7;
}
```

To find the right selector, inspect the running page in DevTools, then add an override here. Save → Docker rebuilds → **Ctrl+F5**.

> If you ever need to change something a gem owns more deeply, you *can* drop a local copy of a gem file (a layout/include) into this repo to shadow it — but that's tracked in [`.al-folio-overrides.yml`](.al-folio-overrides.yml) and flagged on gem updates. Prefer a `_custom.scss` tweak when one will do.

---

## Updating the theme

The theme ships as gems pinned in the [`Gemfile`](Gemfile) (and mirrored in the `plugins:` list in `_config.yml` — **these two must stay in sync**). To pull newer gem versions:

```bash
bundle update                          # respects Gemfile version pins
bundle exec al-folio upgrade audit     # checks your config against the v1 contract
```

---

## Deploying

The site is served by **GitHub Pages** from this repo (`fallenshard.github.io`). The manual build-and-publish path is:

```bash
bin/deploy                             # builds, runs purgecss, force-pushes the gh-pages branch
```

---

## Troubleshooting

| Symptom | Cause / fix |
| --- | --- |
| Config edit doesn't show up | `_config.yml` isn't hot-reloaded — run `docker compose restart`. |
| Style/CSS edit doesn't show up | Browser CSS cache — **hard refresh (Ctrl+F5)**. |
| `_site/` on disk looks stale | Expected — Docker serves container-local `/tmp/_site`; judge from the running server, not the folder. |
| Page 404s or site looks broken after an edit | Likely a Liquid/YAML build error — check `docker compose logs --tail=80`. |
| Looking for the site under `/al-folio/` | This site uses a blank `baseurl`; it serves at the **root** (`http://127.0.0.1:8080/`). |

---

## Handy commands

```bash
docker compose up -d                              # serve at :8080
docker compose logs --tail=80                     # see build output / errors
docker compose down                               # stop
bundle exec jekyll build                          # one-off production build to ./_site
bundle exec al-folio upgrade audit                # validate config against the v1 contract
```
