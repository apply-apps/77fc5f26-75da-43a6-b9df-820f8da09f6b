// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const stories = [
    { id: '1', title: 'The Night Sky', content: 'Once upon a time, under the night sky...' },
    { id: '2', title: 'Dreamland Adventures', content: 'In the dreamland, adventures await...' },
    { id: '3', title: 'The Whispering Trees', content: 'The trees whispered secrets of the night...' },
];

function HomeScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate('StoryDetails', { story: item })} style={styles.storyItem}>
            <Text style={styles.storyTitle}>{item.title}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>Bedtime Stories</Text>
            <FlatList
                data={stories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
            />
        </SafeAreaView>
    );
}

function StoryDetails({ route }) {
    const { story } = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.storyTitle}>{story.title}</Text>
                <Text style={styles.storyContent}>{story.content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="StoryDetails" component={StoryDetails} options={{ title: 'Story Details' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        paddingTop: 20,
    },
    header: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        marginVertical: 20,
        fontWeight: 'bold',
    },
    list: {
        alignItems: 'center',
    },
    storyItem: {
        backgroundColor: '#1E1E1E',
        padding: 20,
        marginVertical: 10,
        borderRadius: 10,
        width: '90%',
    },
    storyTitle: {
        fontSize: 18,
        color: '#fff',
    },
    content: {
        padding: 20,
    },
    storyContent: {
        fontSize: 16,
        color: '#fff',
    },
});