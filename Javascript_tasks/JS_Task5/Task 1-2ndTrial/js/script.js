/* Task 2 */
/* variables */
const $ = document,
      colors = $.getElementsByTagName('option'),
      selectRemoveBtn = $.getElementsByTagName('button');

/* Actions */
 const removeItem = function(e){  
     for(let i=0; i < colors.length; i++){ 
            if (colors[i].selected){
              colors[i].classList.add('hidden');
              break;
            }
     }
  };

  /* Events */
  selectRemoveBtn.addEventListener('click', removeItem);
  
