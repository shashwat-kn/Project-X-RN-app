import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import CommonStyles from "../Constants/StyleConstants";

interface FooterComponentProps {
    userId: string
    onSignOut: () => void
}
export default class FooterComponent extends React.Component<FooterComponentProps> {
    render() {
        return (
            <View style={CommonStyles.footerStyle}>
                <Text style={CommonStyles.footerText}>Logged in as {this.props.userId}</Text>
                <TouchableOpacity onPress={this.props.onSignOut}>
                    <Text style={CommonStyles.footerText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        );
    }
}