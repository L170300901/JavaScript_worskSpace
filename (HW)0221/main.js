document.addEventListener('DOMContentLoaded', function () {
    let chk = document.querySelectorAll('input[type="checkbox"]');
    let sel = document.querySelectorAll("select");

    [].forEach.call(chk, function (elem) {
        elem.addEventListener('click', function () {
            calculate();
        });
    });

    [].forEach.call(sel, function (elem) {
        elem.addEventListener('change', function () {
            this.parentNode.querySelector('input[type="checkbox"]').checked = true;
            let checked = this.parentNode.querySelector('input[type="checkbox"]').checked;
            if (elem.parentNode.querySelector('select').value == 0) {
                this.parentNode.querySelector('input[type="checkbox"]').checked = false;
            }
            if (checked) calculate();
        });
    });

    function calculate() {
        let total = 0;
        [].forEach.call(chk, function (elem) {
            let quantity = elem.parentNode.querySelector('select').value;
            if (elem.checked) {
                total += Number(elem.value) * quantity;
            }
        });
        document.getElementById('amount').value = total + " 원";
    }
});