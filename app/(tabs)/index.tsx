import {useState} from 'react';
import {View} from "react-native";

import Nav from '~/components/movie-list/Nav';
import NavItem from '~/components/movie-list/NavItem';
// import List from '~/components/movie-list/List';
// import ListItem from '~/components/movie-list/ListItem';

import collections from "~/assets/data/collections.json";
// import movies from "~/asssets/data/movies.json";

export default function Movies() {
  const [selectedCollection, setSelectedCollection] = useState('');

  return (
    <View className="divide-y divide-slate-100">
      <Nav>
        {collections.map(c => (
          <NavItem 
            key={c.id}
            href="/new"
            isActive={c === selectedCollection}>
              {c.name}
          </NavItem>
        ))}
      </Nav>
      {/* <List>
        {movies.map((movie) => (
          <ListItem key={movie.id} movie={movie} />
        ))}
      </List> */}
    </View>
  )
}


// import { Stack } from 'expo-router';
// import { StyleSheet, View, Text } from 'react-native';

// import movies from "~/assets/data/movies.json"; 
// import { ScreenContent } from '~/components/ScreenContent';

// export default function Home() {
//   return (
//     <>
//       <Stack.Screen options={{ title: 'Movie List' }} />
//       <View style={styles.container}>
//         <Text>{JSON.stringify(movies)}</Text>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//   },
// });
