import React, {useEffect, useState} from "react";
import Task from './Task.jsx';
import {getInfo, postInfo, delInfo, updateInfo} from '../services/DatabaseInfo'
import AddTaskBar from "./AddTaskBar";

function ListView(props) {
    const [tasks, setTasks] = useState([]);
    const [tasksDone, setTasksDone] = useState([]);

    useEffect(() => {
        // getInfo('tasks').then(data => setTasks(data.reverse()));
        updateTasks();
    }, []);

    function updateTasks() {
        getInfo('tasks').then(data => {
            setTasks(data.filter(item => item.completed === 0).reverse())
            setTasksDone(data.filter(item => item.completed === 1).reverse())
        })
    }

    function addItem(task) {
        let trimText = task.trim();

        if (trimText !== '') {
            postInfo('addTask', trimText).then(updateTasks());
        }
    }

    const deleteItem = (data) => {
        delInfo('deleteTask', data.id)
            .then(() => updateTasks());

    }
    function taskComplete(task) {
        updateInfo('updateTask', task.id)
            .then(() => updateTasks());
            // .then(getInfo('tasks').then(data => setTasks(data.reverse())))
    }

    return (
        <div className={'container'}>
            <AddTaskBar onAdd={addItem}/>

            <h2>Currents</h2>
            <ul className={'tasks'}>
                {
                    tasks&&tasks.map((el, index) =>
                        Task(el, index, deleteItem, taskComplete)
                    )
                }
            </ul>

            <hr/>

            <h2>Completed</h2>
            <ul className={'tasks tasks-done'}>
                {
                    tasksDone&&tasksDone.map((el, index) =>
                            Task(el, index, deleteItem, taskComplete)
                    )
                }
            </ul>
        </div>
    )
}

export default ListView;