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
          done: true
        },
        {
          activity:'Stirare il bucato',
          done: false
        }
      ],
      newTask : '',
      done: false,
      myClassDone: 'done-task',
      myErrorMsg:''
    }
  },
  methods:{
    addNewTask(){
      this.myErrorMsg =''
      if(this.newTask.trim().length <5) {
        this.myErrorMsg = 'Attenzione! L\'attività deve contenere almeno 5 caratteri.'
        this.newTask ='';
        return;}

      this.myErrorMsg =''
      const newTaskObj = {
          activity: this.newTask,
          done: false
           }
      this.tasks.unshift(newTaskObj);
      this.newTask='';
    },
    doneTask(index){
      this.tasks[index].done =!this.tasks[index].done;
    },
    removeTask(index){
      if(!this.tasks[index].done){
        this.myErrorMsg = 'Attenzione! Devi completare un\'attività prima di cancellarla.'
        return;}
      if(this.tasks.find( element => element = this.tasks[index].activity)){
        this.myErrorMsg ='';
        this.tasks.splice(index, 1);
      }
    }

  }
}).mount('#app')