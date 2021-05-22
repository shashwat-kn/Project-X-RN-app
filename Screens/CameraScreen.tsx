import React from 'react';  
import { View, Text, Alert, ActivityIndicator } from 'react-native';
import { Camera } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import CommonStyles from '../Constants/StyleConstants';
import { base64encoding, clientId, GRANTED, ImageUploadedSuccessfully, orderId, uploadApi } from '../Constants/Constants';
import CameraView from '../Components/CameraView';
import CameraPreview from '../Components/CameraPreview';

interface Props {
  navigation: any
}

export default class CameraScreen extends React.Component<Props> {
  state = {
    hasPermission: null,
    photoUri: '',
    uploading: false
  }
  camera: Camera | null = null
  _getCameraAsync = async () => {
    let { status } = await Camera.requestPermissionsAsync();
    this.setState({ hasPermission: status === GRANTED });
  };

  _takePicture = async () => {
    if (!this.camera) {return}
    const photo = await this.camera.takePictureAsync()
    this.setState({photoUri: photo.uri})
  }

  _uploadImageToServer = async () =>  {

    const base64data = await FileSystem.readAsStringAsync(this.state.photoUri, { encoding: base64encoding });
    const formData = new FormData();
    formData.append('image', base64data);
    formData.append('key', clientId);
    const id = this.props.navigation.getParam(orderId, 'NO-ID');
    const imageName = id + '_' + Date().toString()
    formData.append('name', imageName);

    const result = await fetch(uploadApi, {
      method: 'POST',
      body: formData
    });
    Alert.alert(ImageUploadedSuccessfully)
    this.props.navigation.goBack()

  }

  _retakePicture = () => {
    this.setState({photoUri: ''})
  }

  _uploadPicture = () => {
    this.setState({uploading: true})
     this._uploadImageToServer()
     
  }

  _cameraRef = (ref: any) => {
    this.camera = ref
  }

    componentDidMount() {
      this._getCameraAsync()
    }
    render() {
      if (this.state.hasPermission === null) {
        return <View/>;
      }
      if (this.state.hasPermission === false) {
        return <Text>No access to camera</Text>;
      }
      if (this.state.uploading) {
        return <UploadView/>
      }
      if (this.state.photoUri !== '') {
        return <CameraPreview uri={this.state.photoUri} retakePicture={this._retakePicture} uploadPicture={this._uploadPicture} />
      }
      return (
        <CameraView takePicture={this._takePicture} cameraref={this._cameraRef}/>
        );
    }
}

class UploadView extends React.Component {
  render() {
    return (
      <View style={CommonStyles.indicatorStyle}>
        <ActivityIndicator size="large" color="#grey" />
        <Text>Uploading Image. Please wait.....</Text>
      </View>
    )
  }
}