
import React from "react";


 export const User = ()=>{

 const deleteUser = ()=>{
     alert ('user have been deleted')
 }
 const saveUser = ()=>{
     alert ('user have been deleted')
 }

 const onNameChanged = ()=>{
     console.log('name changed')
 }

 const onFocusLostHandler = ()=>{
     console.log('focus lost')
 }




    return(
        <div><textarea onChange={onNameChanged} onBlur={onFocusLostHandler}></textarea>
            <button onClick={deleteUser}>delete</button>
             <button onClick={saveUser}>save</button>
        </div>
    )
 }