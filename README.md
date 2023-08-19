
# Dice Rolling Game Component

The Dice Rolling Game Component is a React component that simulates rolling two dice. It displays the rolled dice faces and provides a button to trigger the rolling animation.

## Usage

1. Install Dependencies:
   Make sure you have `React` and the necessary dependencies installed.

2. Clone or Download:
   Clone this repository or download the provided `Game.js` and `Game.css` files.

3. Integration:
   - Place the `Game.js` and `Game.css` files in your React project's components directory.
   - Import the `Game` component in your desired parent component file:

     ```jsx
     import React from "react";
     import Game from "./path-to-Game.js";

     function App() {
       return (
         <div className="App">
           <Game />
         </div>
       );
     }

     export default App;
     ```

4. Styling:
   The component uses the provided `Game.css` file for basic styling. You can modify the CSS to match your project's design.

5. Features:
   - Clicking the "Roll Dice" button triggers an animation simulating the rolling of two dice.
   - The rolled dice faces are displayed using Font Awesome icons.
   - The button is disabled during the animation to prevent multiple rolls.

6. Customization:
   You can modify the `diceHeads` array in the `handleRoll` function to customize the possible dice faces.
   
7. Contributions:
   Contributions and improvements are welcome. Feel free to open issues or pull requests if you find any bugs or want to enhance the component.

## Dependencies

- React
- Font Awesome (for dice icons)

## License

This component is licensed under the [MIT License](LICENSE).
