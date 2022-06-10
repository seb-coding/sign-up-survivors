// switch display for picture on click

myFunction1 = () => {
    document.getElementById("char1_big").style.display ='block';
    document.getElementById("char2_big").style.display ='none';
    document.getElementById("char3_big").style.display ='none';
}

myFunction2 = () => {
    document.getElementById("char1_big").style.display ='none';
    document.getElementById("char2_big").style.display ='block';
    document.getElementById("char3_big").style.display ='none';
}

myFunction3 = () => {
    document.getElementById("char1_big").style.display ='none';
    document.getElementById("char2_big").style.display ='none';
    document.getElementById("char3_big").style.display ='block';
}

// name below 3 letters -> red
// pw below 3 letters ->
// pw not the same