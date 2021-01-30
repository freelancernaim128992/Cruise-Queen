// Ticket All Calculation
function ticketCalculation(increase, id) {
    const getInputValue = document.getElementById(id);
    const inputValueToNumb = parseInt(getInputValue.value);
    let increaseValue = inputValueToNumb;
    if (increase == true) {
        increaseValue = increaseValue + 1;
    }
    if (increase == false && increaseValue > 0) {
        increaseValue = increaseValue - 1;
    }
    getInputValue.value = increaseValue;
    if (id == 'first-class-ticket-count') {
        document.getElementById('booking-ticket-count').innerText = increaseValue + ' First Class';
    }
    if (id == 'economy-ticket-count') {
        document.getElementById('booking-ticket-count').innerText = increaseValue + ' Economy';
    }
    calculateTotal();
}


// Total Calculation
function calculateTotal() {
    const firstClassInputValueToNumb = getTicketValue('first-class-ticket-count');
    const firstClassTotal = firstClassInputValueToNumb * 150;
    const economyInputValueToNumb = getTicketValue('economy-ticket-count');
    const economyTotal = economyInputValueToNumb * 100;
    const totalSubMoney = firstClassTotal + economyTotal;
    const subTotal = document.getElementById('subTotal');
    subTotal.innerText = totalSubMoney;
    const tax = document.getElementById('tax');
    const taxAmount = totalSubMoney * 0.1;
    tax.innerText = taxAmount;
    const total = document.getElementById('total-money');
    const totalAmount = totalSubMoney + taxAmount;
    total.innerText = totalAmount;
    document.getElementById('ticket-price').innerText = totalAmount;
}


// Ticket Input Value Finder
function getTicketValue(ticketName) {
    const ticketInputValue = document.getElementById(ticketName);
    const ticketInputValueToNumb = parseInt(ticketInputValue.value);
    return ticketInputValueToNumb;
}


// First Class Plus Button Event Listener
document.getElementById('first-class-plus-btn').addEventListener('click', function () {
    ticketCalculation(true, 'first-class-ticket-count');
})


// First Class Minus Button Event Listener
document.getElementById('first-class-minus-btn').addEventListener('click', function () {
    ticketCalculation(false, 'first-class-ticket-count');
})


// Economy Plus Button Event Listener
document.getElementById('economy-plus-btn').addEventListener('click', function () {
    ticketCalculation(true, 'economy-ticket-count');
})


// Economy Minus Button Event Listener
document.getElementById('economy-minus-btn').addEventListener('click', function () {
    ticketCalculation(false, 'economy-ticket-count');
})


// Submit Button Event Listener
document.getElementById('ticket-submit').addEventListener('click', function () {
    document.getElementById('header-area').style.display = 'none';
    document.getElementById('complete-booking').style.display = 'block';
})


