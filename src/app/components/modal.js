import { useState } from "react";

export default function Modal(){

    let component
    switch(modal){
        case 'addTask':
            component = <addTaskForm/>
            break;
        case 'updateTask':
            component = <updateTaskForm/>
            break;
        default:
            return null
    }

    return(
        <div>
            <h1>Hello</h1>
        </div>
    )
}