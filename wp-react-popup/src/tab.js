import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PropTypes from 'prop-types';

export default class WpTab extends Component {
  render() {
    return (
      <Tabs>
        <TabList>
          {this.renderTabs()}
        </TabList>
        {this.renderTabPanels()}
      </Tabs>
    );
  }

  renderTabs() {
    const { tabs } = this.props;
    return tabs
      .map(t => t.name)
      .map(name => <Tab key={name}>{name}</Tab>);
  }
  renderTabPanels() {
    const { tabs } = this.props;
    console.log(tabs
      .map(t => t.panel)
      .map(panel => panel));
    return tabs
      .map(t => t.panel)
      .map(panel => panel);
  }

}

WpTab.propTypes = {
 tabs: PropTypes.array.isRequired
};
