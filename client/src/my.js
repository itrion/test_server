var board = $("<section class='board ui-widget-header'><h1>Mock Board</h1><ul class='columns-area ui-widget-content'></ul></section>");
var column = $("<li class='column ui-widget-content'><h1 class='ui-widget-header'></h1><ul class='tasks-area'></ul></li>");
var task = $("<li class='task'><h1></h1><p></p></li>");

$(document).ready(function () {
    $("header").text("Mock Page");
    loadBoard();
    loadTasks("one");
    loadTasks("two");
    loadTasks("three");
})

function doLogin() {
    $(".login").hide();
}


function loadBoard() {
    var columns = loadColumns();
    var newBoard = board.clone();
    newBoard.find(".columns-area").append(columns);
    $("body .board-area").append(newBoard);
}

function loadColumns() {
    return [getColumn("one"), getColumn("two"), getColumn("three")];

    function getColumn(columnName) {
        var newColumn = column.clone();
        newColumn.find("h1").text("column " + columnName)
        newColumn.attr("id", columnName);
        return newColumn;
    }
}

function loadTasks(columnID) {
    $("#" + columnID + " .tasks-area").append([getTask("C" + columnID + "_Tone"), getTask("C" + columnID + "_Ttwo"), getTask("C" + columnID + "_Tthree")]);

    function getTask(taskID) {
        var newTask = task.clone();
        newTask.attr("id", taskID);
        newTask.find("h1").text(taskID);
        return newTask;
    }
}

