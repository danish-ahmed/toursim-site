import React, { Component } from "react";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const persons = [
  { value: 0, name: "Daily" },
  { value: 1, name: "Weekends" },
  { value: 2, name: "Monday" },
  { value: 3, name: "Tuesday"  },
  { value: 4, name: "Wednesday"  },
  { value: 5, name: "Thursday"  },
  { value: 6, name: "Friday"  },
  { value: 7, name: "Saturday"  },
  { value: 8, name: "Sunday"  },
];

/**
 * The rendering of selected items can be customized by providing a `selectionRenderer`.
 */
export default class Selection extends Component {
  state = {
    values: []
  };

  handleChange = (event, index, values) => {
    this.setState({ values });
    this.props.handleSelectionChange(event, index, values);
  };

  selectionRenderer = values => {
    switch (values.length) {
      case 0:
        return "";
      case 1:
        return persons[values[0]].name;
      default:
        return `${values.length} names selected`;
    }
  };

  menuItems(persons) {
    return persons.map(person => (
      <MenuItem
        key={person.value}
        insetChildren={true}
        checked={this.state.values.indexOf(person.value) > -1}
        value={person.value}
        primaryText={person.name}
      />
    ));
  }

  render() {
    return (
      <SelectField
        multiple={true}
        hintText="Select Availability"
        value={this.state.values}
        onChange={this.handleChange}
        selectionRenderer={this.selectionRenderer}
      >
        {this.menuItems(persons)}
      </SelectField>
    );
  }
}
