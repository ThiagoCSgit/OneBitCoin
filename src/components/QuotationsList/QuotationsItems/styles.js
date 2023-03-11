import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContent: {
        width: "95%",
        height: "auto",
        marginLeft: "3%",
        marginBottom: 15,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        padding: 10
    },
    contextLeft: {
        width: "36%",
        alignItems: "flex-start"
    },
    boxLogo: {
        flexDirection: "row",
        alignItems: "center",
    },
    logoBitcoin: {
        width: 40,
        height: 40,
        marginLeft: 2,
    },
    dayQuotation: {
        fontSize: 16,
        marginLeft: 10,
        color: "#fff",
        fontWeight: 700
    },
    contextRight: {
        width: "60%",
        alignItems: "flex-end"
    },
    price: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 700
    }
});

export default styles