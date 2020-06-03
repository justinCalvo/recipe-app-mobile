import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';

const RecipeDetails = ({ route }) => {
  const { calories, image, ingredientLines, label } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text style={[styles.text, styles.header]}>{label}</Text>
        <Text style={styles.text}>Calories: {Math.round(calories)}</Text>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <Text style={[styles.text, styles.header]}>Ingredients:</Text>
        <FlatList
          data={ingredientLines}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.textContainer}>
              <Text style={styles.text}>{item}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    paddingHorizontal: 40,
    paddingVertical: 10,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
  header: {
    fontSize: 18,
    paddingVertical: 20,
  },
});

export default RecipeDetails;
