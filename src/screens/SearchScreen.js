import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {

    let [term, setTerm] = useState('')

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={()=> console.log('term was subbmitted')}
            />
            <Text>{term}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen;