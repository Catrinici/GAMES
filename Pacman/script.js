//List of features to build 
//1)Have the JS display the world of brick/coin/etc - DONE! 
//2)Have the pacman move up and down


var world = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 0, 1, 1, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2],
    [2, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 0, 1, 1, 1, 1, 1, 1, 0, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 2],
    [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];
var score = 0;
var score2 = 0;

var pacman = {
    x: 1,
    y: 1
}
var pacman2 = {
    x: 2,
    y: 7
}
var ghost = {
    x: 3,
    y: 2
}

function displayWorld() {
    var output = '';

    for (var i = 0; i < world.length; i++) {
        output += "\n<div class='row'\n>"
        for (var j = 0; j < world[i].length; j++) {
            if (world[i][j] == 2) {
                output += "<div class='brick'></div>";
            } else if (world[i][j] == 1) {
                output += "<div class='coin'></div>";
            }
            if (world[i][j] == 0) {
                output += "<div class='empty'></div>";
            } else if (world[i][j] == 3) {
                output += "<div class='cherry'></div>"
            } else if (world[i][j] == 4) {
                output += "<div id='ghost'></div>"
            }
        }
        output += "\n</div>"
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}

function displayPacman() {
    document.getElementById('pacman').style.left = pacman.x * 20 + "px";
    document.getElementById('pacman').style.top = pacman.y * 20 + "px";

}

function displayPacman2() {
    document.getElementById('pacman2').style.left = pacman2.x * 20 + "px";
    document.getElementById('pacman2').style.top = pacman2.y * 20 + "px";

}


function displayGhost() {
    document.getElementById('ghost').style.left = ghost.x * 20 + "px";
    document.getElementById('ghost').style.top = ghost.y * 20 + "px";

}

function displayScore() {
    document.getElementById('score').innerHTML = "Player 1 Score: " + score;
}

function displayScore2() {
    document.getElementById('score2').innerHTML = "Player 2 Score: " + score2;
}

displayWorld();
displayPacman();
displayPacman2();
displayScore();
displayScore2();


document.onkeydown = function(e) {
    if (e.keyCode == 37 && world[pacman.y][pacman.x - 1] !== 2) {
        pacman.x--;
        document.getElementById('pacman').style.backgroundImage = "url('pacLeft.gif')";
    } else if (e.keyCode == 39 && world[pacman.y][pacman.x + 1] !== 2) {
        pacman.x++;
        document.getElementById('pacman').style.backgroundImage = "url('pacman.gif')";
    } else if (e.keyCode == 38 && world[pacman.y - 1][pacman.x] !== 2) {
        pacman.y--;
        document.getElementById('pacman').style.backgroundImage = "url('pac.png')";
    } else if (e.keyCode == 40 && world[pacman.y + 1][pacman.x] !== 2) {
        pacman.y++;
        document.getElementById('pacman').style.backgroundImage = "url('pac.png')";
    }
    if (world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        score += 10;
        if (score % 50 == 0) {
            world[pacman.y][pacman.x] = 3;
        }
        displayScore();
        displayWorld();

    }
    if (score % 130 == 0) {
        //!!!check if there is a brick
        world[ghost.y][ghost.x] = 4;
        displayWorld();

    }
    if (world[pacman.y][pacman.x] == 4) {
        document.getElementById('pacman').style.backgroundImage = "url('shrink.jpg')";
        this.onkeydown = null;
        document.getElementById('score').append(' Pac-man 1 has died!');
    }

    // if (world[pacman.y][pacman.x] == 2) {
    //     world[pacman.y][pacman.x] = 2;
    //     displayWorld();
    // console.log(e.keyCode);
    displayPacman();

    document.onkeypress = function(a) {
        if (a.keyCode == 97 && world[pacman2.y][pacman2.x - 1] !== 2) {
            pacman2.x--;
            document.getElementById('pacman2').style.backgroundImage = "url('pacman.gif')";
        } else if (a.keyCode == 100 && world[pacman2.y][pacman2.x + 1] !== 2) {
            pacman2.x++;
            document.getElementById('pacman2').style.backgroundImage = "url('pacman.gif')";
        } else if (a.keyCode == 119 && world[pacman2.y - 1][pacman2.x] !== 2) {
            pacman2.y--;
            document.getElementById('pacman2').style.backgroundImage = "url('pac.png')";
        } else if (a.keyCode == 115 && world[pacman2.y + 1][pacman2.x] !== 2) {
            pacman2.y++;
            document.getElementById('pacman2').style.backgroundImage = "url('pac.png')";
        }
        if (world[pacman2.y][pacman2.x] == 1) {
            world[pacman2.y][pacman2.x] = 0;
            score2 += 10;
            if (score2 % 50 == 0) {
                world[pacman2.y][pacman2.x] = 3;
            }
            displayScore2();
            displayWorld();

        }
        if (world[pacman2.y][pacman2.x] == 4) {
            document.getElementById('pacman2').style.backgroundImage = "url('shrink.jpg')";
            document.getElementById('score2').innerHTML = ' Pac-man 2 has died!';
            this.onkeypress = null;
        }

    }
    displayPacman2();

    function ghostMove() {
        var move = Math.floor((Math.random() * 4) + 1);
        if (move == 1 && world[ghost.y][ghost.x - 1] !== 2) {
            ghost.x--;
        } else if (move == 2 && world[ghost.y][ghost.x + 1] !== 2) {
            ghost.x++;
        } else if (move == 3 && world[ghost.x][ghost.y - 1] !== 2) {
            ghost.y--;
        } else if (move == 4 && world[ghost.x][ghost.y + 1] !== 2) {
            ghost.y++;
        }


    }
    displayGhost();
    ghostMove();
}