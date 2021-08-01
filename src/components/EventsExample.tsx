import React, { useState,useRef } from 'react';

const EventsExample: React.FC= () => {

    const [value,setValue] = useState<string>('')
    const [isDrag,setDrag] = useState<boolean>(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
        console.log("Drag")
    }

    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setDrag(false)
        console.log("Drop")
    }

    const leaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setDrag(false)
    }

    const dragWithPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setDrag(true)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type = "text" placeholder = "Керований"/>
            <input ref = {inputRef} type = "text" placeholder = "Некерований"/>
            <button onClick={clickHandler}>BUTTON</button>
            <div 
                draggable 
                onDrag = {dragHandler}
                style = {{width:200, height:200, backgroundColor:'lightsteelblue'}} 
            >

            </div>
            <div
                onDrop = {dropHandler}
                onDragLeave = {leaveHandler} 
                onDragOver = {dragWithPreventHandler}
                style = {
                    {
                        width:200,
                        height:200, 
                        backgroundColor: isDrag?'lime':"lightsteelblue",
                        marginTop:15,
                        marginBottom:15
                    }
                } 
            >
                
            </div>
        </div>
    );
};

export default EventsExample;