import React, { Component } from "react";
import Selection from "./Selection";
import TimePicker from "material-ui/TimePicker";
import {Checkbox} from "material-ui";
import Select from "muicss/lib/react/select";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import Row from "muicss/lib/react/row";
import Option from "muicss/lib/react/option";
import Col from "muicss/lib/react/col";
import Panel from "muicss/lib/react/panel";
import validator from "validator";
import InlineError from "../messages/InlineError";

export default class AddActivityFrom2 extends Component {
   
  state = {
    data: {
      title: "",
      overview: "",
      description: ""
    },
    errors: {},
    loading: false
  };
  handleSelectionChange = (event, index, values) => {
    this.setState({ availability: values });
    console.log(this.state.availability);
  };
  render() {
    return (
      <Row>
        <Col md="12">
          <Panel>
            <Row>
              <Col md="6">
                <Selection handleSelectionChange={this.handleSelectionChange} />
              </Col>
              <Col md="6">
                <Row>
                  <Col xs="6">
                    <Input
                      className={this.state.errors.duration ? "error" : ""}
                      floatingLabel={true}
                      onChange={this.handleChange}
                      name="duration"
                      type="number"
                      label="Enter Duration"
                    />
                  </Col>
                  <Col xs="6">
                    <Select name="durationUnit" value={this.state.value}>
                      <Option value="hours" label="hours" />
                      <Option value="days" label="days" />
                    </Select>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md="5">
                <Input
                  className={this.state.errors.departurePoint ? "error" : ""}
                  floatingLabel={true}
                  onChange={this.handleChange}
                  name="departurePoint"
                  type="text"
                  label="Enter Departure Point"
                />
              </Col>
              <Col md="5">
                <Input
                  className={this.state.errors.reportingPoint ? "error" : ""}
                  floatingLabel={true}
                  onChange={this.handleChange}
                  name="reportingPoint"
                  type="text"
                  label="Enter Reporting Point"
                />
              </Col>
              <Col md="2">
                <Input
                  className={this.state.errors.tourLanguage ? "error" : ""}
                  floatingLabel={true}
                  onChange={this.handleChange}
                  name="tourLanguage"
                  type="text"
                  label="Enter Tour Language"
                />
              </Col>
            </Row>
            <Row>
              <Col md="4">
                <TimePicker
                  hintText="Starting Time"
                  format="ampm"
                  value={this.state.value12}
                  onChange={this.handleChangeTimePicker12}
                />
              </Col>
              <Col md="4">
                <Checkbox label="Pick and Drop" />
              </Col>
              <Col md="4">
                <Checkbox label="Instant Confirmation" />
              </Col>
            </Row>
          </Panel>
        </Col>
      </Row>
    );
  }
}
