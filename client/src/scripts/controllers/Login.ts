import { Views } from '../services/Views';

class LoginController{

    execute(){
        return ()=>{
            this.renderView();
            this.initializeView();
        };
    }
    renderView(){
        // eslint-disable-next-line no-console
        console.log('render');
        Views.showView('login');
        
    }
    initializeView(){
        // eslint-disable-next-line no-console
        console.log('initialize');
    }
}
export {LoginController};