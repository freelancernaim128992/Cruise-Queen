






document.getElementById('first-class-plus-btn').addEventListener('click', function () {
    const getInputValue = document.getElementById('first-class-ticket-count');
    const inputValueToNumb = parseInt(getInputValue.value);
    const increaseValue = inputValueToNumb + 1;
    getInputValue.value = increaseValue;
})



document.getElementById('first-class-minus-btn').addEventListener('click', function () {
    const getInputValue = document.getElementById('first-class-ticket-count');
    const inputValueToNumb = parseInt(getInputValue.value);
    let increaseValue = inputValueToNumb;
    if (increaseValue > 0) {
        increaseValue = increaseValue - 1;
    }
    getInputValue.value = increaseValue;
})

