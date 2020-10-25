import React from 'react'
import { Button } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const UserList = () => {
    return (
        <div className="container">
            <h1>User List</h1>
            <ListGroup className='d-flex'>
                <ListGroup.Item variant="info" className="d-flex justify-content-between">
                    User 1
                    <div>
                        <Link className ="btn btn-primary mr-1" to="/edit/1"> Edit </Link>
                        <Button variant='danger'>Delete</Button>
                    </div>
                </ListGroup.Item>  
            </ListGroup>
        </div>
    )
}

export default UserList
