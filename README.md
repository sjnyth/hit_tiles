# 🎵 Hit Tiles: A Rhythm Game 🎵
"Hit Tunes" is a simple rhythm game built using vanilla JavaScript and the HTML5 canvas. Blocks fall from the top, and the player needs to press specific keys in time with the blocks reaching the bottom to score points.

## Gameplay Preview 🎮
![Gif of gameplay](https://github.com/sjnyth/hit_tiles/blob/main/gameplay.gif)

## Features 🥁
🎨 Soothing color made with HTML5 Canvas.  
🔊 Musical notes for interactive gameplay.  
⚙️ Dynamic difficulty: The better you play, the faster it gets!  
📊 Real-time stats tracking: Score, speed, and misses.  

## Usage 🎷
1. Get a local copy:
```
git clone https://github.com/sjnyth/hit_tiles
```
2. Go to the folder and open up index.html in your browser. Enjoy!

## How it works 🎹
1. **Initialization**:  
Upon loading the index.html, the game sets up the canvas, predefined colors, and the audio cues, preparing the stage for action.

2. **Blocks Generation**:  
Blocks are created at random intervals at the top of the screen. Each block is associated with a particular key (v, b, n, m) and has a specific color for easy identification.

3. **Canvas Rendering**:    
All the game visuals are dynamically rendered on the canvas. Each frame refreshes to accommodate the new positions of falling blocks, creating the illusion of motion.

4. **User Interaction**:  
The game listens for keydown events. When a player presses a key in correspondence with a block nearing the bottom, points are rewarded or deducted based on the accuracy of the timing and the correctness of the key.

5. **Audio Feedback**:  
On successful block-key match, an audio cue plays, enhancing the rhythm aspect of the game.

6. **Endgame Scenario**:  
Accumulate 20 misses, and the game comes to a pause, offering players the chance to restart and try again.
