var str = 'aaaaaabbaaaaaaaaaaaaaaaaaa';
var inFirst = null;
var inSecond = null;
var c = '';
var e = '';

for (i=0; i<str.length; i++) {
  
  if(str[i] !== str[i-1]){   
    inFirst = i;
  }
 
  if(str[i] !== str[i+1]){   
    inSecond = i;
    
    runInc(inFirst, inSecond);    
    run(str[i]);
   
  }
  
}

function runInc(first, second){
    c = str.substring(first, second+1);  
}

function run(letter) {
    var re = new RegExp(letter, 'g');  
    var t = letter + c.match(re).length;
  
    return e += t;
}