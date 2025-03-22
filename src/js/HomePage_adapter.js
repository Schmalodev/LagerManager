const button = document.getElementById("submit");

button.addEventListener("click", function(){
    let Lager = document.getElementById("Lager").value;
    let Stand = document.getElementById("Stand").value;

    fetch("https://schmalodev.pythonanywhere.com/addItem", {
        method: "POST",
        headers:{ 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({Lager, Stand})
    })
})