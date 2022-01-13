function change() {
    var x = (Math.floor(Math.random() * 100)) + 1;

    if(x < 10) {
       
        document.getElementById("note1").innerHTML = x +"% Bewafa Bewafa Bewafa nikli/nikla hai tu";
        
    }
    else if(x < 30 && x > 10) {
       
        document.getElementById("note1").innerHTML = x+"% Bekar hai pyaar";
    }
    else if(x < 60 && x > 30) {
        
        document.getElementById("note1").innerHTML =x+ "% Thik thak hai";
    }
    else{
      
        document.getElementById("note1").innerHTML = x+"% Keep it up";
    }
}