const buttonsWrapper = document.querySelector('.buttons');
const buttons = document.querySelectorAll('.btn');
const numberButtons = document.querySelectorAll('.number');
const displayText = document.querySelector('.displayText');


const calculatorCreator = () => {

  //Getters
  const getDisplay = () => document.querySelector('.display');
  const getButtons = () => document.querySelectorAll('.btn');

}

//brojevi su stringovi 

buttons.forEach(function(button){
  button.addEventListener('click' , function(){
    displayText.textContent = button.textContent;
  })
})

