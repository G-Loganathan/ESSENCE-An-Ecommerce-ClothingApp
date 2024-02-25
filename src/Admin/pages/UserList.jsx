import React from 'react'
import "../css/UserList.css"
import axios from 'axios'
import API from '../../API/api.service';

const UserList = () => {

    const [userList, setUsersList] = React.useState([0]);
    
    React.useEffect(() => {
        // axios.get('http://localhost:3001/users')
        API.get('users')
        .then(res => {
            console.log(res.data)
            setUsersList(res.data);
        })
        .catch(err => {
            console.error('Error fetching data:', err);
        }); 
    },[])

    const onDelete = (id) => {
        axios.delete("http://localhost:3001/users/"+id)
        .then(data => console.log(data.data))
    }




  return (
    <div className="userlist__container">

        <div className="userlist__content">

            <div className="userlist__heading">
                <p>Admin - User List</p>
            </div>

            <table className="userlist__table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((e, i) => (
                        <tr key={i}>
                            <td>{i+1}</td>
                            <td>{[e.firstname,e.lastname].join(" ")}</td>
                            <td>{e.email}</td>
                            <td><button onClick={() => onDelete(e._id)} className='deactivate-btn'>Deactivate</button></td>
                        </tr>
                    ))}          
                </tbody>
            </table>

        </div>

    </div>
  )
}

export default UserList