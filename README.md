# GANTU website

Static site: plain HTML, CSS and JavaScript. No build step.

```
index.html  offerings.html  industries.html  partners.html  contact.html
404.html  sitemap.xml  robots.txt  .nojekyll
css/style.css
js/main.js
```

## Host on GitHub Pages (free)
1. Create a repository on GitHub and upload all files (keep the folder structure; `index.html` must be at the root).
2. Repository **Settings > Pages**. Under *Build and deployment*, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
3. After a minute the site is live at `https://<your-username>.github.io/<repo-name>/`.

## Use your own domain (e.g. gantu.co.za)
1. In **Settings > Pages > Custom domain**, enter your domain and Save. GitHub creates a `CNAME` file.
2. At your DNS provider add either:
   - `A` records for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a `CNAME` record for `www` pointing to `<your-username>.github.io`; or
   - upload the files to any ordinary web host (cPanel, Netlify, Cloudflare Pages, etc.) into the public web folder.
3. Tick **Enforce HTTPS** once the certificate is ready.

Verify GitHub's current DNS values in their docs before changing records.

## After going live
- If the domain is not `gantu.co.za`, find and replace `https://gantu.co.za` across all files (canonical links, Open Graph URLs, sitemap, robots, structured data).
- Replace the placeholder wordmark in the header (`.logo` in each page) with your real logo image.
- Submit `sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Add a social share image (1200x630) and an `og:image` meta tag to each page.
- Replace the mailto contact form with a form service if you want enquiries delivered without an email app.
