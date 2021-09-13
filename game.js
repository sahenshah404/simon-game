var colours = ["red", "blue", "green", "yellow"];
var sequence = [];
var playerSequence = [];

function randomNumber() {
    return Math.floor(Math.random() * 4);
}

function nextSequence() {
    var nextRandomNumber = randomNumber();
    sequence.push(colours[nextRandomNumber]);
    $("h1").text("LEVEL-  " + sequence.length);
    $("#" + colours[nextRandomNumber]).animate({ opacity: 0 }).animate({ opacity: 1 });
    var sound = new Audio("sounds/" + colours[nextRandomNumber] + ".mp3");
    sound.play();
}
// for using in laptop
// function gameStart() {
//     $(document).keydown(function () {
//         nextSequence();
//         $(document).off("keydown");
//         startClick();
//     });
// }

//for touch screen devices
function gameStart() {
    $("body").click(function () {
        nextSequence();
        $("body").off("click");
        startClick();
    });
}

function startClick() {
    $(".btn").click(function () {
        playerSequence.push(this.id);
        var sound = new Audio("sounds/" + this.id + ".mp3");
        sound.play();
        $("#" + this.id).addClass("pressed");
        setTimeout(() => {
            $("#" + this.id).removeClass("pressed");
        }, 100);

        if (playerSequence[playerSequence.length - 1] != sequence[playerSequence.length - 1]) {
            $("body").addClass("game-over");
            var sound = new Audio("sounds/wrong.mp3");
            sound.play();
            sequence = [];
            playerSequence = [];
            setTimeout(() => {
                $("body").removeClass("game-over");
                $("h1").text("Game Over - Press any key to Restart");
                stopClick();
                gameStart();
            }, 300);
        }
        else {
            if (playerSequence.length == sequence.length) {
                playerSequence = [];
                setTimeout(() => {
                    nextSequence();
                }, 700);
            }
        }

    })

}

function stopClick() {
    $(".btn").off("click");
}

gameStart()