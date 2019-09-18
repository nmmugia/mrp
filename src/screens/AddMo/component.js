/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { FAB, DataTable } from 'react-native-paper';
import { Container, Header, Tabs, Tab, ScrollableTab } from 'native-base';
// import CaribeScanner from './caribe';
import Form from './form';

class Component extends React.Component {
  state = {
    active: false,
  };

  componentWillMount() {
    const { actions, token, id } = this.props;
    actions.getMOById({ token, id });
  }

  handleSubmit = values => {
    const { actions } = this.props;
    actions.addMo(values);
  };

  render() {
    const { data } = this.props;
    const { active } = this.state;
    let raw_ids, finished_ids = null;
    if (data) {
      // eslint-disable-next-line camelcase
      const { move_raw_ids, move_finished_ids } = data;
      raw_ids = Object.keys(move_raw_ids).map(i => {
        return (
          <DataTable.Row key={i}>
            <DataTable.Cell style={{ width: 100, paddingRight: 20 }}>
              {move_raw_ids[i].name}
            </DataTable.Cell>
            <DataTable.Cell style={{ width: 150, paddingRight: 20 }}>
              {move_raw_ids[i].product_uom_qty}
            </DataTable.Cell>
            <DataTable.Cell style={{ width: 100, paddingRight: 20 }}>
              {move_raw_ids[i].reserved_availability}
            </DataTable.Cell>
            <DataTable.Cell style={{ width: 150, paddingRight: 20 }}>
              {move_raw_ids[i].qty_done}
            </DataTable.Cell>
          </DataTable.Row>
        );
      });

      finished_ids = Object.keys(move_finished_ids).map(i => {
        return (
          <DataTable.Row key={i}>
            <DataTable.Cell style={{ width: 100, paddingRight: 20 }}>
              {move_finished_ids[i].name}
            </DataTable.Cell>
            <DataTable.Cell style={{ width: 150, paddingRight: 20 }}>
              {move_finished_ids[i].qty_done}
            </DataTable.Cell>
          </DataTable.Row>
        );
      });
    }
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
                <Form initialValues={data} onSubmit={this.handleSubmit} />
              </ScrollView>
            </Tab>
            <Tab
              activeTabStyle={{ backgroundColor: '#5f5e97' }}
              tabStyle={{ backgroundColor: '#7c7bad' }}
              textStyle={{ color: '#fff' }}
              heading="Consumed Materials"
            >
              <ScrollView>
                <DataTable.Header>
                  <DataTable.Title
                    onPress={() => setSort([1, sort[0] == 1 && sort[1] == true? false: true])}
                  >
                    Product
                  </DataTable.Title>
                  <DataTable.Title>To Consume</DataTable.Title>
                  <DataTable.Title>Reserved</DataTable.Title>
                  <DataTable.Title>Consumed</DataTable.Title>
                </DataTable.Header>
                {raw_ids}
              </ScrollView>
            </Tab>
            <Tab
              activeTabStyle={{ backgroundColor: '#5f5e97' }}
              tabStyle={{ backgroundColor: '#7c7bad' }}
              textStyle={{ color: '#fff' }}
              heading="Finished Materials"
            >
              <ScrollView>
                {!data ? (
                  <Text>
                    Use the Produce button or process the work orders to create some finished
                    products.
                  </Text>
                ) : (
                  <>
                    <DataTable.Header>
                      <DataTable.Title
                        onPress={() => setSort([1, sort[0] == 1 && sort[1] == true? false: true])}
                      >
                        Product
                      </DataTable.Title>
                      <DataTable.Title
                        onPress={() => setSort([2, sort[0] == 2 && sort[1] == true? false: true])}
                      >
                        Done
                      </DataTable.Title>
                    </DataTable.Header>
                    {finished_ids}
                  </>
                )}
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
