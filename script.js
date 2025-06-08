let students = {};

function createRecord() {
  const name = document.getElementById("name").value.trim();
  const grade = document.getElementById("grade").value.trim();
  if (name && grade) {
    students[name] = grade;
    alert("Record created!");
  }
}

function readRecords() {
  document.getElementById("output").textContent = JSON.stringify(students, null, 2);
}

function updateRecord() {
  const name = document.getElementById("name").value.trim();
  const grade = document.getElementById("grade").value.trim();
  if (students[name]) {
    students[name] = grade;
    alert("Record updated!");
  } else {
    alert("Student not found!");
  }
}

function deleteRecord() {
  const name = document.getElementById("name").value.trim();
  if (students[name]) {
    delete students[name];
    alert("Record deleted!");
  } else {
    alert("Student not found!");
  }
}
