function nameDisplay(name){
  return "Your name is " + name + "!";
}

function cheerFor(name){
  var connector;
  return name.toUpperCase().split('').map(function(letter){
    console.log(letter);
    if(letter === "A" || letter === "E" || letter === "F" || letter === "H" || letter === "I" || letter === "L" || letter === "M" || letter === "N" || letter === "O" || letter === "R" || letter === "S" || letter === "U" || letter === "X"){
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

