const __ = document,
      btnResult = __.getElementById('reveal-result'),
      btnOutput = __.getElementById('reveal-result2'),
      btnAlert1 = __.getElementById('show-alert1'),
      btnAlert2 = __.getElementById('show-alert2'),
      btnExecute = __.getElementById('execute');

/* Question 2: The name of JavaScript */
btnAlert1.addEventListener('click', function(){
    let checkSol,
    input = prompt("What's the “official” name of JavaScript?", 0);
    if(input == 'ECMAScript')  {checkSol = 'Right!';}
    else {checkSol = "You don't know? “ECMAScript”!";}  

    alert(checkSol);
});

/* Question 3: Show the sign */
btnAlert2.addEventListener('click', function(){
    let ans,
    number = prompt('number?', 0);

    if (number > 0) {ans = 1;} 
    else if (number < 0) {ans = -1;} 
    else { ans = 0;}

   alert(ans);

});

/* Question 4: Rewrite 'if' into '?' */
btnResult.addEventListener('click', function ( ){
    let number1 = Number(__.getElementById('a').value),
    number2 = Number( __.getElementById('b').value);

let res = (number1 + number2 < 4) ? 'Below' : 'Over';

__.getElementById('result').innerHTML = res;
});


/* Question 5:  Rewrite 'if..else' into '?' */

btnOutput.addEventListener('click', function(){
   let login = __.getElementById('position').value;

   let message = (login == 'Employee') ? 'Hello' : (login == 'Director') ? 'Greetings' : (login == '') ? 'No login' : ''; 
   __.getElementById('output').innerHTML = message;
});


/* Question 9: Check the login */
let esc = (function (e){if (e.keyCode == 27) {return '.cancel'.click();}});

btnExecute.addEventListener('click', function(){
    let username, password;
    username = prompt("Who's there?", '');
    if(username == 'Admin'){
        password = prompt("Password?", '');
        if(password == 'TheMaster') 
         alert('Welcome');
        else if (password == '' || esc)
         alert('Cancelled');
        else alert('Wrong password');
    }
    else if(username == '' || esc)
       alert('Cancelled');
    else alert("I don't know you"); 

});



