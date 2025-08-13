# VaultFX-Loadingscreen

# 1899 Style Loading Screen for VORP RedM

A cinematic loading screen inspired by the 1899 TV series, featuring a slideshow and atmospheric music. This loading screen is designed for VORP RedM servers.

## Features

- Beautiful slideshow with smooth transitions
- Atmospheric 1899-style music
- Animated loading bar
- Dynamic loading messages
- Responsive design for all screen sizes
- Easy to customize

## Installation

1. Copy the `vaultfx_loadingscreen` folder to your server's `resources` directory
2. Add `ensure vaultfx_loadingscreen` to your `server.cfg`
3. Restart your server

## Customization

### Adding Your Own Images

1. Replace the images in the `html/img/` directory with your own
   - Name them `slide1.jpg`, `slide2.jpg`, `slide3.jpg`
   - Recommended size: 1920x1080 pixels
   - For best results, use images with a dark, moody aesthetic

### Changing the Music

1. Replace `html/sounds/ambient.mp3` with your own music file
   - Keep the same filename to avoid editing the HTML
   - For best results, use an atmospheric, period-appropriate track

### Modifying Text and Styling

- Edit `html/index.html` to change the title and other text
- Modify `html/css/style.css` to change colors, fonts, and animations
- Update `html/js/script.js` to change loading messages or behavior

## Configuration

You can customize the loading screen behavior by editing the following in `html/js/script.js`:

- `loadingMessages`: Array of messages that appear during loading
- Slide duration: Change the `5000` in `setInterval(showNextSlide, 5000)` to adjust how long each slide is displayed (in milliseconds)
- Loading speed: Adjust the values in the loading interval to change how quickly the progress bar fills

## Credits

- Font: Cinzel (Google Fonts)
- Inspired by the visual style of the 1899 TV series

## License

This resource is provided as-is. Feel free to modify and use it on your server.
