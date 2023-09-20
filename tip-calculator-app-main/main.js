const bill = document.getElementById('bill'),
tipBtn = document.querySelectorAll('.tip-btn'),
custom =document.getElementById("custom"),
span = document.querySelector('span'),
numberPeople = document.querySelector('.f-n-p'),
outputOfTipAmount = document.querySelector('.output-of-tip-amount'),
outputOfTotal = document.querySelector('.output-of-total');

// console.log(numberPeople.value)

let billValue,tipValue, customValue,numberPeopleValue; 

bill.addEventListener('blur',() =>{
    billValue = bill.value;
    console.log(billValue)
})
tipBtn.forEach((element) => {
    element.addEventListener('click',() => {
        tipBtn.forEach((e) => {
            e.classList.remove('this-tip')
        })
        element.classList.add('this-tip')
        tipValue = parseInt(element.innerHTML)
        console.log(tipValue)
    })
})
custom.addEventListener('blur',() =>{
    // if(custom.value === '') {
    //     document.querySelector('span').classList.add('error')
    //     document.querySelector('.f-n-p').classList.add('error')
    // }else {
    //     customValue = custom.value;
    //     console.log(customValue)
    // }
    customValue = custom.value;
    console.log(customValue)
})

numberPeople.addEventListener('blur',() => {
    if(numberPeople.value === '') {
        span.classList.add('error')
        numberPeople.classList.add('error')
    }else {
        numberPeopleValue = numberPeople.value;
        console.log(numberPeopleValue)
        tipAmount= ((billValue * (tipValue/100)) / numberPeopleValue).toFixed(2)
        outputOfTipAmount.innerHTML = `$${tipAmount}`
        console.log(tipAmount)
        outputOfTotal.innerHTML = "$" + ((billValue / numberPeopleValue) + +tipAmount).toFixed(2)
    }
})