# Food Cart Template Customization Checklist

## ✅ Essential Customizations (Must Do)

### 1. Business Information
- [ ] Replace `[YOUR BUSINESS NAME]` with your food cart name (appears ~15 times)
- [ ] Replace `[YOUR TAGLINE/SLOGAN]` with your business tagline
- [ ] Replace `[YOUR PHONE NUMBER]` with your contact number
- [ ] Replace `[YOUR ADDRESS]` with your location/address
- [ ] Replace `[YOUR HOURS]` with your operating hours
- [ ] Replace `[YOUR-DOMAIN]` with your actual website domain

### 2. Content & Description
- [ ] Replace `[CUISINE TYPE]` with your cuisine type (e.g., "Mexican", "Thai", "BBQ")
- [ ] Replace `[DESCRIPTION OF YOUR FOOD CART]` with your business description
- [ ] Replace `[KEY DISHES]` with your signature dishes for SEO
- [ ] Update intro paragraph with your unique story/description

### 3. Menu Items (Critical!)
- [ ] Replace all "Menu Item 1-6" with your actual menu items
- [ ] Update all descriptions with real food descriptions
- [ ] Update all prices with your actual prices
- [ ] Update image file names in HTML to match your actual image files
- [ ] Update the `availableImages` array in `script.js` with your image paths

### 4. Images
- [ ] Add your food images to `images/thumbnails/` folder (300x300px recommended)
- [ ] Add your food images to `images/full-size/` folder (800x600px+ recommended)
- [ ] Make sure image file names match what's referenced in HTML
- [ ] Add your business logo/icon files for the web app manifest

## ⚙️ Technical Customizations

### 5. SEO & Meta Tags
- [ ] Update meta description for search engines
- [ ] Update meta keywords with relevant food/location terms
- [ ] Update Open Graph (Facebook) tags
- [ ] Update Twitter Card tags
- [ ] Update JSON-LD structured data (business info, menu items, etc.)
- [ ] Update canonical URL to your domain

### 6. Site Configuration
- [ ] Update `site.webmanifest` with your business name and description
- [ ] Update `robots.txt` if needed for SEO
- [ ] Update `sitemap.xml` with your actual domain

### 7. Privacy & Cookie Compliance ⚖️
- [ ] Update privacy policy content in the modal (index.html)
- [ ] Update cookie policy page (`cookie-policy.html`) with your information
- [ ] Replace `[YOUR EMAIL]` in privacy sections
- [ ] Update `[UPDATE DATE]` in privacy policy and cookie policy
- [ ] Configure analytics tracking IDs if using Google Analytics
- [ ] Test cookie consent banner functionality
- [ ] Verify GDPR/CCPA compliance for your jurisdiction

## 🎨 Optional Customizations

### 7. Styling & Branding
- [ ] Customize colors in `styles.css` to match your brand
- [ ] Update Google Fonts to match your brand style
- [ ] Adjust logo styling and fonts
- [ ] Customize background colors and theme

### 8. Additional Features
- [ ] Add social media links in footer
- [ ] Add online ordering links if applicable
- [ ] Add location map or directions
- [ ] Add customer reviews section
- [ ] Add photo gallery or Instagram feed

## 🔧 Final Steps

### 9. Testing & Launch
- [ ] Test website on mobile devices
- [ ] Test all menu item hover effects
- [ ] Verify all images load correctly
- [ ] Test contact phone number link
- [ ] Check website performance and loading speed
- [ ] Validate HTML and CSS for errors
- [ ] Test SEO meta tags with tools like Facebook Debugger

### 10. Legal Compliance Check
- [ ] Review privacy policy for accuracy and completeness
- [ ] Ensure cookie policy matches your actual cookie usage
- [ ] Check local privacy law requirements (GDPR, CCPA, etc.)
- [ ] Test cookie consent on different devices and browsers
- [ ] Verify all privacy links work correctly

### 11. File Cleanup
- [ ] Delete original Korean food images from image folders
- [ ] Remove `TEMPLATE-README.md` and this checklist file
- [ ] Keep only the files you need for your final website

## 📝 Notes
- Keep the original file structure intact
- The template is mobile-responsive, so test on various devices
- The parallax background effect will use your menu images automatically
- All placeholder text is marked with `[BRACKETS]` for easy finding
- Use Find & Replace in your editor to quickly update common elements

## 🆘 Need Help?
- Check the `TEMPLATE-README.md` for detailed instructions
- Each section with `[BRACKETS]` needs to be replaced
- Keep the HTML structure the same for best results
- Test frequently as you make changes