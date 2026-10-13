RescueLink Website
A Bengali-language landing website introducing the RescueLink mobile app.

Built using only HTML5, CSS3, and vanilla JavaScript — no build tools or libraries required.

File Structure
text
RescueLink/
├── index.html        Entire page structure (all text in Bengali)
├── style.css         All styles, responsive rules, and animations
├── script.js         Mobile menu, active links, scroll reveal, gallery
├── assets/
│   ├── images/
│   │   ├── logo.png          Navbar and footer logo (shield symbol, transparent background)
│   │   ├── logo-full.png     Full logo (used for social sharing previews)
│   │   ├── favicon.png       Favicon
│   │   ├── hero-app.png      Phone screen in the hero section
│   │   ├── app-home.png      Home screen
│   │   ├── app-sos.png       Emergency SOS screen
│   │   ├── app-map.png       Map and location
│   │   ├── app-shelters.png  Nearby shelters
│   │   ├── app-services.png  Emergency services information
│   │   └── app-profile.png   Profile and settings
│   └── icons/                Empty; icons are embedded as inline SVGs in index.html
└── README.md
How to Run
Open the index.html file in any modern web browser. No build process or server is required.

The Hind Siliguri font is loaded from Google Fonts, so an internet connection is required to display the font.

How to Replace the Sample App Screenshots
The app-*.png and hero-app.png files in assets/images/ currently contain sample screens, not actual app screenshots.

If actual screenshots are available, replace the existing files with the new ones using the same filenames — no code changes will be necessary.

Maintain an aspect ratio of approximately 9:19.2 for the images (for example, 1242 × 2656 pixels). The phone frame will be added automatically, so do not include a frame in the screenshots.

hero-app.png is generally a copy of app-home.png.

After replacing the sample screens with actual screenshots, remove the sample-related notice (The screens shown here are sample previews…) from the app showcase section in index.html.

The description for each image (alt text) is specified in the data-alt attribute in index.html. Update the descriptions to match the replacement images.

Logo
logo.png and logo-full.png were created from the logo provided with the project.

If an SVG version is available, save it as assets/images/logo.svg and update the paths to logo.png in index.html accordingly.

Contact Information
An email address is included in the contact section and footer through a mailto: link in index.html.

Verify or update the email address before publishing the website.

Features and Claims
Feature descriptions are based on the planned capabilities of the app. If any feature has not yet been implemented, edit the corresponding cards and screens accordingly.

The website does not send emergency alerts, request location access, or claim to transmit alerts to the authorities.

