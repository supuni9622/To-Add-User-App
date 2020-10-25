import React, {useContext} from 'react'
import { Button } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'
import {GlobalContext} from '../context/GlobalState'

const UserList = () => {

    const {users} = useContext(GlobalContext)
    console.log(users)

    return (
        <div className="container">
            <h1>User List</h1>
            <ListGroup className='d-flex'>
                {
                    users.map(user => (
                        <ListGroup.Item variant="info" className="d-flex justify-content-between">
                                {user.name}
                             <div>
                                <Link className ="btn btn-primary mr-1" to={`/edit/${user.id}`}> Edit </Link>
                                <Button variant='danger'>Delete</Button>
                            </div>
                        </ListGroup.Item>  
                    ))
                }
            </ListGroup>
        </div>
    )
}

export default UserList
