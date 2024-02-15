    console.log("Hello World");

    let btn = document.getElementById("btnGetTime");

    btn.addEventListener("click", toggleTimer);

    function toggleTimer(){

        let timeDisplay = document.getElementById(("getTimer"));
        timeDisplay.classList.toggle("hide");

        if(!timeDisplay.classList.contains("hide")){

          updateTimer();
        }
    }

    function updateTimer(){

        let now = new Date();

        let hours = String(now.getHours()).padStart(2, '0');
        let mins  = String(now.getMinutes()).padStart(2, '0');
        let secs  = String(now.getSeconds()).padStart(2, '0');

        document.getElementById("getTimer").innerHTML = `${hours}:${mins}:${secs}`;

        console.log(`${hours}:${mins}:${secs}`);

    }

    setInterval(updateTimer, 1000);