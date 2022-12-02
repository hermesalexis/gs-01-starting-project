// Para agregar un nuevo elemento a la lista.
/*
1. Acceder al input para poder leer los datos.
2. Acceder al botón para escuchar el evento click
3. Acceder al elemento que carga la lista de items para agregarlos.
*/
/*
const buttonElement = document.querySelector('button'); // seleciona el botón por medio del objeto dom.
const inputElement = document.querySelector('input');
const ListElement = document.querySelector('ul'); */
/*
const addGoal = () => {
  const enteredValue = inputElement.value; // se obtiene el valor que se ingresa al input
  const ListItemElement = document.createElement('li'); // se crea un elemento tipo li
  ListItemElement.textContent = enteredValue; // se agrega el texto al elemento li.
  ListElement.appendChild(ListItemElement); // se agrega al elemento padre de la lista un hijo.
  inputElement.value = '';
}

buttonElement.addEventListener('click', addGoal) // Se agrega al botón el evento click, con la función que lo maneja.

inputElement.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addGoal();
  }
});
 */
// Objeto de Vue. Se define la data que va a utilizar la applicación, en este caso los goals que se van agregando
// y luego los valores que va ingresando el usuario
Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: { // el atributo methods me permite definir métodos que se pueden utilizar en el html, tambien puedo acceder a los atributos de data con this
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    },
    removeGoal() {
      this.goals.pop();
    }
  }
}).mount('#app');