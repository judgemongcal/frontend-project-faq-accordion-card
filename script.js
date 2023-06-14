const btnOne = document.getElementById('svg-1');
const btnTwo = document.getElementById('svg-2');
const btnThree = document.getElementById('svg-3');
const btnFour = document.getElementById('svg-4');
const btnFive = document.getElementById('svg-5');
let ctr1 = 0, ctr2 = 0, ctr3 = 0, ctr4 = 0, ctr5 = 0;

btnOne.addEventListener('click', (e) => {
    
    let ansOne = document.getElementById('ans-1');

    if(ctr1 == 0){
        ansOne.style.display = "none";
        ctr1 = 1;
        btnOne.style.transform ="rotate(360deg)";
    }

    else{
        ansOne.style.display = "flex";
        ctr1 = 0;
        btnOne.style.transform ="rotate(180deg)";
    }

   
});

btnTwo.addEventListener('click', (e) => {
    
    let ansTwo = document.getElementById('ans-2');

    if(ctr2 == 0){
        ansTwo.style.display = "none";
        ctr2 = 1;
        btnTwo.style.transform ="rotate(360deg)";
    }

    else{
        ansTwo.style.display = "flex";
        ctr2 = 0;
        btnTwo.style.transform ="rotate(180deg)";
    }

   
});

btnThree.addEventListener('click', (e) => {
    
    let ansThree = document.getElementById('ans-3');

    if(ctr3 == 0){
        ansThree.style.display = "none";
        ctr3 = 1;
        btnThree.style.transform ="rotate(360deg)";
    }

    else{
        ansThree.style.display = "flex";
        ctr3 = 0;
        btnThree.style.transform ="rotate(180deg)";
    }

   
});

btnFour.addEventListener('click', (e) => {
    
    let ansFour = document.getElementById('ans-4');

    if(ctr4 == 0){
        ansFour.style.display = "none";
        ctr4 = 1;
        btnFour.style.transform ="rotate(360deg)";
    }

    else{
        ansFour.style.display = "flex";
        ctr4 = 0;
        btnFour.style.transform ="rotate(180deg)";
    }

   
});

btnFive.addEventListener('click', (e) => {
    
    let ansFive = document.getElementById('ans-5');

    if(ctr5 == 0){
        ansFive.style.display = "none";
        ctr5 = 1;
        btnFive.style.transform ="rotate(360deg)";
    }

    else{
        ansFive.style.display = "flex";
        ctr5 = 0;
        btnFive.style.transform ="rotate(180deg)";
    }

   
});