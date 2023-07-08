let btnquick=document.querySelector("#quick");
btnquick.addEventListener("click",async function(){
    let left=0;
    let right=length-1;
    await quicksort(arr,left,right);
    
    
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


async function partition(arr,l,r){
    let j=r;
    let i=l+1;
    let piv=arr[l];
    document.querySelector(".ele"+l).style.backgroundColor="lightgreen";
    await sleep(delay);
    while(i<=j){
        while(arr[i]<=piv){
            i++;
        }
        if(i<=r)
            document.querySelector(".ele"+i).style.backgroundColor="lightblue";
      
        while(j>l && arr[j]>=piv){
            j--;
        }
        document.querySelector(".ele"+j).style.backgroundColor="lightblue";
        if(i<j){
            await sleep(delay);
            swapbars(i,j);
            await sleep(delay);
            let temp=arr[j];
            arr[j]=arr[i];
            arr[i]=temp;

            i++;
            j--;
           
        }
    }
    document.querySelector(".ele"+l).style.backgroundColor="red";
    document.querySelector(".ele"+j).style.backgroundColor="red";
    await sleep(delay);
    swapbars(l,j);
    
    let temp=arr[j];
    arr[j]=arr[l];
    arr[l]=temp;
    document.querySelector(".ele"+j).style.backgroundColor="white";
    document.querySelector(".ele"+j).style.color="black";

    return j;
}
async function quicksort(arr,left,right){
    if(left<right){
       

        let piv=await partition(arr,left,right) ;
        for(let i=0;i<length;i++){
            if(document.querySelector(".ele"+i).style.backgroundColor!="black"){
                document.querySelector(".ele"+i).style.backgroundColor="white";
            }
        }
        await sleep(delay);
        await quicksort(arr,left,piv-1);
        await quicksort(arr,piv+1,right);
    }
    
}

