var password="wordpass";
var response;
var entryCount = 0;
var error = false;
var entryLimit = 3;

while(response != password &&  !error){
    if(entryCount<entryLimit){
        response=window.prompt("Enter password");
        entryCount++;
    }else{
        error=true;
    }
}

if(error){
    alert("Too many tries");
}else{
    alert("Welcome back!");
}