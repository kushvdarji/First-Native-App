import * as React from 'react';
import { Button, View } from 'react-native';

function Favourites({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Button onPress={() => navigation.navigate('Settings')} title="Go back Settings" /> */}
      </View>
    );
  }

  export default Favourites;