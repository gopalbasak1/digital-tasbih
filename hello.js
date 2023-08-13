const subhanAllahDisplay = document.getElementById('subhanAllahDisplay');
const subhanAllahIncrementBtn = document.getElementById('subhanAllahIncrementBtn');
const subhanAllahDecrementBtn = document.getElementById('subhanAllahDecrementBtn');

const alhamdulilahDisplay = document.getElementById('alhamdulilahDisplay');
const alhamdulilahIncrementBtn = document.getElementById('alhamdulilahIncrementBtn');
const alhamdulilahDecrementBtn = document.getElementById('alhamdulilahDecrementBtn');

const allahuakberDisplay = document.getElementById('allahuakberDisplay');
const allahuakberIncrementBtn = document.getElementById('allahuakberIncrement');
const allahuakberDecrementBtn = document.getElementById('allahuakberDecrement');

const resetBtn = document.getElementById('resetBtn');

let subhanAllahInitialValue = 0;
let alhamdulilahInitialValue = 0;
let allahuakberInitialValue = 0;

subhanAllahIncrementBtn.addEventListener('click', function(){
    if(subhanAllahInitialValue === 33){
        return alert("Subhan Allah completed. Please Fill up another one");
    }
        subhanAllahInitialValue += 1;
        subhanAllahDisplay.innerText = subhanAllahInitialValue
    
})

subhanAllahDecrementBtn.addEventListener('click', function(){
    if(subhanAllahInitialValue === 0){
        return alert("You can't added negative value");
    }
    subhanAllahInitialValue -= 1;
    subhanAllahDisplay.innerText = subhanAllahInitialValue;
})

alhamdulilahIncrementBtn.addEventListener('click', function(){
    if(alhamdulilahInitialValue === 33){
        return alert("Alhamduliah completed. Please Fill up another one")
    }
    alhamdulilahInitialValue += 1;
    alhamdulilahDisplay.innerText = alhamdulilahInitialValue;
})

alhamdulilahDecrementBtn.addEventListener('click', function(){
    if(alhamdulilahInitialValue === 0){
        return alert("You can't added negative value")
    }
    alhamdulilahInitialValue -= 1;
    alhamdulilahDisplay.innerText = alhamdulilahInitialValue;
})

allahuakberIncrementBtn.addEventListener('click', function(){
    if(allahuakberInitialValue === 33){
        return alert("Allahuakber completed. Please Fill up another one")
    }
    allahuakberInitialValue += 1;
    allahuakberDisplay.innerText = allahuakberInitialValue;
})

allahuakberDecrementBtn.addEventListener('click', function(){
    if(allahuakberInitialValue === 0){
        return alert("You can't added negative value")
    }
    allahuakberInitialValue -= 1;
    allahuakberDisplay.innerText = allahuakberInitialValue;
})


resetBtn.addEventListener('click', function(){
    subhanAllahDisplay.innerText = 0;
    alhamdulilahDisplay.innerText = 0;
    allahuakberDisplay.innerText = 0;
    subhanAllahInitialValue = 0;
    alhamdulilahInitialValue = 0;
    allahuakberInitialValue = 0;
    
})