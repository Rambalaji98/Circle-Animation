window.onload = function() {
    document.getElementById("start-button").onclick = startButton;
    document.getElementById("stop-button").onclick = stopButton;

    function startButton() {
        var firstCard = document.getElementById("first-card");
        firstCard.className += " first-card";
        var secondCard = document.getElementById("second-card");
        secondCard.className += " second-card";
        var thirdCard = document.getElementById("thrid-card");
        thirdCard.className += " thrid-card";
        var fourthCard = document.getElementById("fourth-card");
        fourthCard.className += " fourth-card";
    }

    function stopButton() {
        var firstCard = document.getElementById("first-card");
        firstCard.classList.remove("first-card");
        var secondCard = document.getElementById("second-card");
        secondCard.classList.remove("second-card");
        var thirdCard = document.getElementById("thrid-card");
        thirdCard.classList.remove("thrid-card");
        var fourthCard = document.getElementById("fourth-card");
        fourthCard.classList.remove("fourth-card");
    }
}