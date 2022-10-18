let obj = {
    "foodList": [
        { "name": "떡볶이 3000", "price": 3000 },
        { "name": "치즈 떡볶이 4000", "price": 4000 },
        { "name": "김밥 2000", "price": 2000 },
        { "name": "모둠 튀김 5000", "price": 5000 }
    ]
};
for (let food of obj.foodList) {
    document.write("<label class='container'>" + food.name);
    document.write(" <input type='checkbox' value=" + food.price + "> <span class='checkmark'></span>");
    document.write("<select class='foodSelect'>");
    for (let num = 0; num <= 5; num++)
        document.write("<option value=" + num + ">" + num + " 인분</option>");
    document.write("</select></label>");
}