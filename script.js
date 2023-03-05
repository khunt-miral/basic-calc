let input = document.getElementById('inputbtn');
let buttons = document.querySelectorAll('button');
let string = "";

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        //if equal button is pressed
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        //if all clear button is pressed
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }else if(e.target.innerHTML == 'DEL') {
            string = string.substring(0,string.length-1);
            input.value = string;
        }        
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})