import React, { useState, useEffect, useCallback } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import config from '../../config.js';
import ViewMoreButton from '../components/ViewMoreButton';

const SearchBar = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('smoothie');

  const getRecipes = useCallback(async () => {
    const results = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${
        config.API_ID
      }&app_key=${config.API_KEY}`,
    );
    if (results.ok) {
      const response = await results.json();
      setRecipes(response.hits);
    }
    setQuery('');
  }, [query]);

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search recipes..."
        returnKeyType="search"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={getRecipes}
      />
      <ViewMoreButton recipes={recipes} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 18,
    paddingVertical: 10,
    marginBottom: 20,
  },
  container: {
    paddingHorizontal: 5,
  },
});

export default SearchBar;
