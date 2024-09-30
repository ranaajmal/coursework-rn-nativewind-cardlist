import { Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

import movies from "~/assets/data/movies.json"; 
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Movie List' }} />
      <View style={styles.container}>
        <Text>{JSON.stringify(movies)}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
