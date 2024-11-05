"use client"

import {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { addTask } from '../Store/tasksSlice';


export default function addTask(){
    const [taskName, setTaskName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const dispatch = useDispatch()

    const handleAdd = ()=>{
        if()
    }   

    return(
        <div>

        </div>
    )
}