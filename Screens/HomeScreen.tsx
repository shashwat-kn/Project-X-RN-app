import React from 'react';
import { cameraScreen } from '../Constants/Constants';
import PickupComponentListView from '../Components/PickupComponentListView';
import LoginScreen from '../Components/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View } from 'react-native';

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

  _getData = async () => {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value !== null) {
      this.setState({userId: value})
    } else {
      this.setState({userId: 'NO-ID'})
    }
  }

  componentDidMount() {
    this._getData()
  }

  _onRefresh = async () => {
    // Make the api call again here and set refreshing in state to false
  }

  _onSumbit = async (id: string) => {
    await AsyncStorage.setItem('@storage_Key', id)
    this.setState({ userId: id })
  }

  _onSignOut = async () => {
    await AsyncStorage.removeItem('@storage_Key')
    this.setState({userId: 'NO-ID'})
  }
  render() {
    if (this.state.userId == '') {
      return (
        <View/>
      );
    }
    if (this.state.userId !== 'NO-ID') {
      return (
        <PickupComponentListView refreshing={this.state.refreshing} onRefresh={this._onRefresh} uploadPhoto={this._uploadPhoto} onSignOut={this._onSignOut} userId={this.state.userId}/>
      );
    }
    return (
      <LoginScreen onSubmit={this._onSumbit} />
    );
  }

  _uploadPhoto = (id: String) => {
    this.props.navigation.navigate(cameraScreen, { orderId: id })
  }
}

