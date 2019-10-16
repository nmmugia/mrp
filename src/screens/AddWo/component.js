/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { FAB, DataTable } from 'react-native-paper';
import { Container, Header, Tabs, Tab } from 'native-base';
import { showMinutes } from '../../shared/utility';
import Form from './form';

class Component extends React.Component {
  state = {
    active: false,
  };

  componentWillMount() {
    const { actions, token, id } = this.props;
    actions.getWOById({ token, id });
  }

  handleSubmit = values => {
    const { actions } = this.props;
    actions.AddWO(values);
  };

  render() {
    const { data } = this.props;
    const { active } = this.state;
    let table_time_ids = null;
    if (data) {
      // eslint-disable-next-line camelcase
      const { time_ids } = data;
      table_time_ids = Object.keys(time_ids).map(i => {
        return (
          <DataTable.Row key={i}>
            <DataTable.Cell style={{ width: 100, paddingRight: 20 }}>
              {time_ids[i].date_start}
            </DataTable.Cell>
            <DataTable.Cell style={{ width: 150, paddingRight: 20 }}>
              {time_ids[i].date_end}
            </DataTable.Cell>
            <DataTable.Cell style={{ width: 100, paddingRight: 20 }}>
              {showMinutes(time_ids[i].duration)}
            </DataTable.Cell>
            <DataTable.Cell style={{ width: 150, paddingRight: 20 }}>
              {time_ids[i].responsible}
            </DataTable.Cell>
            <DataTable.Cell style={{ width: 150, paddingRight: 20 }}>
              {time_ids[i].loss_id}
            </DataTable.Cell>
          </DataTable.Row>
        );
      });
    }
    return (
      <Container>
        <Header style={{ height: 1, backgroundColor: '#7c7bad' }} hasTabs />
        <View style={{ flex: 1 }}>
          <Tabs style={{ height: 1 }} locked>
            <Tab
              activeTabStyle={{ backgroundColor: '#5f5e97' }}
              tabStyle={{ backgroundColor: '#7c7bad' }}
              textStyle={{ color: '#fff' }}
              heading="Main Data"
            >
              <ScrollView>
                <Form initialValues={data} onSubmit={this.handleSubmit} />
              </ScrollView>
            </Tab>
            <Tab
              activeTabStyle={{ backgroundColor: '#5f5e97' }}
              tabStyle={{ backgroundColor: '#7c7bad' }}
              textStyle={{ color: '#fff' }}
              heading="Time History"
            >
              <ScrollView horizontal>
                <DataTable>
                  <DataTable.Header>
                    <DataTable.Title>Start Date</DataTable.Title>
                    <DataTable.Title>End Date</DataTable.Title>
                    <DataTable.Title>Duration</DataTable.Title>
                    <DataTable.Title>User</DataTable.Title>
                    <DataTable.Title>Efficiency</DataTable.Title>
                  </DataTable.Header>
                  {table_time_ids}
                </DataTable>
              </ScrollView>
            </Tab>
            <Tab
              activeTabStyle={{ backgroundColor: '#5f5e97' }}
              tabStyle={{ backgroundColor: '#7c7bad' }}
              textStyle={{ color: '#fff' }}
              heading="Finished Materials"
            >
              <ScrollView>
              </ScrollView>
            </Tab>
          </Tabs>
          <FAB.Group
            fabStyle={{ backgroundColor: '#7c7bad' }}
            open={active}
            icon="menu"
            actions={[
              { icon: 'help', label: 'Availability', onPress: () => console.log('Pressed star') },
              { icon: 'add', label: 'WO', onPress: () => console.log('Pressed notifications') },
              { icon: 'close', label: 'Cancel', onPress: () => console.log('Pressed email') },
            ]}
            onStateChange={() => {}}
            onPress={() => this.setState({ active: !active })}
          />
        </View>
      </Container>
    );
  }
}

Component.propTypes = {
  actions: PropTypes.object,
  token: PropTypes.string,
  id: PropTypes.string,
  data: PropTypes.object,
};

export default Component;
