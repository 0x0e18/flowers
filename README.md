# flowers
Create a simple website for a loved one with an animation including flowers and hearts, along with messages you can leave. The design includes navigation arrows that let the user click through past messages.

The data that produces the animation is derived from lyrics from songs, found in the data folder. This can be changed to any song, or text.

When I created this, I bought a domain name with Godaddy and hosted the website using Cloudflare. This should be pretty easy with some googling or usage of ChatGPT, feel free to implement this however you'd like though.

Explanation of files:

- index.html
  This is what shows the actual content on the webpage. It dictates what the messages say, and says that the animation should be shown, that the navigation buttons should be shown, etc. If you want to edit the actual visible content of the website, this is what you would use.
- styles.css
  This styles the webpage. If you're a beginner, you likely won't want to touch this but if you know what you're doing feel free to make changes. There is also some code in the CSS to ensure the website is responsive, meaning it will appear as I wanted it to across desktop, mobile, etc.
- script.js
  This is what actually creates the animation, and it controls the actual program of the website. This file includes code for the navigation arrows, for the animation, for handling the logic of the messages appearing/disappearing based on the navigation buttons being used, etc. Additionally, this takes the information from the Data folder and creates the animation based on said data.
- Data Folder
This contains the information upon which the animation is created. I used song lyrics, but as long as you properly edit the script.js files to account for the filename changes if you do change them, you can do whatever with these.
