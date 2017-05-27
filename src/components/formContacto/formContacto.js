import React, { Component } from 'react';
import { Form, FormGroup,FormControl, Button } from 'react-bootstrap'
import './formContacto.css';


class formContacto extends Component {
    render() {
        return (
            <Form className={"col-md-8 formContacto"}>
                <div className="completeName-container">
                    <FormGroup className="col-md-12" controlId="formInlineName">
                        {' '}
                        <FormControl bsSize="large" type="text" placeholder="Nombre" />
                    </FormGroup>
                    {' '}
                    <FormGroup className="col-md-12" controlId="formInlineSurname">
                        {' '}
                        <FormControl bsSize="large" type="text" placeholder="Apellido" />
                    </FormGroup>
                </div>    
                <FormGroup className="col-md-12" controlId="formControlsTextarea">
                    <FormControl bsSize="large"  componentClass="textarea" placeholder="Comentario" />
                </FormGroup>
                {' '}
                <Button type="submit">
                Send invitation
                </Button>
            </Form>
        )
    }
}

export default formContacto;
