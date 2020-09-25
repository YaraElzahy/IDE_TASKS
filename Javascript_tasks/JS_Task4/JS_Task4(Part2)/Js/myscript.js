const __ = document,
      btnItem1 = __.getElementById('btn-item1'),
      btnItem2 = __.getElementById('btn-item2'),
      btnItem3 = __.getElementById('btn-item3'),
      btnItem4 = __.getElementById('btn-item4'),
      headerItem1 = __.getElementById('item1-details'),
      headerItem2 = __.getElementById('item2-details'),
      headerItem3 = __.getElementById('item3-details'),
      headerItem4 = __.getElementById('item4-details');

    btnItem1.addEventListener('click', function(){
        headerItem1.innerHTML = 'Item1details:' + '<span style="font-weight: normal">' +  ' Lorem ipsum dolor sit amet,<br>consectetur adipisicing elit, sed do eiusmod<br>tempor incididunt ut labore et dolore magna aliqua.' + '</span>';
        headerItem2.innerHTML = headerItem3.innerHTML = headerItem4.innerHTML = "";
    });

    btnItem2.addEventListener('click', function(){
        headerItem2.innerHTML = 'Item2details:' + '<span style="font-weight: normal">' +  ' Lorem ipsum dolor sit amet,<br>consectetur adipisicing elit, sed do eiusmod<br>tempor incididunt ut labore et dolore magna aliqua.' + '</span>';
        headerItem1.innerHTML = headerItem3.innerHTML = headerItem4.innerHTML = "";
    });

    btnItem3.addEventListener('click', function(){
        headerItem3.innerHTML = 'Item3details:' + '<span style="font-weight: normal">' +  ' Lorem ipsum dolor sit amet,<br>consectetur adipisicing elit, sed do eiusmod<br>tempor incididunt ut labore et dolore magna aliqua.' + '</span>';
        headerItem2.innerHTML = headerItem1.innerHTML = headerItem4.innerHTML = "";
    });

    btnItem4.addEventListener('click', function(){
        headerItem4.innerHTML = 'Item4details:' + '<span style="font-weight: normal">' +  ' Lorem ipsum dolor sit amet,<br>consectetur adipisicing elit, sed do eiusmod<br>tempor incididunt ut labore et dolore magna aliqua.' + '</span>';
        headerItem2.innerHTML = headerItem3.innerHTML = headerItem1.innerHTML = "";
    });

