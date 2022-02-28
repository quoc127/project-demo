import React, {useState} from "react";
import UserTable from "./components/userTable";
import AddUserForm from "./components/addUserForm";
import EditUserForm from "./components/editUserForm";
import './App.css';

function App() {
  
  const usersData = [
    {id: 1, name: "Quốc", username:"nguyenquoc"},
    {id: 2, name: "Quốc1", username:"nguyenquoc1"},
    {id:3, name: "Quốc2", username:"nguyenquoc2"},
  ]

  const [users, setUsers] = useState(usersData);

// Add User
  const addUser = (user) =>{
    user.id = users.length + 1;
    setUsers([...users, user]);
  }

// Delete User
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !==  id))
  }

//Update User
  const [update, setUpdate] = useState(false);
  const initialFormState={id: null, name:"", username: ""};
  const[currentUser, setCurrentUser] = useState(initialFormState);
  
  const editRow= (user) => {
    setUpdate(true)
    setCurrentUser({id: user.id, name: user.name, username: user.username});
  }

  const updateUser = (id, updateUser) => {
    setUpdate(false)
    setUsers(users.map((user) => (user.id === id ? updateUser:user)))
  }

  return (
    <div className="container">
        <h1>CRUD app with Hook</h1>
        <div className="flex-row">
          <div className="flex-large">
            {update ? (
              <div>
                <h2>Edit User</h2>
                <EditUserForm
                  setUpdate={setUpdate}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ):(
              <div>
                <h2>Add User</h2>
                <AddUserForm addUser={addUser} />
              </div>
            )}
          </div>
          
          <div className="flex-large">
            <h2>View User</h2>
            <UserTable users={users}  deleteUser={deleteUser} editRow={editRow}/>
          </div>
        </div>
    </div>
  );
}

export default App;
