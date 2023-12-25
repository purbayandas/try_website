const ribbon_container = document.querySelector(".ribbon");
const ribbon_buttons = document.querySelectorAll(".ribbon-button");
let current_button;

ribbon_container.addEventListener("mouseover", (event) => {
    
    let ribbon_button = event.target;
    if (ribbon_button.classList.contains("ribbon-button")){
        for (let button of ribbon_buttons){
            button.classList.remove("bigger");
        }
        ribbon_button.classList.add("bigger");
        current_button = ribbon_button;        
    }        
});
ribbon_container.addEventListener("mouseleave", (event) => {
    for (let button of ribbon_buttons){
        button.classList.remove("bigger");
    }
    current_button.classList.add("bigger");
});

ribbon_container.addEventListener("click", (event) => {
    
    let ribbon_button = event.target;
    if (ribbon_button.textContent === "Contacts"){
        console.log("hello")
        const menu = document.createElement("div");
        const list_item_1 = document.createElement("li");
        const list_item_2 = document.createElement("li");
        list_item_1.textContent = "Email";
        list_item_2.textContent = "Phone";
        menu.classList.add("Contact-list");        
        menu.appendChild(list_item_1);
        menu.appendChild(list_item_2);
        menu.style.display = "block";
        ribbon_button.appendChild(menu);

    }
    if (ribbon_button.classList.contains("ribbon-button")){
        for (let button of ribbon_buttons){
            button.classList.remove("bigger");
        }
        ribbon_button.classList.add("bigger");
        current_button = ribbon_button;        
    }        
});


