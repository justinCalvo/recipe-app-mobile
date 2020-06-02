import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default Home;
