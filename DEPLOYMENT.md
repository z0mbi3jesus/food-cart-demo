# 🚀 Deployment Guide

This guide provides step-by-step instructions for deploying your food cart website to various hosting platforms. Each platform has different strengths, so choose the one that best fits your needs.

## 📋 Pre-Deployment Checklist

Before deploying, ensure you've completed customization:

- [ ] Updated all placeholder content in `index.html`
- [ ] Added your food images to `images/` folders
- [ ] Customized colors and branding in `styles.css`
- [ ] Updated cookie policy with your business details
- [ ] Tested the site locally by opening `index.html`
- [ ] Verified all images load correctly
- [ ] Tested mobile responsiveness

## 🌐 Hosting Platform Comparison

| Platform | Cost | Private Repos | Custom Domain | Ease of Use | Best For |
|----------|------|---------------|---------------|-------------|----------|
| **Netlify** | Free | ✅ Yes | ✅ Yes | ⭐⭐⭐⭐⭐ | Beginners |
| **Vercel** | Free | ✅ Yes | ✅ Yes | ⭐⭐⭐⭐ | Developers |
| **GitHub Pages** | Free | ❌ Public only | ✅ Yes | ⭐⭐⭐ | Open source |
| **GitLab Pages** | Free | ✅ Yes | ✅ Yes | ⭐⭐⭐ | Privacy focused |

## 🥇 Recommended: Netlify (Easiest)

**Best for:** Beginners, private repositories, automatic deployments

### Step-by-Step Netlify Deployment

1. **Create Netlify Account**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub, GitLab, or email

2. **Deploy from Git Repository**
   - Click "New site from Git"
   - Connect your GitHub/GitLab account
   - Select your food-cart repository
   - Leave build settings as default (we've included `netlify.toml`)
   - Click "Deploy site"

3. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain
   - Follow DNS setup instructions
   - SSL certificate is automatic

4. **Environment Variables (If needed later)**
   - Site settings → Environment variables
   - Add any API keys or configuration

### Netlify Features
- ✅ Automatic deployments on every commit
- ✅ Form handling (for contact forms)
- ✅ Branch previews for testing
- ✅ CDN and performance optimization
- ✅ Free SSL certificates

---

## 🚀 Alternative: Vercel (Developer-Friendly)

**Best for:** Performance optimization, advanced features

### Step-by-Step Vercel Deployment

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub/GitLab

2. **Import Repository**
   - Click "New Project"
   - Import your repository
   - Vercel auto-detects static site (no build needed)
   - Click "Deploy"

3. **Configure Domain**
   - Project settings → Domains
   - Add custom domain
   - Configure DNS records

### Vercel Features
- ✅ Global CDN with edge functions
- ✅ Performance analytics
- ✅ Preview deployments
- ✅ Automatic optimizations

---

## 🏠 GitHub Pages (Public Repositories Only)

**Best for:** Open source projects, free hosting

### Step-by-Step GitHub Pages

1. **Repository Settings**
   - Go to your GitHub repository
   - Settings → Pages (in sidebar)

2. **Configure Source**
   - Source: "Deploy from a branch"
   - Branch: `main` or `master`
   - Folder: `/ (root)`
   - Click "Save"

3. **Access Your Site**
   - Site will be available at: `https://yourusername.github.io/repository-name`
   - Takes 5-10 minutes for first deployment

### GitHub Pages Limitations
- ❌ **Requires public repository**
- ✅ Free hosting and custom domains
- ✅ Automatic deployments

---

## 🔒 GitLab Pages (Private Repository Support)

**Best for:** Privacy, advanced CI/CD

### Step-by-Step GitLab Pages

1. **Push to GitLab**
   - Create repository on [gitlab.com](https://gitlab.com)
   - Push your code (we've included `.gitlab-ci.yml`)

2. **Automatic Deployment**
   - GitLab CI/CD automatically deploys
   - Check CI/CD → Pipelines for progress

3. **Access Your Site**
   - Available at: `https://yourusername.gitlab.io/repository-name`
   - Or configure custom domain in Settings → Pages

### GitLab Features
- ✅ Private repository support
- ✅ Advanced CI/CD pipeline
- ✅ Custom domains and SSL

---

## 🔧 Manual Deployment (Any Web Host)

**Best for:** Existing web hosting, full control

### Files to Upload

Upload these files to your web host's public folder:

```
public_html/
├── index.html
├── styles.css
├── script.js
├── cookie-policy.html
├── site.webmanifest
├── sitemap.xml
├── robots.txt
└── images/
    ├── full-size/
    └── thumbnails/
```

### FTP/SFTP Upload
1. Use FileZilla, WinSCP, or similar FTP client
2. Connect to your web host
3. Upload all files to public folder (usually `public_html` or `www`)
4. Set proper file permissions (644 for files, 755 for folders)

---

## 🔍 Post-Deployment Testing

After deployment, test your site:

- [ ] **Responsive Design**: Test on mobile, tablet, desktop
- [ ] **Images**: Verify all images load correctly
- [ ] **Links**: Check all internal and external links
- [ ] **Forms**: Test cookie consent functionality
- [ ] **Performance**: Run PageSpeed Insights
- [ ] **SEO**: Check Google Search Console

## 🎯 SEO & Analytics Setup

### Google Search Console
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add your domain
3. Verify ownership
4. Submit sitemap: `https://yoursite.com/sitemap.xml`

### Google Analytics (Optional)
1. Create Google Analytics account
2. Add tracking code to `index.html` (before closing `</head>`)
3. Configure goals and conversions

## 🔧 Troubleshooting

### Common Issues

**Images not loading:**
- Check file paths are correct
- Ensure images are uploaded to correct folders
- Verify file extensions match HTML references

**CSS/JS not working:**
- Check file paths in HTML
- Ensure proper MIME types on server
- Clear browser cache

**Mobile responsiveness issues:**
- Test with browser dev tools
- Check viewport meta tag is present
- Verify CSS media queries

### Performance Tips

- Optimize images before uploading
- Enable gzip compression on server
- Use CDN for static assets
- Minimize HTTP requests

## 📞 Support

If you encounter deployment issues:

1. Check platform-specific documentation
2. Review error logs in hosting dashboard
3. Test locally first to isolate issues
4. Contact hosting support if needed

---

**Your food cart website is ready to go live! 🎉**

Choose your preferred platform and follow the steps above. Most platforms offer free tiers that are perfect for small businesses starting out.