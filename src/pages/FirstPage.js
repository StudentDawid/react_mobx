import React from 'react';
import {observer, inject} from 'mobx-react';

@inject('appState') @observer
class FirstPage extends React.Component {
  static propTypes = {
    appState: React.PropTypes.any
  }

  toggleAdd = () => {
    this.props.appState.addTime(5);
  }

  render() {
    return (
      <div>
        first page
        <button onClick={this.toggleAdd}>ADD 5</button>
      </div>
    );
  }
}

export default FirstPage;
