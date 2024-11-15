/*Úkol č. 1 */
let first = document.getElementById('first');
first.addEventListener('click',function()
       {alert("Vyskočil mi alert")}
)
/*Úkol č. 2*/
const second = document.getElementById('second')
second.addEventListener('click',function(){
       second.textContent = "Změna textu";}   
)
/*Úkol č.  3*/
function changeText() {
      document.getElementById("text").innerHTML = "Text byl úspěšně změněn!";
}
/*Úkol č. 4*/
function writeText() {
    document.getElementById("output").innerHTML = "Text byl úspěšně zobrazen!";
}
/*Úkol č. 5*/
function hellouser(){
       let user = document.getElementById('user').value;
       alert('Vítám tě na webové stránce' + user);
}
/*Úkol č. 8*/
document.getElementById('time').addEventListener('click', function() {
       const currentTime = new Date().toLocaleTimeString();
       document.getElementById('finaltime').innerText = currentTime;
   });
/*Úkol č. 9*/
document.getElementById('date').addEventListener('click', function() {
       const currentDate = new Date().toLocaleDateString();
       document.getElementById('finaldate').innerText = currentDate;
   });  
/*Úkol č. 10*/
function pricistTri() {
let userInput = document.getElementById('userInput').value;
let vysledek = Number(userInput) + 3;
document.getElementById('result').innerText = "Výsledek: " + vysledek;
  }
/*Úkol č. 11*/
function addNumbers() {
const num1 = parseFloat(document.getElementById('num1').value);
const num2 = parseFloat(document.getElementById('num2').value);
if (!isNaN(num1) && !isNaN(num2)) {
const sum = num1 + num2;
document.getElementById('result').textContent = "Výsledek: " + sum;
     } else {
 document.getElementById('result').textContent = "Prosím, zadejte platná čísla.";
            }
        }
/*Úkol č. 13*/
/*addTask - Táto funkce přidává nový úkol  do seznamu*/
function addTask() {
    const taskText = document.getElementById('taskInput').value;
    if (taskText === "") return; /*Pokud je pole prázdné, nic se nestane*/

    const taskList = document.getElementById('taskList');

    /*Vytvoření nového úkolu*/
    const li = document.createElement('li');
    li.classList.add('task');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => toggleCompletion(li)); /*toggleCompletion - Táto funkce označí úkol jako splněný*/

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const datetimeInput = document.createElement('input');
    datetimeInput.type = 'datetime-local';
    datetimeInput.addEventListener('change', (event) => setCompletionDate(event, li));

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(datetimeInput);
    taskList.appendChild(li);

    /*Tento kód vyprázdní vstupní pole po přidání nového úkolu*/
    document.getElementById('taskInput').value = '';
}

/*Funkce pro zaškrtnutí hotového úkolu*/
function toggleCompletion(taskElement) {
    taskElement.classList.toggle('completed');
}

/*Funkce pro nastavení data a času splnění*/
function setCompletionDate(event, taskElement) { /*setCompletionDate - Umožňuje uživateli zadat datum a čas*/
    const date = event.target.value;
    const dateText = document.createElement('span');
    dateText.textContent = `Splněno: ${date}`;

    /*Táto funkce data odstraní*/
    const existingDateText = taskElement.querySelector('.completed-date');
    if (existingDateText) {
        existingDateText.remove();
    }

    dateText.classList.add('completed-date');
    taskElement.appendChild(dateText);
}
