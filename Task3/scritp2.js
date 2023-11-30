const display=document.getElementById("value");
    const element1=document.getElementById("add");
    const element2=document.getElementById("minus");
    const element3=document.getElementById("reset");
    let num=0;
   

  element1.addEventListener("click",function() 
    {
       num++;
       display.innerText=num.toString();
    })
  element2.addEventListener("click", function()
    {
        num--;
        display.innerText=num.toString();
    })
  element3.addEventListener("click",function()
  {
    num=0;
    display.innerText=num.toString();
  })