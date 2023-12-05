
        const inputBox=document.getElementById("task");
        const listCont=document.getElementById("listContainer");
        function addtask()
        {
         if(inputBox.value=== '')
         {
             alert("Please Write Something.");
         }
         else
         {
           let li=document.createElement("li");
           li.innerHTML=inputBox.value;
           listCont.appendChild(li);

           let button=document.createElement("button");
           button.innerHTML="Remove";
           button.addEventListener("click",function()
           {
            li.remove();
           })
           let span=document.createElement("span");
           span.appendChild(button);
           li.appendChild(span);
         }
         inputBox.value='';
        }
    