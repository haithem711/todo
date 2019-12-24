var text=document.querySelector('.text')
btn=document.querySelector('.button')
liste=document.querySelector('.liste')
console.log(text.value)



btn.addEventListener("click",function(){
if (text.value==""){alert('add item')}
else

{var complete = document.createElement("button");
var deletee=document.createElement("button")
var node = document.createElement("li");
var item = document.createElement("h3")
        complete.innerHTML = "complete"
        deletee.innerHTML = "delete"
      
        item.innerHTML=text.value;


        
        liste.appendChild(node);
        node.appendChild(complete);
        complete.addEventListener("click",function(){
            complete.innerHTML="undo" ;
            item.style.textDecoration= "line-through"
        })
        node.appendChild(deletee)
            deletee.addEventListener("click",function(){
                deletee.parentElement.remove();
            })
        node.appendChild(item);

        text.value = ""
        
    }


})
