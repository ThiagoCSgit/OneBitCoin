import React from "react"
import { ScrollView, View, Text, TouchableOpacity } from "react-native"
import styles from "./styles"

export default function QuotationsList(){
    return (
        <>
            <View style={styles.filters}>
                <TouchableOpacity
                    style={styles.btnQuery}
                    onPress={() => {}}
                >
                    <Text
                        style={styles.txtBtnQuery}
                    >
                        7d
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnQuery}
                    onPress={() => {}}
                >
                    <Text
                        style={styles.txtBtnQuery}
                    >
                        15d
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnQuery}
                    onPress={() => {}}
                >
                    <Text
                        style={styles.txtBtnQuery}
                    >
                        1m
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnQuery}
                    onPress={() => {}}
                >
                    <Text
                        style={styles.txtBtnQuery}
                    >
                        3m
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnQuery}
                    onPress={() => {}}
                >
                    <Text
                        style={styles.txtBtnQuery}
                    >
                        6m
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    )
}