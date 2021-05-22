import { Camera } from "expo-camera";
import React from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CommonStyles from "../Constants/StyleConstants";

interface CameraViewProps {
    cameraref: (ref: any) => void
    takePicture: () => void
}
export default class CameraView extends React.Component<CameraViewProps> {
    render() {
        return (
            <View style={CommonStyles.flex_1}>
              <Camera style={CommonStyles.camera} type={Camera.Constants.Type.back} ref={this.props.cameraref}>
    
              <TouchableOpacity
                style={CommonStyles.camerButton}
                onPress={() => {
                  this.props.takePicture()
                }}>
                <View style={CommonStyles.cameraButtonContainer}/>
              </TouchableOpacity>
              </Camera>
              
            </View>
            );
    }
}