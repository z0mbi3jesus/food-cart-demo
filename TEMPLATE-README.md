# Food Cart Website Template

## 🎯 Overview
This is a customizable template for food cart/restaurant websites. It features:
- Responsive design with hover effects
- Image gallery with lightbox-style overlays
- SEO-optimized structure
- Social media meta tags
- JSON-LD structured data for search engines
- Parallax floating image backgrounds

## 🛠️ How to Customize This Template

### 1. Basic Information
Edit these files to customize for your food cart:

#### `index.html` - Update these sections:
- **Business Name**: Replace "Moon Pocha" with your cart name
- **Description**: Update tagline and intro text
- **Contact Info**: Phone, address, hours
- **Menu Items**: Replace with your actual menu

#### `site.webmanifest` - Update app details:
- App name and short name
- Theme colors
- Icons

### 2. SEO & Meta Tags
In `index.html`, update these meta tags:
- `<title>` - Your business name and description
- `<meta name="description">` - Brief description of your food cart
- `<meta name="keywords">` - Relevant food/cuisine keywords
- Open Graph tags (og:title, og:description, og:image)
- Twitter Card tags
- JSON-LD structured data

### 3. Images Setup
Create these folders and add your images:

```
images/
├── thumbnails/          # Small images for grid (300x300px recommended)
└── full-size/          # Large images for hover (800x600px+ recommended)
```

**Important**: Update the image file names in:
- HTML menu items (data-thumb and data-full attributes)
- JavaScript array `availableImages`

### 4. Menu Customization
Each menu item in HTML follows this structure:
```html
<div class="menu-item" 
     data-title="Item Name" 
     data-description="Item description" 
     data-price="$XX" 
     data-thumb="images/thumbnails/item.jpg" 
     data-full="images/full-size/item.jpg">
    <!-- content -->
</div>
```

### 5. Styling
- **Colors**: Update CSS custom properties in `styles.css`
- **Fonts**: Modify Google Fonts imports in HTML head
- **Logo**: Style the `.logo` class for your brand

### 6. Privacy & Cookie Compliance 🍪
The template includes modern privacy compliance features:

#### Cookie Consent System:
- **Cookie Banner**: Appears after 2 seconds for new visitors
- **Three Options**: Accept All, Decline All, or Customize
- **Granular Controls**: Essential, Analytics, and Marketing categories
- **Persistent Storage**: Remembers user preferences for 1 year

#### Privacy Features:
- **Privacy Policy Modal**: Accessible from footer and cookie banner
- **Dedicated Cookie Policy Page**: `cookie-policy.html` with detailed information
- **GDPR/CCPA Compliant**: Includes all required privacy disclosures
- **User Rights**: Clear explanation of data rights and contact information

#### Customization Required:
- Update `[YOUR EMAIL]` in privacy sections
- Update `[UPDATE DATE]` in both privacy and cookie policies
- Configure analytics tracking IDs (Google Analytics, etc.)
- Review and modify privacy content for your specific practices

### 7. Domain & URLs
Update all absolute URLs throughout the code:
- Meta tags (og:url, twitter:url, canonical)
- JSON-LD structured data
- Image paths in meta tags

## 📁 Template Structure
```
/
├── index.html              # Main page
├── styles.css             # All styling
├── script.js              # Interactive functionality
├── site.webmanifest       # PWA manifest
├── robots.txt             # SEO robots file
├── sitemap.xml            # SEO sitemap
├── SEO-CHECKLIST.md       # SEO optimization guide
├── README.md              # Original setup guide
├── TEMPLATE-README.md     # This template guide
└── images/
    ├── thumbnails/        # Small menu images
    └── full-size/         # Large menu images
```

## 🚀 Quick Start Steps
1. Replace all instances of "Moon Pocha" with your business name
2. Update contact information and hours
3. Replace menu items with your actual menu
4. Add your food images to the images folders
5. Update meta tags and structured data
6. Customize colors and fonts in CSS
7. Test the website and deploy

## 📋 Checklist
- [ ] Business name updated everywhere
- [ ] Contact info updated (phone, address, hours)
- [ ] Menu items replaced with your items
- [ ] Images uploaded and file names updated
- [ ] Meta tags customized for SEO
- [ ] Colors and fonts styled to your brand
- [ ] Domain URLs updated throughout
- [ ] JSON-LD structured data updated
- [ ] Site tested on mobile and desktop

## 💡 Features Included
- Mobile-responsive design
- Interactive hover effects on menu items
- Parallax floating background images
- SEO optimization (meta tags, structured data)
- Social media sharing optimization
- Accessibility features (alt tags, ARIA labels)
- Performance optimizations
- **🍪 GDPR/CCPA compliant cookie consent system**
- **⚖️ Privacy policy modal and dedicated cookie policy page**
- **🔐 Granular cookie controls (Essential, Analytics, Marketing)**
- **📋 Modern privacy compliance with user consent management**