/* script.js */

// Get references to the overlay
const overlay = document.getElementById('overlay');

// Add mousemove or touchmove listener
document.addEventListener('mousemove', handleMove);
document.addEventListener('touchmove', handleMove);

// Function to handle the flashlight effect
function handleMove(e) {
  let x, y;

  if (e.touches) {
    // Touch event
    const touch = e.touches[0];
    x = touch.clientX;
    y = touch.clientY;
  } else {
    // Mouse event
    x = e.clientX;
    y = e.clientY;
  }

  // Create radial gradient at the mouse position
  overlay.style.background = `radial-gradient(circle at ${x}px ${y}px, transparent 100px, black 150px)`;
}
