const form = document.querySelector('form')
// This usecase will give me empty 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('.result')

    if(height === '' || height <= 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    }
    else{
        const bmi = (weight/ ((height * height)/ 10000)).toFixed(2)

        result.innerHTML = `<span>Your BMI : ${bmi}</span>`
        const conclusion = document.createElement('p')
        if(bmi < 18.6) {
            conclusion.innerHTML = `You are in Underweight category`
        }
        else if (bmi > 18.6 && bmi < 24.9) {
            conclusion.innerHTML = `You are in Normal category`
        }
        else {
            conclusion.innerHTML = `You are in Overweight category`
        }

        result.appendChild(conclusion)
    }
})