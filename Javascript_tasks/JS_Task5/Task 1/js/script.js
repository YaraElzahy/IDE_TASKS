/* variables */
const $ = document,
      colorsList = $.getElementById('colors-list'),
      removeSelectBtn = $.getElementById('btn-select-remove');

/* Actions */
const removeItem = function(e){
     colorsList.options[colorsList.selectedIndex].remove;
}

/* Events */
removeSelectBtn.addEventListener('click', removeItem);
        
