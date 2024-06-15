let string="";
let buttons=document.querySelectorAll('.button')

Array.from(buttons).forEach((button)=>{
  button.addEventListener('click',(e)=>{
    let display=document.querySelector('input')
     let clickedvalue=e.target.innerHTML;
     console.log(clickedvalue)
      //checking conditions 



      // condition to evaluate the value 
      if(clickedvalue === '='){
        try {
        let result= eval(display.value);
        console.log(result)

        //condition for 3 decimal places 
        if(result%1 !== 0){
          result = result.toFixed(3);
        }
        display.value=result;
        string=result;
      }
      //to display that operator can not be placed at end
      catch(e){
        //display.value='ERROR';
        alert('Operator can not be placed at end..')
      }
      }

      //condition to reset the value 
      else if(clickedvalue === 'RESET'){
        if(display.value === ''){
          alert('there is nothing to reset')
        }
        else{
        string='';
        display.value=string;
        }
      }

      //condition to delete the one value 
      else if (clickedvalue === 'DEL'){
        if(display.value === ''){
          alert('there is nothing to delete')
        }
        else{
        string = display.value.slice(0, -1);
        display.value=string;
        }
      }
      
      
      // condition to add numbers in input field 
      else{

        //checking condition for the operator enter in first 
        if(display.value === ''){
          if(clickedvalue === '-' || !isNaN(clickedvalue)){
            string=string + clickedvalue;
            console.log(string)
            display.value = string;
          }
          else{
            alert('This operator is not allowed at first !!')
          }
        }
        else{
          if(clickedvalue === 'x'){
            clickedvalue =  '*';
          }
            string=string + clickedvalue;
            console.log(string)
            display.value = string;
        }
        
        
      }
      
  })
})