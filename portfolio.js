

var menu = document.getElementById('menuList'),menuarrow = document.getElementById("menuarrow"),height="200px", button = document.getElementById("menuButton");
button.addEventListener('click', showMenu,false);
function showMenu(){
    if(menu.style.height == height){
        menu.style.height = "0px";
        menuarrow.innerHTML = "&#9662;";
    } else {
        menu.style.height = height;
        menuarrow.innerHTML = "&#9652;";
    }
}




var submit = document.querySelector('#SubmitButton');
var alertz = document.querySelector('.alert');
 submit.addEventListener('click', verify,false);


function verify(){
  var pattern = /^([A-Za-z0-9_\-\.]){1,}\@([A-Za-z0-9_\-\.]){1,}\.([A-Za-z]{2,4})$/;
  var theEmail = document.getElementById('inputEmail').value;
  if (pattern.test(theEmail)=== false){
  alertz.style.display = 'block';
  setTimeout(function(){
      alertz.style.display='none';

  }, 2000);
  }

}

var closer = document.querySelector('.closebtn');
closer.addEventListener('click', closeAlert,false);

function closeAlert(){
  alertz.style.display='none';
}
