const btnOne = document.getElementById('svg-1');
const btnTwo = document.getElementById('svg-2');
const btnThree = document.getElementById('svg-3');
const btnFour = document.getElementById('svg-4');
const btnFive = document.getElementById('svg-5');

const qOne = document.getElementById('q-1');
let ctr1 = 0, ctr2 = 0, ctr3 = 0, ctr4 = 0, ctr5 = 0;

btnOne.addEventListener('click', (e) => {
    
    let ansOne = document.getElementById('ans-1');
    let text = document.getElementById('q-1');

    if(ctr1 == 0){
        ansOne.style.display = "none";
        ctr1 = 1;
        btnOne.style.transform ="rotate(360deg)";

        if(ansOne.style.display == "none")
        text.style.fontWeight = "400";
    }

    else{
        ansOne.style.display = "flex";
        ctr1 = 0;
        btnOne.style.transform ="rotate(180deg)";

        if(ansOne.style.display == "flex")
        text.style.fontWeight = "700";
    }

   
});

btnTwo.addEventListener('click', (e) => {
    
    let ansTwo = document.getElementById('ans-2');
    let text = document.getElementById('q-2');

    if(ctr2 == 0){
        ansTwo.style.display = "none";
        ctr2 = 1;
        btnTwo.style.transform ="rotate(360deg)";

        if(ansTwo.style.display == "none")
        text.style.fontWeight = "400";
    }

    else{
        ansTwo.style.display = "flex";
        ctr2 = 0;
        btnTwo.style.transform ="rotate(180deg)";

        if(ansTwo.style.display == "flex")
        text.style.fontWeight = "700";
    }

   
});

btnThree.addEventListener('click', (e) => {
    
    let ansThree = document.getElementById('ans-3');
    let text = document.getElementById('q-3');

    if(ctr3 == 0){
        ansThree.style.display = "none";
        ctr3 = 1;
        btnThree.style.transform ="rotate(360deg)";

        if(ansThree.style.display == "none")
        text.style.fontWeight = "400";
    }

    else{
        ansThree.style.display = "flex";
        ctr3 = 0;
        btnThree.style.transform ="rotate(180deg)";

        if(ansThree.style.display == "flex")
        text.style.fontWeight = "700";
    }

   
});

btnFour.addEventListener('click', (e) => {
    
    let ansFour = document.getElementById('ans-4');
    let text = document.getElementById('q-4');

    if(ctr4 == 0){
        ansFour.style.display = "none";
        ctr4 = 1;
        btnFour.style.transform ="rotate(360deg)";

        if(ansFour.style.display == "none")
        text.style.fontWeight = "400";
    }

    else{
        ansFour.style.display = "flex";
        ctr4 = 0;
        btnFour.style.transform ="rotate(180deg)";

        if(ansFour.style.display == "flex")
        text.style.fontWeight = "700";
    }

   
});

btnFive.addEventListener('click', (e) => {
    
    let ansFive = document.getElementById('ans-5');
    let text = document.getElementById('q-5');

    if(ctr5 == 0){
        ansFive.style.display = "none";
        ctr5 = 1;
        btnFive.style.transform ="rotate(360deg)";

        if(ansFive.style.display == "none")
        text.style.fontWeight = "400";
    }

    else{
        ansFive.style.display = "flex";
        ctr5 = 0;
        btnFive.style.transform ="rotate(180deg)";

        if(ansFive.style.display == "flex")
        text.style.fontWeight = "700";
    }

   
});