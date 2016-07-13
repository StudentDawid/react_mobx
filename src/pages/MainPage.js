import React from 'react';
import {observer} from 'mobx-react';

@observer
class MainPage extends React.Component {

  static propTypes = {
    appState: React.PropTypes.any
  }

  render() {
    return (
      <div>
        <h1>React Test</h1><br></br>
        Counter = {this.props.appState.getTimer}
      </div>
    );
  }
}

export default MainPage;
