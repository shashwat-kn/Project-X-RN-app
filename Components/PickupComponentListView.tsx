import React from "react";
import { FlatList, RefreshControl } from "react-native";
import newResponse from "../Mocks/hResponse";
import PickupComponent from "./PickUpComponent";
import FooterComponent from "./FooterComponent";

interface PickupComponentListViewProps {
    refreshing: boolean
    uploadPhoto: (id: string) => void
    onRefresh: () => void
    onSignOut: () => void
    userId: string
}
export default class PickupComponentListView extends React.Component<PickupComponentListViewProps> {
    render() {
        return (
            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={this.props.refreshing}
                        onRefresh={this.props.onRefresh}
                    />
                }
                data={newResponse.response.data}
                renderItem={({ item }) => <PickupComponent {...item} uploadPhoto={this.props.uploadPhoto} />}
                ListFooterComponent={
                    <FooterComponent onSignOut={this.props.onSignOut} userId={this.props.userId} />
                }
            />
        );
    }
}