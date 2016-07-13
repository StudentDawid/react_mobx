import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {IndexLink, Link} from 'react-router';

@inject('appState') @observer
class MainPage extends Component {

  static propTypes = {
    appState: React.PropTypes.any,
    children: React.PropTypes.any
  }

  render() {
    const {appState, children} = this.props;

    return (
      <div>
        <h1>React Test</h1><br></br>
        <IndexLink to="/"> firstpage </IndexLink> <Link to="secondpage"> secondpage </Link><br></br>
        Counter - {appState.getTimer}
        {children}
      </div>
    );
  }
}

export default MainPage;
