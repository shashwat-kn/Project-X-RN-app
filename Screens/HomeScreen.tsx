import React from 'react';  
import { FlatList, RefreshControl } from 'react-native';
import newResponse from '../Mocks/hResponse';
import { cameraScreen } from '../Constants/Constants';
import PickupComponent from '../Components/PickUpComponent';

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
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={this.state.refreshing}
                  onRefresh={this._onRefresh}
                />
              }
              data={newResponse.response.data}
              renderItem={({item}) => <PickupComponent {...item} uploadPhoto={this._uploadPhoto}/>}
            />
          );
      }
    
      _uploadPhoto = (id: String) => {
        this.props.navigation.navigate(cameraScreen, {orderId: id})  
      }
}

