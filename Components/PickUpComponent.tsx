import React from "react";
import CommonStyles from "../Constants/StyleConstants";
import { TouchableOpacity, View, Text, Button, Linking } from 'react-native';
import { callString, googleNavigation, grayColor, greenColor, startNavigation, telephoneUrl, uploadPhoto, whiteColor } from "../Constants/Constants";

interface PickupComponentProps {
    title: string
    address: string
    name: string
    latLong: string
    telephone: string
    orderId: string
    uploadPhoto: (id: string) => void
}
export default class PickupComponent extends React.Component<PickupComponentProps> {
    state = {
        isDone: false
    }
    
    private openGps(latLong: string) {
        const url = googleNavigation + latLong
        Linking.openURL(url)
      }
      
      private callCustomer(tel: string) {
        const url = telephoneUrl + tel
        Linking.openURL(url)
      }

    render() {

        return (
          <View>
          <View style={[CommonStyles.riderItem, {backgroundColor: this.state.isDone ? grayColor : whiteColor}]}>
            <TouchableOpacity onPress={() => this.setState({isDone: !this.state.isDone})}>
              <Text style = {CommonStyles.riderTitle}>{this.props.title}</Text>
              {this.state.isDone && <Text>COMPLETED!</Text>}
              {!this.state.isDone && <Text style={CommonStyles.donorName}>Donor Name: {this.props.name}</Text>}
              {!this.state.isDone && <Text style={CommonStyles.donorAddress}>Address: {this.props.address}</Text>}
              </TouchableOpacity>
            <View style={CommonStyles.riderButton}>
            {!this.state.isDone && <Button
                title={startNavigation}
                onPress={() => this.openGps(this.props.latLong)}
              />}
              {!this.state.isDone && <Button
                color={greenColor}
                title={callString}
                onPress={() => this.callCustomer(this.props.telephone)}
              />}
              </View>
              <View style={{paddingTop: 16}}>
              {!this.state.isDone && <Button
                color={grayColor}
                title={uploadPhoto}
                onPress={() => this.props.uploadPhoto(this.props.orderId)}
              />}
              </View>
              
          </View>
          <View style={CommonStyles.separatorStyle}/>
          </View>
        );
    }
}