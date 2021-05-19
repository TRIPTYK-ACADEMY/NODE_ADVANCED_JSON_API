import { APIRest } from '../services/apiRest';
import { Views } from '../services/Views';

class TodosController{
    loginForm : HTMLFormElement;
    execute(){
        return ()=>{
            this.renderView();
            this.initializeView();
        };
    }
    renderView(){
        // eslint-disable-next-line no-console
        console.log('render');
        Views.showView('todos');
    
        
    }
    initializeView(){
     console.log('initialize view')
    }
    
}
export {TodosController};