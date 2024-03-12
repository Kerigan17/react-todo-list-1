import React, {useState} from "react";

function ListView(props) {
    const [tasks, setTasks] = useState([
        'изучить реакт',
        'прочесть книгу',
        'приготовить ужин'
    ]);
    const [tasksDone, setTasksDone] = useState([]);
    const [task, setTask] = useState('');

    const textInput = React.createRef();

    function addItem() {
        if (task !== '') {
            setTasks([task, ...tasks]);
            textInput.current.value = '';
            setTask('');
        }
    }
    function tapKey(e) {
        if (e.key === 'Enter') {
            addItem();
        }
    }

    function deleteItem(i) {
        setTasks(tasks.filter((el, index) => (i !== index)));
    }
    function taskComplete(task, index) {
        setTasksDone([task, ...tasksDone]);
        deleteItem(index);
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
                    tasks.map((el, index) =>
                        <li key={index}>
                            {el}
                            <div className={'task__buttons'}>
                                <div className={'done'} onClick={() => taskComplete(el, index)}>
                                    <svg width="30px" height="30px" viewBox="0 0 48 48" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <rect width="48" height="48" fill="white" fillOpacity="0.01"/>
                                        <path className={'done-right'} d="M14 24L15.25 25.25M44 14L24 34L22.75 32.75"
                                              stroke="#000000"
                                              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path className={'done-left'} d="M4 24L14 34L34 14" stroke="#000000"
                                              strokeWidth="2"
                                              strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <div className={'bucket'} onClick={() => {
                                    deleteItem(index)
                                }}>
                                    <svg width="24px" height="30px" viewBox="0 0 24 20" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path className={'top-bucket'}
                                              d="M1.5 3.75C1.08579 3.75 0.75 4.08579 0.75 4.5C0.75 4.91421 1.08579 5.25 1.5 5.25V3.75ZM22.5 5.25C22.9142 5.25 23.25 4.91421 23.25 4.5C23.25 4.08579 22.9142 3.75 22.5 3.75V5.25ZM1.5 5.25H22.5V3.75H1.5V5.25Z"
                                              fill="#000000"/>
                                        <path className={'top-bucket'}
                                              d="M9.75 1.5V0.75V1.5ZM8.25 3H7.5H8.25ZM7.5 4.5C7.5 4.91421 7.83579 5.25 8.25 5.25C8.66421 5.25 9 4.91421 9 4.5H7.5ZM15 4.5C15 4.91421 15.3358 5.25 15.75 5.25C16.1642 5.25 16.5 4.91421 16.5 4.5H15ZM15.75 3H16.5H15.75ZM14.25 0.75H9.75V2.25H14.25V0.75ZM9.75 0.75C9.15326 0.75 8.58097 0.987053 8.15901 1.40901L9.21967 2.46967C9.36032 2.32902 9.55109 2.25 9.75 2.25V0.75ZM8.15901 1.40901C7.73705 1.83097 7.5 2.40326 7.5 3H9C9 2.80109 9.07902 2.61032 9.21967 2.46967L8.15901 1.40901ZM7.5 3V4.5H9V3H7.5ZM16.5 4.5V3H15V4.5H16.5ZM16.5 3C16.5 2.40326 16.2629 1.83097 15.841 1.40901L14.7803 2.46967C14.921 2.61032 15 2.80109 15 3H16.5ZM15.841 1.40901C15.419 0.987053 14.8467 0.75 14.25 0.75V2.25C14.4489 2.25 14.6397 2.32902 14.7803 2.46967L15.841 1.40901Z"
                                              fill="#000000"/>
                                        <path
                                            d="M9 17.25C9 17.6642 9.33579 18 9.75 18C10.1642 18 10.5 17.6642 10.5 17.25H9ZM10.5 9.75C10.5 9.33579 10.1642 9 9.75 9C9.33579 9 9 9.33579 9 9.75H10.5ZM10.5 17.25V9.75H9V17.25H10.5Z"
                                            fill="#000000"/>
                                        <path
                                            d="M13.5 17.25C13.5 17.6642 13.8358 18 14.25 18C14.6642 18 15 17.6642 15 17.25H13.5ZM15 9.75C15 9.33579 14.6642 9 14.25 9C13.8358 9 13.5 9.33579 13.5 9.75H15ZM15 17.25V9.75H13.5V17.25H15Z"
                                            fill="#000000"/>
                                        <path
                                            d="M18.865 21.124L18.1176 21.0617L18.1176 21.062L18.865 21.124ZM17.37 22.5L17.3701 21.75H17.37V22.5ZM6.631 22.5V21.75H6.63093L6.631 22.5ZM5.136 21.124L5.88343 21.062L5.88341 21.0617L5.136 21.124ZM4.49741 4.43769C4.46299 4.0249 4.10047 3.71818 3.68769 3.75259C3.2749 3.78701 2.96818 4.14953 3.00259 4.56231L4.49741 4.43769ZM20.9974 4.56227C21.0318 4.14949 20.7251 3.78698 20.3123 3.75259C19.8995 3.7182 19.537 4.02495 19.5026 4.43773L20.9974 4.56227ZM18.1176 21.062C18.102 21.2495 18.0165 21.4244 17.878 21.5518L18.8939 22.6555C19.3093 22.2732 19.5658 21.7486 19.6124 21.186L18.1176 21.062ZM17.878 21.5518C17.7396 21.6793 17.5583 21.75 17.3701 21.75L17.3699 23.25C17.9345 23.25 18.4785 23.0379 18.8939 22.6555L17.878 21.5518ZM17.37 21.75H6.631V23.25H17.37V21.75ZM6.63093 21.75C6.44274 21.75 6.26142 21.6793 6.12295 21.5518L5.10713 22.6555C5.52253 23.0379 6.06649 23.25 6.63107 23.25L6.63093 21.75ZM6.12295 21.5518C5.98449 21.4244 5.89899 21.2495 5.88343 21.062L4.38857 21.186C4.43524 21.7486 4.69172 22.2732 5.10713 22.6555L6.12295 21.5518ZM5.88341 21.0617L4.49741 4.43769L3.00259 4.56231L4.38859 21.1863L5.88341 21.0617ZM19.5026 4.43773L18.1176 21.0617L19.6124 21.1863L20.9974 4.56227L19.5026 4.43773Z"
                                            fill="#000000"/>
                                    </svg>
                                </div>
                            </div>

                        </li>
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