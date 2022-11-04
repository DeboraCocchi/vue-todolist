/*
1. avere un elenco di task da fare o fatti
2. stamparli in pagina
3. al click del task fare il toggle del task fatto o meno
4. al click della croce eliminare il task se fatto, altrimenti scrivere un messaggio di errore
5. dopo aver scritto il task con invio o al click del bottone aggiungere il nuovo task (come non fatto) in cima all’elenco dei task
6. verificare la lunghezza minima del nuovo task
7. se l’elenco è vuoto non mostrare la lista ma mostrare il messaggio “Non ci sono task”
BONUS
- Verificare se il task è già presente e nel caso mostrare l’errore
- ... il limite è la fantasia ;-)
*/

const {createApp} = Vue;

createApp({
  data(){
    return{
      tasks:[
        {
          activity:'Fare la spesa',
          done: false
        },
        {
          activity:'Fare la lavatrice',
          done: false
        },
        {
          activity:'Stirare il bucato',
          done: false
        }
      ],
      newTask : '',
      done: false,
      myClassDone: 'task-done',
      myErrorMsg:''
    }
  },
  methods:{
    addNewTask(){
      this.myErrorMsg =''
      const newTaskObj = {
        text: this.newTask,
        done: false
      }
      this.tasks.unshift(newTaskObj);
      this.newTask='';
    },
    doneTask(index){
      console.log(this.tasks[index].done);
      (this.tasks[index].done) ? !this.tasks[index].done : this.tasks[index].done
    }
  }
}).mount('#app')