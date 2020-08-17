import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Label, Input, Form, FormGroup } from 'reactstrap'

export default class ContactForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isModalOpen: false,
        };
    }

    toggleContactForm = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    };
    
    render() {
        return (
            <>
              <Button onClick={this.toggleContactForm} color="danger" size="lg">Contact Us Today</Button>
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleContactForm} >
                <ModalHeader toggle={this.toggleContactForm}>Schedule an appointment</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup row>
                            {/* <Label for="scheduleName">Name</Label> */}
                            <Input type="name" name="name" id="scheduleName" placeholder="Your Name" />
                        </FormGroup>
                        <FormGroup row>
                            {/* <Label for="loginEmail">Email address</Label> */}
                            <Input type="email" name="email" id="scheduleEmail" placeholder="Email" />
                        </FormGroup>
                        <FormGroup row>
                            {/* <Label for="loginPhone">Phone number</Label> */}
                            <Input type="tel" name="phone" id="schedulePhone" placeholder="Phone Number" />
                        </FormGroup>
                        <FormGroup row>
                            <Label for="date">When would you like an appointment?</Label>
                            <Input type="date" name="date" id="scheduleDate" />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Keep me updated on the latest office news!
                            </Label>
                        </FormGroup>
                    </Form>
                </ModalBody>
              </Modal> 
            </>
        )
    }
}
