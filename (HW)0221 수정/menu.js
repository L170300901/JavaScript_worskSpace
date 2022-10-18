const obj = {
    "foodList": [
        { "name": "떡볶이 3000", "price": 3000 },
        { "name": "치즈 떡볶이 4000", "price": 4000 },
        { "name": "김밥 2000", "price": 2000 },
        { "name": "모둠 튀김 5000", "price": 5000 }
    ]
};
const menu = (currentId) => {
    let rootTag = document.getElementById(currentId);
    for (let food of obj.foodList) {
        let label = document.createElement("label");
        let text = document.createTextNode(food.name);
        label.className = 'container'
        label.appendChild(text);

        let input = document.createElement("input");
        input.type = 'checkbox'
        input.value = food.price
        label.appendChild(input)
        let span = document.createElement("span");
        span.className = 'checkmark'
        label.appendChild(span)
        let select = document.createElement("select");
        select.className = 'foodSelect'

        for (let num = 1; num <= 5; num++) {
            let option = document.createElement("option");
            let text = document.createTextNode(`${num} 인분`);
            option.appendChild(text);
            option.value = num
            select.appendChild(option)
        }
        label.appendChild(select)
        rootTag.appendChild(label)
    }
}
