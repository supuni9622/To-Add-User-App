import React, {useContext} from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import {GlobalContext} from '../context/GlobalState'

const AddUser = () => {
    const {addUser} = useContext(GlobalContext)
    const history = useHistory()

    const onSubmit = () => {
        const newUser = {
            id: 4,
            name: 'Shenali'
        }
        history.push('/')
        addUser(newUser)
    }

    return (
        <div className="container">
            <h1>Add User</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
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
