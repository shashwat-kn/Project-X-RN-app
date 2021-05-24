import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import CommonStyles from "../Constants/StyleConstants";

interface LoadingViewProps {
    text: string
}

export default class LoadingView extends React.Component<LoadingViewProps> {
    render() {
        return (
            <View style={CommonStyles.indicatorStyle}>
                <ActivityIndicator size="large" color="#grey" />
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}