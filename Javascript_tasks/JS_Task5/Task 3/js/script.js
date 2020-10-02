/* Task 2 */
/* variables */
const $ = document,
      boldWords = $.getElementsByTagName('strong'),
      link = $.getElementsByTagName('a');

/* Actions */
function highlight(){  
   for(let i=0; i < boldWords.length; i++){
          boldWords[i].classList.remove('transparent');
          boldWords[i].classList.add('green');
          console.log(boldWords[i]);
     }
}

 function deemphasize(){  
     for(let i=0; i < boldWords.length; i++){ 
            boldWords[i].classList.remove('green');
            boldWords[i].classList.add('transparent');
     }
  }
