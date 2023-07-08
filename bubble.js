let btnsort=document.querySelector("#sort");
btnsort.addEventListener("click",function(){
    bubblesort(arr);
})
function swapbars(num1,num2){
    
    let div1=document.querySelector(".ele"+num1);
    let div2=document.querySelector(".ele"+num2);
    
    div1.style.backgroundColor="turquoise";
    div2.style.backgroundColor="turquoise";
    // let color1=div1.style.backgroundColor;
    // div1.style.backgroundColor=div2.style.backgroundColor;
    // div2.style.backgroundColor=color1;
   
    let height1=div1.style.height;
    div1.style.height=div2.style.height;
    div2.style.height=height1;
    
   
}
async function bubblesort(arr){
    btn.disabled = 1;
    for(let i=0;i<length-1;i++){
       
        for(let j=0;j<length-i-1;j++){
            let div1=document.querySelector(".ele"+j);
            let next=j+1;
            let div2=document.querySelector(".ele"+next);
            if(arr[j]>arr[j+1]){
                swapbars(j,j+1);
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
                
                await sleep(delay);
                div1.style.backgroundColor='white';
                div2.style.backgroundColor='white';
            }
        }
        let x=length-i-1;
        let div1=document.querySelector(".ele"+x);
        
        div1.style.backgroundColor="black";
        div1.style.color="white";
        // bar1.style.backgroundColor="black";
    }
    document.querySelector(".ele0").style.backgroundColor="black";
    document.querySelector(".ele0").style.color="white";
    btn.disabled = 0;
}

