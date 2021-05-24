import React from 'react';
import { cameraScreen } from '../Constants/Constants';
import PickupComponentListView from '../Components/PickupComponentListView';

interface Props {
  navigation: any
}

export default class HomeScreen extends React.Component<Props> {
  static navigationOptions = {
    title: 'Project X Rider App'
  };
  state = {
    userId: '',
    refreshing: false

  }

  _onRefresh = async () => {
    // Make the api call again here and set refreshing in state to false
  }
  render() {
    return (
      <PickupComponentListView refreshing={this.state.refreshing} onRefresh={this._onRefresh} uploadPhoto={this._uploadPhoto} />
    );
  }

  _uploadPhoto = (id: String) => {
    this.props.navigation.navigate(cameraScreen, { orderId: id })
  }
}

