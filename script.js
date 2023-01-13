const input =document.getElementsByClassName("input");
const error=document.getElementsByClassName("error");
const errorBox = document.querySelectorAll(".box")
const email= document.getElementById("email");

function validateInputs(){
    for(let i=0;i<=input.length;i++){
        input[i].addEventListener("blur",function(){
            if(input[i].value == '' ){
                error[i].classList.add("visible");
                errorBox[i].classList.add("invalid");
                email.setAttribute("placeholder"," email@example.com")
            }
            else{
                error[i].classList.remove("visible");
                errorBox[i].classList.remove("invalid");
            }
        })
    }
}

validateInputs();

