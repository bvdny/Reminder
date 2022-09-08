
var numarTask = 1;
var upTasks = 0;
function adaugareTask() {
  ++upTasks;
  document.getElementById("nrOfTasks").innerHTML = upTasks;
  var task = document.getElementById("task").value;
  var eUrgent = document.querySelector('#urgent:checked') != null;
  var divClass = "card alert alert-light";
  if (eUrgent) {
    divClass = "card alert alert-danger";
  }
  document.getElementById("lista").innerHTML += `
    <div class="` + divClass + `" id="`+ numarTask + `">
      <p>Task added on: <strong>`+ getDate() +`</strong> at <strong>`+ getTime() +`</strong></p>
      <div class="card-body">
        <div class="card-body">
            <h5>` + task + `</h5>
        </div>
      </div>
      <div class="card-footer text-muted">
        <a href="#" class="btn btn-danger btn-sm" onclick="return stergereTask(` + numarTask + `);"><img src="https://img.icons8.com/ios-glyphs/25/000000/trash--v1.png"/></a>
      </div>
    </div>`;
    ++numarTask;
  return false;
}

function stergereTask(idTask) {
  --upTasks;
  document.getElementById(idTask).remove();
  document.getElementById("nrOfTasks").innerHTML = upTasks;
  return false;
}

function getDate() {
  date = new Date();
  return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}

function getTime() {
  time = new Date().toLocaleTimeString();
  return time;
}
