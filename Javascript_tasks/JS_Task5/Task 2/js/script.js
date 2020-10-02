/* Task 2 */
/* variables */
const $ = document,
      pitems = $.getElementsByTagName('p'),
      setBackgroundBtn = $.getElementById('btn-background');

     /*    console.log(pitems[0].dataset.item); // returns 1 */

/* Actions */
const setBackground = function(e){  
   for(let i=0; i < pitems.length; i++){
     /* if index is even, set background color to green */ 
          if (i%2 == 0){
               if(pitems[i].classList.contains('green')){
                    pitems[i].classList.remove('green');
               }
               else{
                    pitems[i].classList.add('green');
               }
          }
     /* if index is odd, set background color to purple */ 
          else{
               if(pitems[i].classList.contains('purple')){
                    pitems[i].classList.remove('purple');
               }
               else{
                    pitems[i].classList.add('purple');
               }
           }
     }      
};


/* Events */
setBackgroundBtn.addEventListener('click', setBackground);
        
