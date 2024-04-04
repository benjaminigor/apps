var piano = document.getElementById('piano')
console.log(piano.innerHTML)
var text = piano.innerHTML
var letters = text.split('')
for(var key in letters){
    var letter = letters[key]
    if (key==13){
        letters[key] = "<span class='letter1'>"+letter+"</span>"; 
    }
    else if (key%2){
        letters[key] = "<span class='letter2'>"+letter+"</span>"; 
    }else{
        letters[key] = "<span class='letter1'>"+letter+"</span>"; 
    }
}
console.log(letters)
piano.innerHTML=letters.join('')