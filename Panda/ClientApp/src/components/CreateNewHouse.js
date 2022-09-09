import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export class CreateNewHouse extends Component {
    static displayName = CreateNewHouse.name;

    constructor(props) {
        super(props);
        this.state = {
            number: '',
            price: '',
            family: '',
            height: '',
            length: '',
            width: '',
            status: '',
            selectedFile: null,
            formResult: {
                status: 'Not uploaded'
            }
        }

        this.handleSubmite = this.handleSubmite.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onUploadChange = this.onUploadChange.bind(this);
    }

    handleSubmite(event) {
        this.sendHouseData();
    }

    onInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onUploadChange = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmite} enctype="multipart/form-data">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter number" name="number" onChange={this.onInputChange} />
                        <Form.Text className="text-muted">
                            This is the number of cabin.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price (in USD)</Form.Label>
                        <Form.Control type="number" step="0.01" placeholder="Enter price" name="price" onChange={this.onInputChange} />
                        <Form.Text className="text-muted">
                            This is the price for a daily rental of cabin.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Pet family</Form.Label>
                        <Form.Select aria-label="Select pet" name="family" onChange={this.onInputChange}>
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
                        <Form.Label className="mt-1">Height</Form.Label>
                        <Form.Control type="number" step="0.01" placeholder="Enter height" name="height" onChange={this.onInputChange} />
                        <Form.Label>Length</Form.Label>
                        <Form.Control type="number" step="0.01" placeholder="Enter length" name="length" onChange={this.onInputChange} />
                        <Form.Label className="mt-1">Width</Form.Label>
                        <Form.Control type="number" step="0.01" placeholder="Enter width" name="width" onChange={this.onInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Status</Form.Label>
                        <Form.Select aria-label="Select status" name="status" onChange={this.onInputChange}>
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
                        <Form.Control type="file" onChange={this.onUploadChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }

    async sendHouseData() {
        const formData = new FormData();
        formData.append("number", this.state.number);
        formData.append("price", this.state.price);
        formData.append("family", this.state.family);
        formData.append("height", this.state.height);
        formData.append("length", this.state.length);
        formData.append("width", this.state.width);
        formData.append("status", this.state.status);
        formData.append("file", this.state.selectedFile);

        const response = await fetch('api/admin/house/create', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        this.setState({
            uploadResult: data
        })
    }
}