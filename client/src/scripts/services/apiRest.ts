import { AppStorage } from './localStorage';

class APIRest {
    static baseURL = 'http://localhost:3000'
    static login = async (values)=>{
        const options = {
            method: 'POST',
            body:JSON.stringify(values),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        return APIRest.execute('api/v1/login', options);
    }   
    static register = async (values)=>{
        const options = {
            method: 'POST',
            body:JSON.stringify(values),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        };
        return APIRest.execute('api/v1/users', options);
    }   
    static findAllTodos= async ()=>{
        try{
        const token = AppStorage.getInstance('tpk-app').getValue('token');
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'authorization':`Bearer ${token}`
            }
        };
        return APIRest.execute('api/v1/todos', options);
    }catch(e){console.log(e);}
    }
    static createTodo = async (values)=>{
        const token = AppStorage.getInstance('tpk-app').getValue('token');
        const options = {
            method: 'POST',
            body:JSON.stringify(values),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'authorization':`Bearer ${token}`
            }
        };
        return APIRest.execute('api/v1/todos', options);
    } 
    static async execute(action, options={}){
        try{
            const rawResponse = await fetch(`${this.baseURL}/${action}`, options);
            const response = await rawResponse.json();
            return response;
        }catch(e){
            // eslint-disable-next-line no-console
            return e;
        }
   
    }
}

export{APIRest};