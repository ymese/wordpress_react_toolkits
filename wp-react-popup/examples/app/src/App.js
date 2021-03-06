import React, { Component } from 'react';
import { Tab, Popup, WPReTable } from 'wp-react-toolkits';
import logo from './logo.svg';
import './App.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faWindowClose from '@fortawesome/fontawesome-free-solid/faWindowClose'
import Immutable from "immutable";
import {ColumnConfig} from "wp-react-toolkits";
import 'wp-react-toolkits/style/table.css';

class App extends Component {

  constructor(props) {
    super(props);

    const data = Immutable.List([{
      name: 'Thinh',
      age: 18
    }, {
      name: 'Rex',
      age: 18
    }, {
      name: 'Tai',
      age: 18
    }, {
      name: 'Lam',
      age: 18
    }]);
    const configs = {
      columnsConfig: [
        new ColumnConfig('Name', 'name', false, 300),
        new ColumnConfig('Age', 'age', false, 400)
      ]
    };

    this.handleChangeTab = this.handleChangeTab.bind(this);

    this.tabs = [{
      name: 'This is Table',
      panel: (
        <div>
          <WPReTable list={data} config={configs} />
        </div>
      )
    }, {
      name: 'This is tab2',
      panel: (
        <div>
          <input type="button" value="Change tab1" onClick={this.handleChangeTab} />
          <p>Hello tab2</p>
        </div>
      )
    }];

    this.insideElement = (
      <div>
        <Tab tabs={this.tabs} onRef={(ref) => { this.child = ref; }} />
      </div>
    );
    this.handleShowPopup = this.handleShowPopup.bind(this);
    this.handleClosePopup = this.handleClosePopup.bind(this);

    this.closeBtn =
      (<span title="Close pop-up"
             className="close_btn"
             onClick={this.handleClosePopup}>
        <FontAwesomeIcon icon={faWindowClose} />
      </span>);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to WordPress React Tool Kits</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr/>
        <div>
          <p>This is a popup</p>
          <div><input type={'button'} onClick={this.handleShowPopup} value={"Show popup"}/></div>
          <Popup
            label={'This is popup'}
            closeTitle={'Close popup'}
            insideElement={this.insideElement}
            closeBtn={this.closeBtn}
            onRef={(ref) => { this.child = ref; }} />
        </div>
      </div>
    );
  }

  handleShowPopup() {
    this.child.handleOpenPopup();
  }

  handleClosePopup() {
    this.child.handleClosePopup();
  }

  handleChangeTab() {
    this.child.handleSelect(0);
  }
}

export default App;
