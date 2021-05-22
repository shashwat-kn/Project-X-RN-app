import React from "react";
import { Button, ImageBackground, View } from "react-native";
import { greenColor, redColor, retry, uploadPhoto } from "../Constants/Constants";
import CommonStyles from "../Constants/StyleConstants";

interface CameraPreviewProps {
    uri: string
    retakePicture: () => void
    uploadPicture: () => void
}
export default class CameraPreview extends React.Component<CameraPreviewProps> {
    render() {
        return (
            <View style={CommonStyles.cameraBackground}>
              <ImageBackground
                source={{uri: this.props.uri}}
                style={{
                  flex: 1
                }}
              />
              <View style={CommonStyles.previewStyle}>
                <Button
                  color={redColor}
                  title={retry}
                  onPress={this.props.retakePicture}
                />
                <Button
                  color={greenColor}
                  title={uploadPhoto}
                  onPress={this.props.uploadPicture}
                />
              </View>
            </View>
          )
    }
}