import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const SearchFeed = ({ recipes }) => {
  return (
    <FlatList
      data={recipes}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.recipe.label}</Text>
          <Image
            style={styles.image}
            source={{
              uri: item.recipe.image,
            }}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 50,
    width: 50,
  },
});

export default SearchFeed;
