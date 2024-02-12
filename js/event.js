console.log('this is the special event')

//------------option 2---------------we will this style.
function makeRed() {
    document.body.style.backgroundColor = 'yellow'
}
//------------option 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}


//--------------------
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink() {
    document.body.style.backgroundColor = 'pink';
}


//----------- we use this system---------
document.getElementById('make-goldenrod').addEventListener('click',function(){
    document.body.style.backgroundColor ='goldenrod'
})

//------------------------





