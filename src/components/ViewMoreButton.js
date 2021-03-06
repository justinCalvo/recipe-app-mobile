import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import SearchFeed from './SearchFeed';

const ViewMoreButton = ({ recipes }) => {
  const [viewMore, setViewMore] = useState(false);

  useEffect(() => {
    setViewMore(false);
  }, [recipes]);

  return (
    <View style={styles.container}>
      {viewMore ? (
        <SearchFeed recipes={recipes} />
      ) : (
        <SearchFeed recipes={recipes.slice(0, 5)} />
      )}
      {!viewMore ? (
        <View style={styles.button}>
          <Button title="View More" onPress={() => setViewMore(true)} />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingTop: 20,
  },
  container: {
    paddingBottom: 150,
  },
});

export default ViewMoreButton;
