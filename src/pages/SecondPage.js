import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';

@inject('appState') @observer
class SecondPage extends Component {
  static propTypes = {
    appState: React.PropTypes.any
  }

  toggleRemove = () => {
    this.props.appState.addTime(-5);
  }

  render() {
    return (
      <div>
        Second Page
        <button onClick={this.toggleRemove}>REMOVE 5</button>
      </div>
    );
  }
}

export default SecondPage;
