import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';
import config from '../config.js';
import SearchFeed from '../components/SearchFeed';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('smoothie');
  const [search, setSearch] = useState('');
  const [viewMore, setViewMore] = useState(false);

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
  }, [query]);

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleSearch = e => {
    e.preventDefault();
    setQuery(search);
    setViewMore(false);
    setSearch('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={setSearch}
          value={search}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Text>Search</Text>
        </TouchableOpacity>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    fontSize: 18,
  },
  button: {
    paddingTop: 20,
  },
  container: {
    backgroundColor: 'white',
  },
});

export default Home;
