let btn=document.querySelector("button");


let parent=document.querySelector(".parent");

let arr=new Array();

let length=0;
btn.addEventListener("click",function() {
    parent.innerHTML="";
    create();
    generatebars(arr);
});
function create(){
    arr=[];
    for(let i=0;i<length;i++){
        let num=Math.floor((Math.random()+1)*100);
        arr.push(num);
    }
}
function generatebars(arr){
    for(let i=0;i<length;i++){
        
        let div=document.createElement("div");
        div.style.width="1.05em";
        div.style.height=(arr[i]+'px');
        div.classList.add("ele"+i);
        div.style.border="5px solid black";
        div.style.backgroundColor="white";
        div.style.marginRight="2px";
        
        // div.style.borderColor="black";
        parent.appendChild(div);
        
    }
}


let delay=1000;

// Selecting speed slider from DOM
let delayElement = document.querySelector('#speed_input');

// Event listener to update delay time 
delayElement.addEventListener('input', function(){
    console.log(delayElement.value, typeof(delayElement.value));
    delay=1000-parseInt(delayElement.value);
});
function sleep(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

let size=document.querySelector('#array_input');

size.addEventListener('input', function(){
    console.log(size.value);
    length=parseInt(size.value);
})