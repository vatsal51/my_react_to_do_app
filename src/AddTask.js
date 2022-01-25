import React, { useState } from 'react';

const AddTask = ({onAdd}) => {
const onSubmit = (e) => {
    e.preventDefault()
    if(!text){
        alert("Please add task")
        return
    }
    if(!day){
        alert("Please add Day & Time")
        return
    }

    onAdd({text, day, reminder})
    setText("")
    setDay("")
    setReminder(false)
}

    const [text,setText] = useState('')
    const [day,setDay] = useState('')
    const [reminder,setReminder] = useState(false)
    return(
 <form action="" className='add-form' onSubmit={onSubmit}>
     <div className="form-control">
         <label htmlFor="">Tasks</label>
         <input type="text" placeholder='add text' value={text} onChange={(e)=>setText(e.target.value)}/>
     </div>
     <div className="form-control">
         <label htmlFor="">Day & Time</label>
         <input type="text" placeholder='Day & Time' value={day} onChange={(e)=>setDay(e.target.value)} />
     </div>
     <div className="form-control form-control-check">
         <label htmlFor="">Set Reminder</label>
         <input type="checkbox" checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
     </div>
     <input type="submit" className='btn btn-block' value="Save Task" />
 </form>
    )
};

export default AddTask;
