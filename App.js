import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationsList from './src/components/QuotationsList';
import QuotationsItems from './src/components/QuotationsList/QuotationsItems';

export default function App() {
  return (
    <LinearGradient
      colors = {[ "#0f2027" , "#203a43" , "#2c5364" ]}
      style={styles.background}
    >
    <SafeAreaView style={styles.container}>
        <StatusBar 
          backgroundColor='#555'
          barStyle="light-content"

        />
        <CurrentPrice/>
        <HistoryGraphic/>
        <QuotationsList/>
        <QuotationsItems/>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // paddingTop: Platform.OS === "android" ? 40 : 0
  },
  background: {
    height: "100%",
    width: "100%"
  }
});
