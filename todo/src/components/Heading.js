import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'

const Heading = () => {
    return (
        <div className='mb-4'>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">To Do App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/add" className='btn btn-outline-success'>Add User</Nav.Link>
                        </Nav>                    
                    </Navbar.Collapse>
                </Navbar>
        </div>
    )
}

export default Heading
