import { StyleSheet } from 'react-native';

const CommonStyles = StyleSheet.create({
    flex_1: {
        flex: 1
    },
    riderItem: {
        padding: 24,
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    riderButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 16
    },
    donorAddress: {
        fontSize: 12,
        color: 'gray',
        paddingTop: 4
    },
    riderTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    donorName: {
        fontSize: 14,
        paddingTop: 4
    },
    camera: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    cameraButtonContainer: {
        backgroundColor: 'gray',
        flexDirection: 'row',
        margin: 20,
        width: 80,
        height: 80,
        borderRadius: 40,
        borderColor: 'white',
        borderWidth: 4,
        alignSelf: 'center'
    },
    camerButton: {
        alignSelf: 'center'
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    previewStyle: {
        flexDirection: 'row',
        position: 'absolute',
        left: '10%',
        top: '90%',
        width: '80%',
        justifyContent: 'space-between'
    },
    indicatorStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cameraBackground: {
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%'
    },
    separatorStyle: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
    },
    textInput: {
        height: 50,
        flex: 1,
        padding: 10
    },
    inputView: {
        borderColor: 'gray',
        borderWidth: 1,
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    loginScreen: {
        flex: 1,
        justifyContent: 'center',
        padding: 50

    },
    loginTextStyle: {
        marginBottom: 20,
        fontSize: 14
    },
    loginError: {
        marginTop: 20,
        color: 'red'
    },
    footerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        marginVertical: 10
    },
    footerText: {
        color: 'gray',
        fontSize: 12
    }
});

export default CommonStyles;