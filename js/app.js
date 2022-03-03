let addbutton = document.querySelector(".addbutton");
// let removebutton = document.querySelector(".removebutton");
let container = document.querySelector(".container");
let inputValue = document.querySelector(".input");


class item{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement("input");
        input.value=itemName;
        input.type ="text"
        input.disabled = true;
        input.classList.add("item-input");


        let itemBox = document.createElement("div");
        itemBox.classList.add("item");

        let removebutton = document.createElement("button");
        removebutton.classList.add("removebutton");
        removebutton.innerHTML="REMOVE"

        let editbutton = document.createElement("button");
        editbutton.classList.add("editbutton");
        editbutton.innerHTML="EDIT"

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(removebutton);
        itemBox.appendChild(editbutton);


        editbutton.addEventListener("click", ()=>this.edit(input));
        removebutton.addEventListener("click", () => this.remove(itemBox));
    }
   
     edit(input){
         input.disabled =!input.disabled;
     }
     remove(item){
         container.removeChild(item);
     }

}

function check(){
    if(inputValue != ""){
        new item(inputValue.value);
        inputValue.value="";
    }
}

addbutton.addEventListener("click", check);
window.addEventListener('keydown', (e)=>{
    if(e.which == 13){
        check();
    }
})