import React from "react";
import { View, Text, Button, ToastAndroid } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CommonStyles from "../Constants/StyleConstants";

interface LoginScreenProps {
    onSubmit: (userId: string) => void
}

export default class LoginScreen extends React.Component<LoginScreenProps> {
    state = {
        phoneNo: ''
    }
    _onsubmitPress = () => {
        if (this.state.phoneNo.length < 10) {
            ToastAndroid.show('Incorrect phone number', ToastAndroid.SHORT)
            return
        }
        this.props.onSubmit(this.state.phoneNo)
    }
    render() {
        return (
            <View style={CommonStyles.loginScreen}>
                <Text style={CommonStyles.loginTextStyle}>Login with registered mobile Number</Text>
                <View style={CommonStyles.inputView}>
                    <TextInput
                        style={CommonStyles.textInput}
                        placeholder="Enter Mobile No"
                        placeholderTextColor="#003f5c"
                        keyboardType='phone-pad'
                        onChangeText={(text) => this.setState({ phoneNo: text })}
                    />
                </View>
                <Button
                    title='submit'
                    onPress={this._onsubmitPress}
                />
                {this.state.phoneNo.length !== 0 && this.state.phoneNo.length !== 10 && <Text style={CommonStyles.loginError}>Incorrect Mobile Number</Text>}
            </View>
        );
    }
}