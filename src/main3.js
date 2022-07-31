//Import listener for the page transition when closing the page.
//When opening the page.
//Import the listener for the buttons for calculator and product search.
import {setListeners} from "./functions/switchPage.js";
import openPage from "./functions/pageTransitionAnim.js";
import "./functions/getInputCalculator.js";

//Set the listeners for closing the page
setListeners();
//Set the listeners for opening the page
openPage();

