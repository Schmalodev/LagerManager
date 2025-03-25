const button = document.getElementById("submit");

button.addEventListener("click", function(){
    counter = 0;
    isRun = true;
    let Lager = document.getElementById("Lager").value;
    let Stand = document.getElementById("Stand").value;

    fetch("https://schmalodev.pythonanywhere.com/addItem", {
        method: "POST",
        headers:{ 
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({Lager, Stand})
    })

    while (isRun){
        if (counter == 220){
            isRun = false;
            window.location.href = "HomePage.html"
        }else{
            counter++;
        }
    }
})