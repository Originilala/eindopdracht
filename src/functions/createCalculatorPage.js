const showTable = document.getElementById('main-calorie-count');
const showProduct = document.getElementById('main-calorie-product');

export const createCalProduct = (label, quantity) => {
    showProduct.innerHTML = `
        <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Label</th>
        </tr>
    `
    showProduct.innerHTML += `
        <tr>
            <td>${label}</td>
            <td>${quantity}</td>
            <td>gram</td>
        </tr>
    `
}

export const createCalList = (entries) => {
    showProduct.innerHTML = `
        <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Label</th>
        </tr>
    `
    showTable.innerHTML = `
        <tr>
            <th>Product</th>
            <th>Calorie</th>
            <th>Fat</th>
            <th>Carbs</th>
        </tr>
    `

    let totalCalories = 0;
    let totalFat = 0;
    let totalCarbs = 0;

    entries.map((entry) => {
        totalCalories += entry.calorie;
        totalFat += entry.fat;
        totalCarbs += entry.carb;
        showTable.innerHTML += `
        <tr>
            <td>${entry.product}</td>
            <td>${entry.calorie} kcal</td>
            <td>${entry.fat} g</td>
            <td>${entry.carb} g</td>
        </tr>
    `
    });

    showTable.innerHTML += `
        <tr class="main-calorie-count-line">
            <td>Total</td>
            <td>${totalCalories} kcal</td>
            <td>${totalFat} g</td>
            <td>${totalCarbs} g</td>
        </tr>
    `
}

export const createCalError = (error) => {
    showProduct.innerHTML = `
        <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Label</th>
        </tr>
    `
    showProduct.innerHTML += `
        <tr>
            <td class="error">${error}</td>
           
        </tr>
    `
}