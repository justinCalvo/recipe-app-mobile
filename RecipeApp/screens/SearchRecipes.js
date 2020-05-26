import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import config from '../config.js';
import SearchFeed from '../components/SearchFeed';

const SearchRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');

  const getRecipes = useCallback(async () => {
    const results = await fetch(
      // eslint-disable-next-line prettier/prettier
      `https://api.edamam.com/search?q=${query}&app_id=${config.API_ID}&app_key=${config.API_KEY}`,
    );
    const response = await results.json();
    setRecipes(response.hits);
  }, [query]);

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  console.log(recipes);
  console.log('query: ', query);
  console.log('search: ', search);

  return (
    <SafeAreaView>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setSearch}
          value={search}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Text>Search</Text>
        </TouchableOpacity>
        <SearchFeed recipes={recipes} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 18,
  },
});

export default SearchRecipes;
