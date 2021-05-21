import { appRouter } from '../Router';
import { APIRest } from '../services/apiRest';
import { Views } from '../services/Views';

class AddTodoController{
    addTodoForm : HTMLFormElement;
    execute(){
        return ()=>{
            this.renderView();
            this.initializeView();
        };
    }
    async renderView(){
        // eslint-disable-next-line no-console
        console.log('render');
        Views.showView('add_todos'); 
    }
    async initializeView(){
     // eslint-disable-next-line no-console
     this.addTodoForm = document.getElementById('addTodoForm') as HTMLFormElement;
     this.addTodoForm.addEventListener('submit', this.addTodo.bind(this));
     // eslint-disable-next-line no-console
     console.log('initialize view');
 }
 async addTodo(e){
     e.preventDefault();
     const {description, title} = this.addTodoForm.elements;
     const apiCall = (await APIRest.createTodo({description: description.value, title: title.value}));
     if(apiCall){
        appRouter.navigate('/todos');
     };
 }
    
}
export {AddTodoController};