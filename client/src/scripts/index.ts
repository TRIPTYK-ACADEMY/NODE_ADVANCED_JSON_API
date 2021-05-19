import { Application } from "./Application";
import { appRouter } from "./Router";

const init = ()=>{
    const app = new Application(appRouter);
    console.log('app initialized')
};

window.addEventListener('load',init)