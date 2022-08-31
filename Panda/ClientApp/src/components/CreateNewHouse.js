import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class CreateNewHouse extends Component {
    static displayName = CreateNewHouse.name;

    render() {
        return (
            <div>
               {/* <form>
                    <label>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submite" />
                </form>*/}
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter number" />
                        <Form.Text className="text-muted">
                            This is the number of cabin.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price (in USD)</Form.Label>
                        <Form.Control type="number" placeholder="Enter price" />
                        <Form.Text className="text-muted">
                            This is the price for a daily rental of cabin.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Pet family</Form.Label>
                        <Form.Select aria-label="Select pet">
                            <option>Open this menu to select pet family</option>
                            <option value="0">Dog</option>
                            <option value="1">Cat</option>
                            <option value="2">Hamster</option>
                            <option value="3">Parrot</option>
                            <option value="4">Lizard</option>
                            <option value="5">Spider</option>
                        </Form.Select>
                        <Form.Text className="text-muted">
                            This is the select to select pet family.
                        </Form.Text>
                    </Form.Group>
                    <Form.Label>Size (in meters)</Form.Label>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Length</Form.Label>
                        <Form.Control type="number" placeholder="Enter length" />
                        <Form.Label className="mt-1">Width</Form.Label>
                        <Form.Control type="number" placeholder="Enter width" />
                        <Form.Label className="mt-1">Height</Form.Label>
                        <Form.Control type="number" placeholder="Enter height" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Status</Form.Label>
                        <Form.Select aria-label="Select status">
                            <option>Open this menu to select status</option>
                            <option value="0">Free</option>
                            <option value="1">Ocupied</option>
                        </Form.Select>
                        <Form.Text className="text-muted">
                            This is the select to select status.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Picture of cabin</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}