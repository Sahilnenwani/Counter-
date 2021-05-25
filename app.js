let count=0;

const countvalue=document.getElementById('value');
const btns=document.querySelectorAll('.btn');

btns.forEach( (btn)=>{
    btn.addEventListener('click',(e)=>{
    const style= e.currentTarget.classList;
    if (style.contains("decrease")) {
        count--;
        
        countvalue.style.color='red';
    }
    else if (style.contains("increase")) 
    {
    count++;    
    countvalue.style.color='blue';
    } 
    else {
      count=0; 
      countvalue.style.color='#222' 
    }
        countvalue.textContent=count;
    
    })

})