import React from 'react';
import {
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SearchFeed = ({ recipes }) => {
  const navigation = useNavigation();

  return (
    <FlatList
      style={styles.list}
      data={recipes}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('RecipeDetails', item.recipe)}>
          <Text style={styles.title}>{item.recipe.label}</Text>
          <Image
            style={styles.image}
            source={{
              uri: item.recipe.image,
            }}
          />
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    paddingHorizontal: 10,
  },
});

export default SearchFeed;
