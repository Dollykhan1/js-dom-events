console.log('This is my separate js file');
//option 1: directly set on the HTML element
//<button onclick="console.log(84)">Another button</button>
//Option2: add onclickfuntion on the html Element
 //option 2 onclick function
 //<button onclick="makeRed()">Make Red</button>
function makeRed(){
    document.body.style.backgroundColor ='red';
}

//option 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor='blue';
}
//another option 3(we will use this sometimes)
const purpleButton=document.getElementById('make-purple');
console.log(purpleButton)
purpleButton.onclick=function (){
  document.body.style.backgroundColor='purple';
}

//another option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink);
function makePink(){
   document.body.style.background = 'pink';
}
//another option 4 final
// const makeGreenButton=document.getElementById('make-green');
// makeGreenButton.addEventListener('click',function makeGreen(){
//  document.body.style.backgroundColor='green';  
// })

const makegreenButton=document.getElementById("make-green");
console.log(makegreenButton)
makegreenButton.onclick=function(){
    document.body.style.backgroundColor='green';
}
   
//verry verry importend

document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor='goldenRod';
}
)