
let Num_1 ;
let Num_2 ;
let Operation;
let result;
function Plus(Num_1,Num_2) {
return Num_1+Num_2    
} 
function Minus(Num_1,Num_2) {
return Num_1-Num_2    
} 
function Multi(Num_1,Num_2) {
return Num_1*Num_2    
} 
function Dev(Num_1,Num_2) {
return Num_1/Num_2    
} 
const display = document.getElementById("display")
const buttons =document.querySelectorAll("button")
buttons.forEach(function(button) {
    button.addEventListener("click",function() {
      
          if (button.textContent === "C") {
            display.textContent = "0"
            
        }
        else if(button.textContent ==="+"){
              Num_1 =Number(display.textContent)
              Operation ="+"
              display.textContent =0;
             
             
              
        }
        else if(button.textContent ==="-"){
              Num_1 =Number(display.textContent)
              Operation ="-"
              display.textContent =0;
             
             
              
        }
        else if(button.textContent ==="*"){
              Num_1 =Number(display.textContent)
              Operation ="*"
              display.textContent =0;
             
             
              
        }
        else if(button.textContent ==="/"){
              Num_1 =Number(display.textContent)
              Operation ="/"
              display.textContent =0;
             
             
              
        }
        else if(button.textContent ==="="){
            Num_2 =Number(display.textContent) 
             if (Operation === "+") {
                result = Plus(Num_1,Num_2)
                display.textContent =result
             }
             if (Operation === "-") {
                result = Minus(Num_1,Num_2)
                display.textContent =result
             }
             if (Operation === "*") {
                result = Multi(Num_1,Num_2)
                display.textContent =result
             }
             if (Operation === "/") {
                result = Dev(Num_1,Num_2)
                display.textContent =result
             }

        }
        
        
        else{
            display.textContent =display.textContent + button.textContent
        }

      
    }
)
})
console.log("Use Git");
console.log( "Git practice");

console.log("feature-log in");
console.log("Git Stach");

