import React, { useState } from "react";

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser);

    const handleInputChange= (event) =>{
        const{name, value} = event.target

        setUser({...user, [name]: value})
    }
    return(
        <form
        onSubmit={(event) => {
          event.preventDefault()
  
          props.updateUser(user.id, user)
        }}
      >
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleInputChange}
        />
        <label> Username: </label>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleInputChange}
        />
        <label> Course: </label>
        <input
          type="text"
          name="course"
          value={user.course}
          onChange={handleInputChange}
        />
        <button>Update Auser</button>
        <button onClick={() => props.setUpdate(false)} >Cancel</button>

      </form>
    )
}

export default EditUserForm