import React, { Component } from 'react';
import uuidV4 from 'uuid/v4'

const Tab = ({ label, action, isActive }) =>
  <button className={`tab ${isActive && 'active'}`} onClick={action}>
    {label}
  </button>

class TabPannel extends Component {
  componentWillMount() {
    this.setState({ pannelActive: 0 })
  }
  render() {
    const { data } = this.props

    return <div>
      <nav className="tab-pannel-nav u-flex">
        {data.map((item, index) => <div className="u-flexGrow1" key={uuidV4()}>
          <Tab
            label={item.tab}
            action={() => this.setState({ pannelActive: index })}
            isActive={index === this.state.pannelActive}
          />
        </div>)}
      </nav>
      <div className="tab-pannel-pannel">
        {data[this.state.pannelActive].pannel}
      </div>
    </div>
  }
}

export default TabPannel;
