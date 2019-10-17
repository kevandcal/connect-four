var board = $("#board");
var slot = $(".slot");
var currentPlayer = "player1";
var player1Wins = $("#player1-wins");
var player2Wins = $("#player2-wins");
var button = $("button");

board.on("click", function(e) {
    function switchPlayers() {
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    }

    function checkForVictory() {
        for (var i = 0; i < slot.length; i++) {
            if (
                slot.eq(i).hasClass(currentPlayer) &&
                // check for vertical victories:
                ((slot.eq(i + 7).hasClass(currentPlayer) &&
                    slot.eq(i + 14).hasClass(currentPlayer) &&
                    slot.eq(i + 21).hasClass(currentPlayer)) ||
                    // check for horizontal victories:
                    (!slot.eq(i).hasClass("column-five") &&
                        !slot.eq(i).hasClass("column-six") &&
                        !slot.eq(i).hasClass("column-seven") &&
                        slot.eq(i + 1).hasClass(currentPlayer) &&
                        slot.eq(i + 2).hasClass(currentPlayer) &&
                        slot.eq(i + 3).hasClass(currentPlayer)) ||
                    // check for diagonal victories (downward left to right):
                    (!slot.eq(i).hasClass("column-five") &&
                        !slot.eq(i).hasClass("column-six") &&
                        !slot.eq(i).hasClass("column-seven") &&
                        slot.eq(i + 8).hasClass(currentPlayer) &&
                        slot.eq(i + 16).hasClass(currentPlayer) &&
                        slot.eq(i + 24).hasClass(currentPlayer)) ||
                    // check for diagonal victories (downward right to left):
                    (!slot.eq(i).hasClass("column-one") &&
                        !slot.eq(i).hasClass("column-two") &&
                        !slot.eq(i).hasClass("column-three") &&
                        slot.eq(i + 6).hasClass(currentPlayer) &&
                        slot.eq(i + 12).hasClass(currentPlayer) &&
                        slot.eq(i + 18).hasClass(currentPlayer)))
            ) {
                if (currentPlayer == "player1") {
                    player1Wins.addClass("onscreen");
                } else {
                    player2Wins.addClass("on");
                }
            }
        }
    }

    if ($(e.target).hasClass("column-one")) {
        if (!$("#61").hasClass("player1") && !$("#61").hasClass("player2")) {
            $("#61").addClass(currentPlayer);
        } else if (
            !$("#51").hasClass("player1") &&
            !$("#51").hasClass("player2")
        ) {
            $("#51").addClass(currentPlayer);
        } else if (
            !$("#41").hasClass("player1") &&
            !$("#41").hasClass("player2")
        ) {
            $("#41").addClass(currentPlayer);
        } else if (
            !$("#31").hasClass("player1") &&
            !$("#31").hasClass("player2")
        ) {
            $("#31").addClass(currentPlayer);
        } else if (
            !$("#21").hasClass("player1") &&
            !$("#21").hasClass("player2")
        ) {
            $("#21").addClass(currentPlayer);
        } else if (
            !$("#11").hasClass("player1") &&
            !$("#11").hasClass("player2")
        ) {
            $("#11").addClass(currentPlayer);
        } else {
            return;
        }
    }
    if ($(e.target).hasClass("column-two")) {
        if (!$("#62").hasClass("player1") && !$("#62").hasClass("player2")) {
            $("#62").addClass(currentPlayer);
        } else if (
            !$("#52").hasClass("player1") &&
            !$("#52").hasClass("player2")
        ) {
            $("#52").addClass(currentPlayer);
        } else if (
            !$("#42").hasClass("player1") &&
            !$("#42").hasClass("player2")
        ) {
            $("#42").addClass(currentPlayer);
        } else if (
            !$("#32").hasClass("player1") &&
            !$("#32").hasClass("player2")
        ) {
            $("#32").addClass(currentPlayer);
        } else if (
            !$("#22").hasClass("player1") &&
            !$("#22").hasClass("player2")
        ) {
            $("#22").addClass(currentPlayer);
        } else if (
            !$("#12").hasClass("player1") &&
            !$("#12").hasClass("player2")
        ) {
            $("#12").addClass(currentPlayer);
        } else {
            return;
        }
    }
    if ($(e.target).hasClass("column-three")) {
        if (!$("#63").hasClass("player1") && !$("#63").hasClass("player2")) {
            $("#63").addClass(currentPlayer);
        } else if (
            !$("#53").hasClass("player1") &&
            !$("#53").hasClass("player2")
        ) {
            $("#53").addClass(currentPlayer);
        } else if (
            !$("#43").hasClass("player1") &&
            !$("#43").hasClass("player2")
        ) {
            $("#43").addClass(currentPlayer);
        } else if (
            !$("#33").hasClass("player1") &&
            !$("#33").hasClass("player2")
        ) {
            $("#33").addClass(currentPlayer);
        } else if (
            !$("#23").hasClass("player1") &&
            !$("#23").hasClass("player2")
        ) {
            $("#23").addClass(currentPlayer);
        } else if (
            !$("#13").hasClass("player1") &&
            !$("#13").hasClass("player2")
        ) {
            $("#13").addClass(currentPlayer);
        } else {
            return;
        }
    }
    if ($(e.target).hasClass("column-four")) {
        if (!$("#64").hasClass("player1") && !$("#64").hasClass("player2")) {
            $("#64").addClass(currentPlayer);
        } else if (
            !$("#54").hasClass("player1") &&
            !$("#54").hasClass("player2")
        ) {
            $("#54").addClass(currentPlayer);
        } else if (
            !$("#44").hasClass("player1") &&
            !$("#44").hasClass("player2")
        ) {
            $("#44").addClass(currentPlayer);
        } else if (
            !$("#34").hasClass("player1") &&
            !$("#34").hasClass("player2")
        ) {
            $("#34").addClass(currentPlayer);
        } else if (
            !$("#24").hasClass("player1") &&
            !$("#24").hasClass("player2")
        ) {
            $("#24").addClass(currentPlayer);
        } else if (
            !$("#14").hasClass("player1") &&
            !$("#14").hasClass("player2")
        ) {
            $("#14").addClass(currentPlayer);
        } else {
            return;
        }
    }
    if ($(e.target).hasClass("column-five")) {
        if (!$("#65").hasClass("player1") && !$("#65").hasClass("player2")) {
            $("#65").addClass(currentPlayer);
        } else if (
            !$("#55").hasClass("player1") &&
            !$("#55").hasClass("player2")
        ) {
            $("#55").addClass(currentPlayer);
        } else if (
            !$("#45").hasClass("player1") &&
            !$("#45").hasClass("player2")
        ) {
            $("#45").addClass(currentPlayer);
        } else if (
            !$("#35").hasClass("player1") &&
            !$("#35").hasClass("player2")
        ) {
            $("#35").addClass(currentPlayer);
        } else if (
            !$("#25").hasClass("player1") &&
            !$("#25").hasClass("player2")
        ) {
            $("#25").addClass(currentPlayer);
        } else if (
            !$("#15").hasClass("player1") &&
            !$("#15").hasClass("player2")
        ) {
            $("#15").addClass(currentPlayer);
        } else {
            return;
        }
    }
    if ($(e.target).hasClass("column-six")) {
        if (!$("#66").hasClass("player1") && !$("#66").hasClass("player2")) {
            $("#66").addClass(currentPlayer);
        } else if (
            !$("#56").hasClass("player1") &&
            !$("#56").hasClass("player2")
        ) {
            $("#56").addClass(currentPlayer);
        } else if (
            !$("#46").hasClass("player1") &&
            !$("#46").hasClass("player2")
        ) {
            $("#46").addClass(currentPlayer);
        } else if (
            !$("#36").hasClass("player1") &&
            !$("#36").hasClass("player2")
        ) {
            $("#36").addClass(currentPlayer);
        } else if (
            !$("#26").hasClass("player1") &&
            !$("#26").hasClass("player2")
        ) {
            $("#26").addClass(currentPlayer);
        } else if (
            !$("#16").hasClass("player1") &&
            !$("#16").hasClass("player2")
        ) {
            $("#16").addClass(currentPlayer);
        } else {
            return;
        }
    }
    if ($(e.target).hasClass("column-seven")) {
        if (!$("#67").hasClass("player1") && !$("#67").hasClass("player2")) {
            $("#67").addClass(currentPlayer);
        } else if (
            !$("#57").hasClass("player1") &&
            !$("#57").hasClass("player2")
        ) {
            $("#57").addClass(currentPlayer);
        } else if (
            !$("#47").hasClass("player1") &&
            !$("#47").hasClass("player2")
        ) {
            $("#47").addClass(currentPlayer);
        } else if (
            !$("#37").hasClass("player1") &&
            !$("#37").hasClass("player2")
        ) {
            $("#37").addClass(currentPlayer);
        } else if (
            !$("#27").hasClass("player1") &&
            !$("#27").hasClass("player2")
        ) {
            $("#27").addClass(currentPlayer);
        } else if (
            !$("#17").hasClass("player1") &&
            !$("#17").hasClass("player2")
        ) {
            $("#17").addClass(currentPlayer);
        } else {
            return;
        }
    }
    checkForVictory();
    switchPlayers();
});

button.on("click", function() {
    location.reload(true);
});
