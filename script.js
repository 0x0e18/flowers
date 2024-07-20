// Flower class represents an animated flower
class Flower {
  constructor(_s, _cx, _cy) {
    this.s = _s; // String associated with the flower
    this.len = this.s.length; // Length of the string
    this.cx = _cx; // X-coordinate of the flower's center
    this.cy = _cy; // Y-coordinate of the flower's center
    this.petalCount = int(random(5, 12)); // Random number of petals
    this.angleStep = TWO_PI / this.petalCount; // Angle between petals
    this.size = 0; // Start with size 0 for blooming effect
    this.targetSize = random(20, 50); // Target size of the flower
    this.bloomSpeed = random(0.18, 0.54); // Speed at which the flower blooms
    this.col = color(random(150, 255), random(100, 200), random(150, 255)); // Color of the petals
    this.opacity = 255; // Start fully opaque
    this.fadeSpeed = random(0.9, 1.8); // Speed at which the flower fades out
  }

  // Draw a single petal of the flower
  drawPetal(x, y, angle, size) {
    push();
    translate(x, y);
    rotate(angle);
    noStroke();
    fill(red(this.col), green(this.col), blue(this.col), this.opacity);
    beginShape();
    vertex(0, 0);
    bezierVertex(size / 2, -size / 3, size, -size / 3, size, 0);
    bezierVertex(size, size / 3, size / 2, size / 3, 0, 0);
    endShape(CLOSE);
    pop();
  }

  // Draw the center of the flower
  drawCenter(x, y) {
    push();
    translate(x, y);
    noStroke();
    fill(255, 204, 0, this.opacity); // Yellow center with fading effect
    ellipse(0, 0, this.size / 5, this.size / 5); // Adjust size for center
    pop();
  }

  // Display the flower by drawing all petals and the center
  display() {
    for (let i = 0; i < this.petalCount; i++) {
      let angle = i * this.angleStep;
      this.drawPetal(this.cx, this.cy, angle, this.size);
    }
    this.drawCenter(this.cx, this.cy);
  }

  // Update the flower's size and opacity
  update() {
    if (this.size < this.targetSize) {
      this.size += this.bloomSpeed; // Grow the flower
    } else {
      this.opacity -= this.fadeSpeed; // Fade out the flower
    }
    this.display();
  }

  // Check if the flower has fully faded out
  isFaded() {
    return this.opacity <= 0;
  }
}

// Heart class represents an animated heart
class Heart {
  constructor(x, y) {
    this.x = x; // X-coordinate of the heart's position
    this.y = y; // Y-coordinate of the heart's position
    this.size = random(20, 50); // Size of the heart
    this.col = color(random(150, 255), random(100, 200), random(150, 255)); // Color of the heart
    this.opacity = 255; // Start fully opaque
    this.fadeSpeed = random(0.9, 1.8); // Speed at which the heart fades out
  }

  // Display the heart shape
  display() {
    push();
    translate(this.x, this.y);
    fill(red(this.col), green(this.col), blue(this.col), this.opacity);
    noStroke();
    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.1) {
      const r = this.size / 16;
      const x = r * 16 * pow(sin(a), 3);
      const y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }

  // Update the heart's opacity
  update() {
    this.opacity -= this.fadeSpeed; // Fade out the heart
    this.display();
  }

  // Check if the heart has fully faded out
  isFaded() {
    return this.opacity <= 0;
  }
}

// Arrays to store the flowers and hearts
let flowers = [];
let hearts = [];

// Background color
let bg = '#0C2C40';

// Array of text files with lyrics
let lyrics = [
  "data/Song 1.txt",
  "data/Song 2.txt",
  "data/Song 3.txt",
  "data/Song 4.txt",
  "data/Song 5.txt"
];

let fileCount = 0; // Counter for the current text file
let lines; // Array to store lines from the text files

// Preload function to load text files
function preload() {
  lines = loadStrings(lyrics[fileCount % lyrics.length]);
  console.log("Loaded lines: ", lines); // Check if the lines are loaded correctly
}

// Setup function to initialize the canvas and elements
function setup() {
  let container = select('#flower-container');
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent(container);
  background(bg);
  flowers = [];
  hearts = [];
}

// Draw function to render the flowers and hearts on the canvas
function draw() {
  background(bg);

  for (let i = flowers.length - 1; i >= 0; i--) {
    flowers[i].update();
    if (flowers[i].isFaded()) {
      flowers.splice(i, 1); // Remove faded flowers
    }
  }

  for (let i = hearts.length - 1; i >= 0; i--) {
    hearts[i].update();
    if (hearts[i].isFaded()) {
      hearts.splice(i, 1); // Remove faded hearts
    }
  }

  if (frameCount % 20 === 0) { // Add a new flower every 20 frames
    addFlower();
  }

  if (frameCount % 30 === 0) { // Add a new heart every 30 frames
    addHeart();
  }
}

// Function to add a new flower to the canvas
function addFlower() {
  let x = random(width);
  let y = random(height);
  let newFlower = new Flower(lines[fileCount % lines.length], x, y);
  flowers.push(newFlower);
}

// Function to add a new heart to the canvas
function addHeart() {
  let x = random(width);
  let y = random(height);
  let newHeart = new Heart(x, y);
  hearts.push(newHeart);
}

// Function to handle window resizing
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Function to handle key releases for navigation
function keyReleased() {
  if (key == 'n') {
    fileCount++;
    preload();
    setup();
  }
}

// DOMContentLoaded event to set up the message navigation logic
document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded and parsed");
  
  const messages = document.querySelectorAll("#message span");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  let currentMessageIndex = messages.length - 1; // Start with the most recent message

  console.log("Messages length:", messages.length);
  console.log("Initial currentMessageIndex:", currentMessageIndex);

  // Function to show the next message
  function showNextMessage() {
    console.log("Next button clicked");
    messages[currentMessageIndex].classList.remove("visible");
    messages[currentMessageIndex].classList.add("hidden");

    currentMessageIndex = (currentMessageIndex + 1) % messages.length;

    messages[currentMessageIndex].classList.remove("hidden");
    messages[currentMessageIndex].classList.add("visible");
    console.log("Current message index after next:", currentMessageIndex);
  }

  // Function to show the previous message
  function showPrevMessage() {
    console.log("Prev button clicked");
    messages[currentMessageIndex].classList.remove("visible");
    messages[currentMessageIndex].classList.add("hidden");

    currentMessageIndex = (currentMessageIndex - 1 + messages.length) % messages.length;

    messages[currentMessageIndex].classList.remove("hidden");
    messages[currentMessageIndex].classList.add("visible");
    console.log("Current message index after prev:", currentMessageIndex);
  }

  // Initially show the most recent message
  messages[currentMessageIndex].classList.remove("hidden");
  messages[currentMessageIndex].classList.add("visible");

  // Add event listeners for both click and touch events with debouncing
  let debounceTimeout;
  const debounce = (func, delay) => {
    return function() {
      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => func.apply(this, arguments), delay);
    };
  };

  nextButton.addEventListener("click", debounce(showNextMessage, 300));
  prevButton.addEventListener("click", debounce(showPrevMessage, 300));
  nextButton.addEventListener("touchstart", debounce(showNextMessage, 300));
  prevButton.addEventListener("touchstart", debounce(showPrevMessage, 300));

  console.log("Event listeners added");
});
