import { config } from 'dotenv';
import { app } from './app.bootstrap';

config({path:'variables.env'});


const init = async () =>{
    app.listen(process.env.PORT, ()=>{
        // eslint-disable-next-line no-console
        console.log(`app listening on port ${process.env.PORT}`);
    });
};


init();