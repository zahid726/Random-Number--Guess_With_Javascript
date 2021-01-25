

// function counter(num1,num2){
//     // var num;
//     var counter = document.getElementById("chances1");
//     counter.textContent =num1-num2;
// }
counter1 =10
function randomcondition(){

    var show = document.getElementById("chances1");
    var guessinput = document.getElementById("guessno").value;
  counter1 =counter1 -1;
  show.textContent =counter1;
  var allrow= document.getElementById("allrow");
  var count= document.getElementById("counterdown");
   
if(counter1 >=1)
{
    
    var ramdomno =Math.floor(Math.random() * 9);
   
    count.textContent = counter1;
    var displayGuess = document.getElementById("guessdisplay");
    var Displayrand = document.getElementById("displayran");
    var message1 = document.getElementById("message");
    var message2 = document.getElementById("message1");
    message2.style.display="none";
    message1.style.display="none";
   
     displayGuess.textContent = guessinput;
     Displayrand.textContent = ramdomno;
   
    var trywon = document.getElementById("trywon");
    if(ramdomno == guessinput)
    {
      
        var won = document.getElementById("won");
        
        var add = (10-counter1);
        trywon.textContent =add;

        allrow.style.display= "none";
        // message1.style.display="block";
        won.style.display = "block";
        
        
        
        // message1.textContent = " Yes You Won !!!!!!"
        // message.style.background = "Green";
        // message1.style.color= "white";
        // message1.style.padding = "5px";


    }
    
    else{
        if(ramdomno > guessinput)
        {
            message2.style.display="block";
            message2.textContent = "Random is Greater than Guess No !!! "
        }
        else if(ramdomno < guessinput){
            message1.style.display= "block";
            message1.textContent = "Random is Less than Guess No !!! "
            message.style.background = "#db2e48";
            message1.style.color= "white";
            message1.style.padding = "5px";
    
        }

        
        message2.style.background = "red";
        message2.style.color= "white";
        message2.style.padding = "5px";
       
    }
  
}
else
{
   
    allrow.style.display="none";
    var loss = document.getElementById("loss");
    loss.style.display="block";
  
}

    

   

}
