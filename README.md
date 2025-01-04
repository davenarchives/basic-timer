# Simple Timer

A very basic timer application built using **HTML**, **CSS**, and **JavaScript**. The timer can count seconds, and you can reset it with a single click. Perfect for beginners learning web development!

---

## Features

- **Start Timer**: Begins counting seconds from `0`.
- **Reset Timer**: Resets the timer back to `0`.
- **Minimal Design**: Clean and simple interface.
- **Hover Effects**: Buttons change color on hover for better user experience.

---

## Demo

### Screenshot
![Simple Timer Screenshot](https://via.placeholder.com/800x400?text=Simple+Timer+Screenshot)

---

## Installation

1. Download the project files or copy the code from the main file.
2. Save it as `index.html`.
3. Open the file in any modern web browser.

---

## Code Overview

### **HTML**
Defines the structure of the timer with a heading (`<h1>`) and two buttons (`Start` and `Reset`).

### **CSS**
Provides basic styling for:
- Font and layout alignment.
- Button hover effects.

### **JavaScript**
Handles the timer functionality:
- Uses `setInterval()` for counting seconds.
- A `reset` function to clear the interval and reset the display.

---

## Usage

1. **Start the Timer**:
   - Click the **Start** button to begin counting seconds.

2. **Reset the Timer**:
   - Click the **Reset** button to stop and reset the timer back to `0`.

---

## Code Snippet

### HTML
```html
<h1 id="timer">0</h1>
<button onclick="startTimer()">Start</button>
<button onclick="resetTimer()">Reset</button>
