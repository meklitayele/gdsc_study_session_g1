import { useState } from "react";


const Form = (newUpdate) =>{
   const[mainTopic,setmainTopic]=useState("");
   const[subTopic,setsubTopic]=useState("");
   const[content,setcontent]=usestate("");

   const submitHandler = (ev) => {
     ev.preventDefault();
     const note={
        mainTopic,
        subTopic,
        content,
     }
     newNote(note);
     setmainTopic("");
     setsubopic("");
     setcontent("");
   };
  
   
   return (
    <>
    <h1>Add a Note</h1>
    <form action="" className="note-form" onSubmit={submitHandler}>
      <input 
        type="text" 
        className="mainTopic"  
        placeholder="Main Topic"
        value={mainTopic} 
        onChange={(event=>{
            setmainTopic(event.target.value);
        })
        }/>

        <input type="text" 
               className="subTopic" 
               placeholder="Sub Topic" 
               value={subTopic}
               onChange={(event =>{
                  setsubTopic(event.target.value);
        })
        }/>
        <textarea 
             className="content" 
             placeholder="Content" 
             cols="30" 
             rows="10"
             value={content}
             onChange={(event) =>{
                setcontent(event.target.value);
             }}></textarea>
        <button type="submit">Add Note</button>
    </form>
    </>
   )
}
export default Form;