const deleteIcon=()=>{
    const i = document.createElement("i");
i.classList.add("fas", "fa-trash-alt", "trashIcon", "icon");
i.addEventListener("click", deleteTask)
return i
}

const deleteTask=(event)=>{

const parent=event.target.parentElement; //Accedemos al evento, luego al target y luego al parentElement
parent.remove();//Método
};

export default deleteIcon;