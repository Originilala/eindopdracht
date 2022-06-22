const showTable = document.getElementById('main-calorie-count');
const showProduct = document.getElementById('main-calorie-product');

export const createCalProduct = (label, quantity) => {
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
            <th>product</th>
            <th>quantity</th>
            <th>label</th>
        </tr>
    `
    showTable.innerHTML = `
        <tr>
            <th>product</th>
            <th>calorie</th>
            <th>fat</th>
            <th>carbs</th>
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
            <td>${entry.calorie}</td>
            <td>${entry.fat}</td>
            <td>${entry.carb}</td>
        </tr>
    `
    });

    showTable.innerHTML += `
        <tr class="main-calorie-count-line">
            <td>total</td>
            <td>${totalCalories}</td>
            <td>${totalFat}</td>
            <td>${totalCarbs}</td>
        </tr>
    `
}