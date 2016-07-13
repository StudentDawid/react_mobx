import React from 'react';
import {observer, inject} from 'mobx-react';
import {IndexLink, Link} from 'react-router';

@inject('appState') @observer
class MainPage extends React.Component {

  static propTypes = {
    appState: React.PropTypes.any,
    children: React.PropTypes.any
  }

  render() {
    return (
      <div>
        <h1>React Test</h1><br></br>
        <IndexLink to="/"> firstpage </IndexLink> <Link to="secondpage"> secondpage </Link><br></br>
        Counter - {this.props.appState.getTimer}
          {this.props.children}
      </div>
    );
  }
}

export default MainPage;
