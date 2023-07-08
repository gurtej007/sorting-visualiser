let btninsert=document.querySelector("#insertion");
btninsert.addEventListener("click",async function(){
    let left=0;
    let right=length-1;
    await insertionsort(arr);
    
    
})
async function insertionsort(arr) 
{ 
    let i, j; 
    for (i = 1; i <length; i++)
    { 
        
        let div1=document.querySelector(".ele"+i);
        j = i - 1; 
        let key=arr[i];
        
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key)
        { 
            swapbars(j,j+1);
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            j = j - 1; 
            await sleep(delay);
        } 
        
        
      
    } 
} 
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

