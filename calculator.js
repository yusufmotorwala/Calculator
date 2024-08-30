let string= " ";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListner('click', (e)=>{
        if(e.terget.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.terget.innerHTML == 'AC'){
            string="";
            document.querySelector('input').value=string;
        }
     else{
        console.log(e.target)
     string=string+e.target.innerHTML;
     document.querySelector('input').value=string;
     }
    });

});
