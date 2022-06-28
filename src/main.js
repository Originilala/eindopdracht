import {setListeners} from "./functions/switchPage.js";
import openPage from "./functions/pageTransitionAnim.js";
import "./functions/getInputRecSearch.js";
import fetchDataHeader from "./functions/createCardHeader";


const searchObject = {
    queryVal: 'basic roti',
    mealTypeVal: '',
    cuisineTypeVal: '',
    dietTypeVal: '',
    timeVal: ''
}


fetchDataHeader(searchObject);
setListeners();
openPage();