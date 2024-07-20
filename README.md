# Flowers

Create a simple, heartfelt website for a loved one with an animation including flowers and hearts, along with messages you can leave. The design includes navigation arrows that let the user click through past messages.

The animation data is derived from text found in the data folder. You can change this data to any song or text of your choice.

This tutorial should be very beginner friendly, but if you encounter issues you can either dm me on Twitter at @wgm_v or use ChatGPT to help walk you through it.

## Features

- Display messages for your loved ones.
- Navigate between different messages using arrows.
- Flower and heart animations based on text data.

## Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, etc.).
- Basic knowledge of HTML, CSS, and JavaScript is helpful but not necessary.
- A text editor (like VSCode, Sublime Text, or even Notepad). I used VSCode.
- A hosting service for your website, like GitHub Pages, Cloudflare Pages, etc. I used Cloudflare.
- If you'd like, a custom domain name - this will add a little bit of complexity though. I purchased one via Godaddy.

## Getting Started

### Beginner-Friendly Version (Using GitHub's Web Interface)

**Note: You need to have a GitHub account to fork the repository.**

1. **Fork the repository**:
    - Go to the [repository page](https://github.com/0x0e18/flowers) on GitHub.
    - Click the `Fork` button in the top-right corner of the page to create your own copy of the repository.

2. **Edit the files**:
    - Navigate to your forked repository.
    - Click on the file you want to edit, such as `index.html`, `styles.css`, or `script.js`.
    - Click the pencil icon in the top-right corner to edit the file.
    - Make your changes and scroll down to the bottom of the page to commit them.

3. **Preview your changes**:
    - Go to the `Settings` tab of your forked repository.
    - Scroll down to the `GitHub Pages` section.
    - Under `Source`, select the `main` branch and click `Save`.
    - Your website will be published at `https://yourusername.github.io/flowers`.

### Advanced Version (Using Git CLI)

1. **Clone the repository**:
    ```sh
    git clone https://github.com/0x0e18/flowers.git
    ```

2. **Navigate to the project directory**:
    ```sh
    cd flowers
    ```

3. **Open the project**:
    - Open `index.html` in your preferred web browser to see the website in action.

4. **Check the status of your repository**:
    ```sh
    git status
    ```

5. **Add the edited files** to the staging area:
    ```sh
    git add index.html script.js styles.css
    ```

6. **Commit the changes** with a descriptive message:
    ```sh
    git commit -m "Your description of what you changed goes here"
    ```

7. **Push the changes** to your GitHub repository:
    ```sh
    git push origin main
    ```
    Replace `main` with the name of your branch if it's different.

## Customization

1. **Messages**:
    - Open `index.html`.
    - Locate the `<div id="message">` section.
    - Modify the content of the `<span>` elements with your own messages.

2. **Text for Animations**:
    - Open the `data` folder.
    - Replace the text files with your own text files.
    - Ensure the filenames match the ones referenced in `script.js` or update the filenames in `script.js`.

3. **Styling**:
    - Open `styles.css` to customize the appearance of the website.
    - Change colors, fonts, and layout as desired.

4. **Animation Logic**:
    - Open `script.js` to modify the animation or message navigation logic.
    - Advanced users can tweak the flower and heart animations or add new features.

## File Overview

### index.html
This file contains the structure of your webpage. It includes the messages and references to other files like `styles.css` and `script.js`. To change the visible content of the website, you'll edit this file.

### styles.css
This file contains all the styling rules for your website. It controls the layout, colors, fonts, and responsiveness. Beginners may not need to edit this file, but if you're comfortable with CSS, feel free to make changes to suit your design preferences.

### script.js
This file contains the logic for animations and interactivity. It handles the creation of flower and heart animations, the navigation buttons, and the display of messages. This is where the magic happens, and advanced users can modify this to change how the animations work.

### data Folder
This folder contains the text files used to generate the animations. You can replace these files with your own text, such as song lyrics, poems, or personal messages. Just make sure the filenames match those referenced in `script.js`.

## Deployment

To make your website live, you can use services like GitHub Pages, Netlify, or Vercel. Here’s a simple guide using GitHub Pages:

1. Push your changes to GitHub.
2. Go to your repository on GitHub.
3. Click on the `Settings` tab.
4. Scroll down to the `GitHub Pages` section.
5. Under `Source`, select `main` branch and click `Save`.
6. Your website will be published at `https://yourusername.github.io/flowers`.

## Credits

This project was inspired by and assisted by a tutorial from 'Creative Coderie'. If you found this repository helpful, consider starring their repository and subscribing to their channel.

- [Video Tutorial](https://www.youtube.com/watch?v=r_3D8zDci8c)
- [Repository](https://github.com/hbyhadeel/GenArtTutorials/tree/main/Loading_Text_Files_Tutorial)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to submit a Pull Request.

## Support

If you have any questions or need further assistance, please feel free to open an issue in the repository or reach out to me directly.

---
