/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { Container, Header, Tabs, Tab, ScrollableTab } from 'native-base';
// import CaribeScanner from './caribe';
import Form from './form';

class Component extends React.Component {
  handleSubmit = values => {
    const { actions } = this.props;
    console.log(values);
    actions.addMo(values);
  };

  render() {
    return (
      <Container>
        <Header style={{ height: 1, backgroundColor: '#7c7bad' }} hasTabs />
        <View style={{ flex: 1 }}>
          <Tabs style={{ height: 1 }} renderTabBar={() => <ScrollableTab />}>
            <Tab
              activeTabStyle={{ backgroundColor: '#5f5e97' }}
              tabStyle={{ backgroundColor: '#7c7bad' }}
              textStyle={{ color: '#fff' }}
              heading="Main Data"
            >
              <ScrollView>
                <Form onSubmit={this.handleSubmit} />
              </ScrollView>
            </Tab>
            <Tab
              activeTabStyle={{ backgroundColor: '#5f5e97' }}
              tabStyle={{ backgroundColor: '#7c7bad' }}
              textStyle={{ color: '#fff' }}
              heading="Consumed Materials"
            >
              <ScrollView>
                <Form onSubmit={this.handleSubmit} />
              </ScrollView>
            </Tab>
            <Tab
              activeTabStyle={{ backgroundColor: '#5f5e97' }}
              tabStyle={{ backgroundColor: '#7c7bad' }}
              textStyle={{ color: '#fff' }}
              heading="Finished Materials"
            >
              <ScrollView>
                <Form onSubmit={this.handleSubmit} />
              </ScrollView>
            </Tab>
            <Tab
              activeTabStyle={{ backgroundColor: '#5f5e97' }}
              tabStyle={{ backgroundColor: '#7c7bad' }}
              textStyle={{ color: '#fff' }}
              heading="Misc."
            >
              <ScrollView>
                <Form onSubmit={this.handleSubmit} />
              </ScrollView>
            </Tab>
          </Tabs>
        </View>
      </Container>
    );
  }
}

Component.propTypes = {
  actions: PropTypes.object,
};

export default Component;
