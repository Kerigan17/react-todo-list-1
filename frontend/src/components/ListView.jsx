import React, {useEffect, useState} from "react";
import Task from './Task.jsx';
import {getInfo, postInfo, delInfo, updateInfo} from '../services/DatabaseInfo'

function ListView(props) {
    const [tasks, setTasks] = useState();
    const [tasksDone, setTasksDone] = useState([]);
    const [task, setTask] = useState('');
    const textInput = React.createRef();

    useEffect(() => {
        getInfo('tasks').then(data => setTasks(data.reverse()));
    }, []);

    function addItem() {
        let trimText = task.trim();

        if (trimText !== '') {
            postInfo('addTask', trimText);
            setTask('');
        }
        getInfo('tasks').then(data => setTasks(data.reverse()));
        textInput.current.value = '';
    }
    function tapKey(e) {
        if (e.key === 'Enter') {
            addItem();
        }
    }

    const deleteItem = (i) => {
        //setTasks(tasks.filter((el, index) => (i !== index)));
        delInfo('deleteTask', tasks[i].id)
            .then(getInfo('tasks').then(data => setTasks(data.reverse())))
    }
    function taskComplete(task) {
        updateInfo(task.id)
            .then(getInfo('tasks').then(data => setTasks(data.reverse())))
    }

    return (
        <div className={'container'}>
            <div className={'added-items'}>
                <input className={'text'} type="text" ref={textInput} onKeyDown={e => tapKey(e)}
                       onChange={el => setTask(el.target.value)}/>
                <div className={'btn btn-add'} onClick={addItem}>
                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.9944 10.0011L11.9944 13.9989" stroke="#1C1C1C" strokeWidth="0.5"
                              strokeLinecap="round"/>
                        <path d="M13.9933 12H9.99553" stroke="#1C1C1C" strokeWidth="0.5" strokeLinecap="round"/>
                        <path
                            d="M20.8448 12V6.50968C20.8448 4.48821 19.2061 2.84949 17.1846 2.84949H6.50406C4.4826 2.84949 2.84387 4.48821 2.84387 6.50968V17.4903C2.84387 19.5117 4.4826 21.1504 6.50406 21.1504H11.8444"
                            stroke="#1C1C1C" strokeWidth="0.5" strokeLinecap="round"/>
                        <path
                            d="M20.7845 15.8827L18.8314 13.8971C18.6334 13.6957 18.3122 13.6957 18.1141 13.8971L14.3578 17.716C14.249 17.8266 14.1955 17.9813 14.2122 18.1368L14.427 20.1323C14.44 20.2525 14.5333 20.3474 14.6516 20.3605L16.6143 20.5789C16.7672 20.5959 16.9194 20.5415 17.0282 20.431L20.7845 16.612C20.9826 16.4106 20.9826 16.0841 20.7845 15.8827Z"
                            stroke="#1C1C1C" strokeWidth="0.5" strokeLinecap="round"/>
                    </svg>
                </div>
            </div>

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
                    tasksDone.map((el, index) =>
                        <li key={index}>
                            {el}
                            <hr/>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default ListView;