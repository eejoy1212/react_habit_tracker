import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
   const formRef=React.createRef();
   const inputRef=React.createRef();
   const onSubmit=event=>{
    event.preventDefault();
    const name=inputRef.current.value;
    name&&props.onAdd(name);
    // inputRef.current.value='';
    formRef.current.reset();
    }
    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
         <input 
         ref={inputRef}
         type="text" 
         className='add-input' 
         placeholder='습관을 입력하세요'
         ></input>
         <button className="add-btn">추가</button>
        </form>
     );
});

export default HabitAddForm;


