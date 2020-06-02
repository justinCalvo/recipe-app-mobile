import React from 'react';
import {
  View,
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
      data={recipes}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View>
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
        </View>
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
});

export default SearchFeed;
