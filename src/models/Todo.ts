import { prop, Ref } from '@typegoose/typegoose';
import { User } from './User';
class Todo{
    @prop({required:true, unique:true})
    public title?:string;
    @prop()
    public description?:string;
    @prop({ref:()=>User})
    public user?:Ref<User>;
}

export{Todo};