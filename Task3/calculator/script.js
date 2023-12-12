const displaynum=document.getElementById("accept");
function display(num)
{
    displaynum.value+=num;
}
function clr()
{
    displaynum.value="  ";
}
function del()
{
    displaynum.value=displaynum.value.slice(0,-1);
}
function calculate()
{
    try
    {
      displaynum.value=eval(displaynum.value);
    }
    catch(err)
    {
       alert("INVALID");
    }
    
    
}