import React from 'react'
import {Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const AddUser = () => {
    return (
        <div className="container">
            <h1>Add User</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
  
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Link to="/" className="btn btn-danger ml-2"> Cancel</Link>
            </Form>
        </div>
    )
}

export default AddUser
