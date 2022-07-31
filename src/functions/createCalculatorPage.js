//No imports. This file is used for injecting data on the page.
//Get the table elements where the data will be injected.
const showTable = document.getElementById("main-calorie-count");
const showProduct = document.getElementById("main-calorie-product");

//This function takes the product name (string) and the portion size (integer).
export const createCalProduct = (label, quantity) => {
    //The result is put in a table and injected on the page.
    showProduct.innerHTML = `
        <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Label</th>
        </tr>
    `
    ;
    showProduct.innerHTML += `
        <tr>
            <td>${label}</td>
            <td>${quantity}</td>
            <td>gram</td>
        </tr>
    `
    ;
}

//This function takes an array with all the calculated values.
export const createCalList = (entries) => {
    //First show the haders
    showProduct.innerHTML = `
        <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Label</th>
        </tr>
    `
    ;
    showTable.innerHTML = `
        <tr>
            <th>Product</th>
            <th>Calorie</th>
            <th>Fat</th>
            <th>Carbs</th>
        </tr>
    `
    ;
    //Then show the values of each entry
    //But first we declare variables to keep track of the total amount.
    let totalCalories = 0;
    let totalFat = 0;
    let totalCarbs = 0;
    //Loop through the array
    entries.map((entry) => {
        //First add the amount to the total
        totalCalories += entry.calorie;
        totalFat += entry.fat;
        totalCarbs += entry.carb;
        //Then show the entry on the page
        showTable.innerHTML += `
        <tr>
            <td>${entry.product}</td>
            <td>${entry.calorie} kcal</td>
            <td>${entry.fat} g</td>
            <td>${entry.carb} g</td>
        </tr>
    `
    });
    //When the loop has ended we inject the total amount.
    showTable.innerHTML += `
        <tr class="main-calorie-count-line">
            <td>Total</td>
            <td>${totalCalories} kcal</td>
            <td>${totalFat} g</td>
            <td>${totalCarbs} g</td>
        </tr>
    `
    ;
}

//This function takes an error message(string) and injects it on the page in the table.
export const createCalError = (error) => {
    showProduct.innerHTML = `
        <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Label</th>
        </tr>
    `
    ;
    showProduct.innerHTML += `
        <tr>
            <td></td>
            <td class="error">${error}</td>
           <td></td>
        </tr>
    `
    ;
}