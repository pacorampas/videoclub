import React, { Component } from 'react';
import uuidV4 from 'uuid/v4'

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: 0 };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    this.setState({ selected: event.target.value });
    this.props.onChange(this.props.options[event.target.value].id)
  }

  render() {
    const { options } = this.props

    return <select onChange={(e) => this.handleOnChange(e)} value={options[this.state.selected].name}>
      {options.map((opt, index) => <option key={uuidV4()} value={index}>
        {opt.name}
      </option>)}
    </select>
  }
}

export default Select;
