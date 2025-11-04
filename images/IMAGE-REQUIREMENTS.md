# Image Requirements for Your Food Cart Template

## 📁 Folder Structure
You need to add images to these two folders:

### Thumbnails Folder (`images/thumbnails/`)
- **Purpose**: Small images displayed in the menu grid
- **Recommended Size**: 300x300 pixels (square format works best)
- **File Format**: JPG or PNG
- **File Names**: Must match what you set in your HTML menu items

### Full-Size Folder (`images/full-size/`)
- **Purpose**: Large images shown when users hover over menu items
- **Recommended Size**: 800x600 pixels or larger (landscape orientation preferred)
- **File Format**: JPG or PNG
- **File Names**: Must match what you set in your HTML menu items

## 🖼️ Required Images
Based on the template structure, you need 6 pairs of images:

1. `item1.jpg` (both in thumbnails/ and full-size/)
2. `item2.jpg` (both in thumbnails/ and full-size/)
3. `item3.jpg` (both in thumbnails/ and full-size/)
4. `item4.jpg` (both in thumbnails/ and full-size/)
5. `item5.jpg` (both in thumbnails/ and full-size/)
6. `item6.jpg` (both in thumbnails/ and full-size/)

## ✏️ Customizing File Names
You can use any file names you want, but make sure to:

1. **Update HTML**: Change the `data-thumb` and `data-full` attributes in each menu item
2. **Update JavaScript**: Change the `availableImages` array in `script.js`
3. **Keep Names Consistent**: Thumbnail and full-size versions should have the same name

## 💡 Image Tips
- Use high-quality, appetizing photos of your food
- Ensure good lighting and professional appearance
- Keep file sizes reasonable for web performance (under 1MB each)
- Consider using the same aspect ratio for consistency
- Make sure images represent your actual menu items

## 🔄 Adding More Menu Items
To add more than 6 menu items:
1. Add more menu item HTML blocks in `index.html`
2. Add corresponding image files
3. Update the `availableImages` array in `script.js`

## Example File Names for Different Cuisines
- **Mexican**: `tacos.jpg`, `burritos.jpg`, `nachos.jpg`
- **BBQ**: `ribs.jpg`, `brisket.jpg`, `pulled-pork.jpg`
- **Asian**: `pad-thai.jpg`, `fried-rice.jpg`, `spring-rolls.jpg`