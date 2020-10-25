import React, {useContext, useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import {GlobalContext} from '../context/GlobalState'
import {v4 as uuid} from 'uuid'

const AddUser = () => {
    const {addUser} = useContext(GlobalContext)
    const history = useHistory()
    const [name, setName] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        const newUser = {
            id: uuid(),
            name
        }
        addUser(newUser)
        history.push('/')
       
    }

    const onChange =(e) => {
        setName(e.target.value)
    }

    return (
        <div className="container">
            <h1>Add User</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" value={name} onChange={onChange} />
                </Form.Group>
  
                <Button variant="primary" type="submit" onClick>
                    Submit
                </Button>
                <Link to="/" className="btn btn-danger ml-2"> Cancel</Link>
            </Form>
        </div>
    )
}

export default AddUser
