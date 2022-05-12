function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  };
const getRandomColor = () => {

    // const h = getRandomNumber(360);
    // const s = getRandomNumber(100);
    // // const l = getRandomNumber(80);
    // div.style =```background: radial-gradient(circle at 15px 15px, rgb(${randomColor1},${randomColor2},${randomColor3}), #000);
   
    return `hsl(${rand(0, 360)}deg, ${rand(20,100)}%, ${rand(20,80)}%)`;
 };

const divukas = document.querySelector('.kvad1');
const divukas2 = document.querySelector('.kvad2');
const start = document.getElementById('btn1');
const reset = document.getElementById('btn2')

const limit = 25;
let counter = 1;
let mas= [];
const displayMessage = function(message){
 document.querySelector('.message').textContent = message;
}
displayMessage('Press start to play!!')
const renderCircle = function(){
 do {
     let skaicius = rand(1,25);
     if(!mas.includes(skaicius)){
         mas.push(skaicius);
         const div = document.createElement('div');
         const div2 = document.createElement('div');
         div.classList.add('circle');
         div.innerHTML = skaicius;
         const randomColor = getRandomColor();
         
         div.style.background = `radial-gradient(circle at 15px 15px, ${randomColor}, #000) `
        //  div.style.backgroundColor =  randomColor;
        //  div.style.boxShadow = `0px 0px 5px 5px ${randomColor}`
         div2.appendChild(div)
         divukas.appendChild(div2);
         displayMessage('Find the smallest one!')
         
        }
    } while(mas.length !== 25)
}

start.addEventListener('click', ()=> {
    renderCircle();
    start.disabled = true;
    let circle = document.querySelectorAll('.circle');
    mas.sort((a,b)=> a-b);
    circle.forEach(elem => {
    elem.addEventListener('click', ()=>{
        if(Number(elem.innerHTML) === Math.min(...mas)){
            divukas2.appendChild(elem);
            mas.shift();
            displayMessage('Right choice! Keep going!!');
        } else {
            displayMessage('"Wrong click.. Try another ball!')
        
        }
        // console.log(mas)
    if(divukas2.lastChild.innerHTML === '25'){
        displayMessage('Awesome! You are Done!')
    }
    })
});

})
// console.log(mas);
reset.addEventListener('click', ()=>{
    mas=[];
    displayMessage('Press start to play!!');
    start.disabled = false;
    divukas.innerHTML=''
    divukas2.innerHTML= '';
})



