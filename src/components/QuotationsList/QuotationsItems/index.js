import React from "react"
import { View, Text, Image } from "react-native"
import styles from "./styles"


export default function QuotationsItems(){
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                        style={styles.logoBitcoin}
                        source={require("./Bitcoin.png")}
                    />
                    <Text style={styles.dayQuotation}>11/03/2023</Text>
                </View>
            </View>
            <View style={styles.contextRight}>
                <Text style={styles.price}>$ 115230.31</Text>
            </View>
        </View>
    )
}