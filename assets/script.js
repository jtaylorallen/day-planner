
$('#currentDay').text (moment().format('MMMM Do YYYY, h:mm:ss a'));



var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };