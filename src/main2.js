//Import listener for the page transition when closing the page.
//When opening the page.
//Import the listener for the id in the URL.
import {setListeners} from "./functions/switchPage.js";
import openPage from "./functions/pageTransitionAnim.js";
import "./functions/getParamUri.js";

//Set the listeners for closing the page
setListeners();
//Set the listeners for opening the page
openPage();