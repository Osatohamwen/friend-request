let alertName = prompt("Please type in your name");

document.getElementById('names').innerHTML = (`${alertName}!!! Do you want to be friends with me?` );

let myRules = document.getElementById("my-rules")
let myResponse = document.getElementById("my-response")
let yes = document.getElementById("yes")
let no = document.getElementById("no")
let btnAgree = document.getElementById("btn-agree")
let btnNotAgree = document.getElementById("btn-not-agree")
let friends = document.getElementById("friends")
let opps = document.getElementById("opps")

let open = false;
let unwrap = false;
btnAgree.addEventListener('click',(e) => {
    if(!unwrap){
        friends.style.display = "flex";
        // opps.style.display = "none";
        unwrap = true;
    }
    else{
        // myRules.style.display = "flex";
        friends.style.display = "none";
        unwrap = false;
    }
});

btnNotAgree.addEventListener('click',(e) => {
    if(!unwrap){
        opps.style.display = "flex";
        // friends.style.display = "none";
        unwrap = true;
    }
    else{
        // myRules.style.display = "flex";
        opps.style.display = "none";
        unwrap = false;
    }
});

yes.addEventListener('click',(e) => {
    if(!open){
        myRules.style.display = "flex";
        myResponse.style.display = "none";
        open = true;
    }
    else{
        myRules.style.display = "none";
        myResponse.style.display = "none";
        open = false;
    }
});

no.addEventListener('click',(e) => {
    if(!open){
        myRules.style.display = "none";
        myResponse.style.display = "flex";
        open = true;
    }
    else{
        myRules.style.display = "none";
        myResponse.style.display = "none";
        open = false;
    }
});