import React, { Component } from "react";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Panel from "muicss/lib/react/panel";
import validator from "validator";
import InlineError from "../messages/InlineError";
import Textarea from "muicss/lib/react/textarea";
import TimePicker from "material-ui/TimePicker";
import Checkbox from "material-ui/Checkbox";

export default class AddActivityForm extends Component {
  state = {
    data: {
      title: "",
      overview: "",
      description: ""
    },
    errors: {},
    loading: false
  };
  handleChange = e => {
    this.setState({ errors: { ...this.state.errors, [e.target.name]: "" } });
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  handleSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props
        .onSubmit(this.state.data)
        .catch(err => this.setState({ errors: err.response.data.errors }));
    }
  };
  
  validate = data => {
    const errors = {};
    if (!data.password) errors.password = "Password is required";
    if (!validator.isEmail(data.email)) errors.email = "Invalid Email";
    return errors;
  };
  render() {
    return (
      <Row>
        <Col md="12">
          <Panel>
            {this.state.errors.global ? "hello" : ""}
            <Input
              className={this.state.errors.title ? "error" : ""}
              floatingLabel={true}
              label="Activity Title"
              type="text"
              name="title"
              onChange={this.handleChange}
            />
            <InlineError text={this.state.errors.email} />

            <Textarea
              label="Acivity Short Overview"
              floatingLabel={true}
              onChange={this.handleChange}
              name="overview"
            />
            <InlineError text={this.state.errors.overview} />

            <Textarea
              label="Acivity Description"
              floatingLabel={true}
              onChange={this.handleChange}
              name="description"
            />
            <InlineError text={this.state.errors.description} />

            <Textarea
              floatingLabel={true}
              label="Inclusions"
              onChange={this.handleChange}
              name="inclusions"
            />
            
            <Row>
              <Col md="4">
                <Checkbox label="Non Refundable" />
              </Col>
              <Col md="4">
                <Checkbox label="Printed Voucher" />
              </Col>
            </Row>
          </Panel>
        </Col>
      </Row>
    );
  }
}
