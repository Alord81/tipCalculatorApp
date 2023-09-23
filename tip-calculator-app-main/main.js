const bill = document.getElementById('bill'),
    tipBtn = document.querySelectorAll('.tip-btn'),
    custom = document.getElementById("custom"),
    span = document.querySelector('span'),
    numberPeople = document.querySelector('.f-n-p'),
    outputOfTipAmount = document.querySelector('.output-of-tip-amount'),
    outputOfTotal = document.querySelector('.output-of-total'),
    resetBtn = document.getElementById('reset');

let billValue, tipValue, numberPeopleValue;


bill.addEventListener('blur', () => {
    billValue = bill.value;
    if ((numberPeople.value !== undefined && numberPeople.value !== "") &&
        (tipValue !== undefined && tipValue !== "") &&
        (billValue !== undefined && billValue !== "")) {
        fillData(numberPeople, billValue, tipValue)
    } else {
        setData()
    }
})
tipBtn.forEach((element) => {
    element.addEventListener('click', () => {
        tipBtn.forEach((e) => {
            e.classList.remove('this-tip')
        })
        element.classList.add('this-tip')
        tipValue = parseInt(element.innerHTML)
        if ((numberPeople.value !== undefined && numberPeople.value !== "") &&
            (tipValue !== undefined && tipValue !== "") &&
            (billValue !== undefined && billValue !== "")) {
            fillData(numberPeople, billValue, tipValue)
        } else {
            setData()
        }
    })
})
custom.addEventListener('blur', () => {

    tipValue = custom.value;

    if ((numberPeople.value !== undefined && numberPeople.value !== "") &&
        (tipValue !== undefined && tipValue !== "") &&
        (billValue !== undefined && billValue !== "")) {
        fillData(numberPeople, billValue, tipValue)
    } else {
        setData()
    }
    if (tipValue === '') {
        tipBtn[0].classList.add('this-tip')
    }
})
custom.addEventListener("click", () => {
    tipBtn.forEach((element) => {
        element.classList.remove('this-tip')
    })
})

numberPeople.addEventListener('blur', () => {
    if ((numberPeople.value !== undefined && numberPeople.value !== "") &&
        (tipValue !== undefined && tipValue !== "") &&
        (billValue !== undefined && billValue !== "")) {
        if (numberPeople.value !== '0') {
            span.classList.remove('error')
            numberPeople.classList.remove('error')
            fillData(numberPeople, billValue, tipValue)
        } else {
            span.classList.add('error')
            numberPeople.classList.add('error')
        }
    }
})

function fillData(numv, billv, tipv) {
    numberPeopleValue = numv.value;
    tipAmount = ((billv * (tipv / 100)) / numberPeopleValue).toFixed(2)
    outputOfTipAmount.innerHTML = `$${tipAmount}`
    outputOfTotal.innerHTML = "$" + ((billv / numberPeopleValue) + +tipAmount).toFixed(2)
    resetBtn.classList.add("possible")

}

function setData() {
    outputOfTipAmount.innerHTML = "$0.00"
    outputOfTotal.innerHTML = "$0.00"
    resetBtn.classList.remove("possible")
}
function resetData() {
    setData()
    bill.value = ""
    custom.value = ""
    tipBtn[0].classList.add("this-tip")
    tipBtn.forEach((element) => {
        element.classList.remove('this-tip')
    })
    numberPeople.value = ""
    numberPeopleValue === ""
    tipValue === ""
    billValue === ""
}


resetBtn.addEventListener("click", () => {
    if (resetBtn.classList.item("possible") === null) {

    } else {
        resetData()
    }
})
