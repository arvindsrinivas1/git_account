var myImage = document.querySelector('img');
var count = 0;
myImage.onclick = function() {
    count = count + 1;
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/donkey1.jpg') {
      myImage.setAttribute ('src','images/donkey2.jpg');
      setName();

    } else {
      myImage.setAttribute ('src','images/donkey1.jpg');
      setName();
    }
    document.querySelector('p').textContent = count;
}
var buttonVar = document.querySelector('button');
var headingVar = document.querySelector('h1');

function setWelcome(){
  var name = prompt("Enter UserName");
  localStorage.setItem('name',name);
  headingVar.textContent ="Welcome, "+name;
}

function setName(){
  if(!localStorage.getItem('name')){
    setWelcome();
  }
  else{
    headingVar.textContent = "Welcome again, "+localStorage.getItem('name')+ count;
  }
}

setName();

buttonVar.onclick = function(){
  setWelcome();
}
