import React, {useContext, useState, useEffect} from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import {GlobalContext} from '../context/GlobalState'

const EditUser = (props) => {
    const {users, editUser} = useContext(GlobalContext)
    const history = useHistory()
    const [selectedUser, setSelectedUser] = useState({
        id: '',
        name: ''
    })

    const currentUserId = props.match.params.id

    const onSubmit = () => {
       
        editUser(selectedUser)
        history.push('/')
        
    }

    const onChange =(e) => {
        setSelectedUser({...selectedUser, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        const userId = currentUserId;
        console.log(typeof userId)
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
        console.log(selectedUser)
    }, [currentUserId, users])

    return (
        <div className="container">
            <h1>Edit User</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter your name" onChange={onChange} value={selectedUser.name}/>
                </Form.Group>
  
                <Button variant="primary" type="submit">
                    Save Changes
                </Button>
                <Link to="/" className="btn btn-danger ml-2"> Cancel</Link>
            </Form>
        </div>
    )
}

export default EditUser
