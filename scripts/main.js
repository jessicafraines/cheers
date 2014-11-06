function removeSpace(name){
  var nameWithoutSpace = name.replace(/\s/g,'');
  return nameWithoutSpace;
}

function nameDisplay(name){
  return "Your name is " + name + "!";
}

function cheerFor(name){
  var connector;
  name = removeSpace(name);
  return name.toUpperCase().split('').map(function(letter){
    if(letter === "A" || letter === "E" || letter === "F" || letter === "H" || letter === "I" || letter === "L" || letter === "M" || letter === "N" || letter === "O" || letter === "R" || letter === "S" || letter === "X"){
      connector = "an";
    }else{
      connector = "a";
    }
    return "Give me " + connector + ' ' + letter + "!"
  }).join("\n");
}

function closing(name){
  return name + " is Great!";
}

document.addEventListener('DOMContentLoaded', function(){
  var $form = document.getElementById('enterName');
  var $nameBox = $form.querySelector('input[type=text]');
  $form.addEventListener('submit', function(event){
    event.preventDefault();
    nameDisplay($nameBox.value);
    cheerFor($nameBox.value);
    closing($nameBox.value);
  });
});
