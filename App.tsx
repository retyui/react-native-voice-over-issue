import React from 'react';
import {
  AppRegistry,
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
} from 'react-native';

const img1 =
  'https://follows-bc85.kxcdn.com/blog/wp-content/uploads/2018/07/Example-IG-Caption.jpg';
const img2 =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSONkXzO-GgGrBxVx184_98K0ZxtIztM9fbGw&usqp=CAU';

const noAccessibility = {
  accessible: false,
  accessibilityRole: 'none',
  accessibilityElementsHidden: true, // ios only
  // ^^^ no effect :(
};

function App() {
  return (
    <View style={styles.root}>
      <Pressable
        accessible={true}
        accessibilityLabel={'First Image with My Text'}
        focusable>
        <Image
          {...noAccessibility} // no effect :(
          source={{uri: img1}}
          //resizeMethod='scale'
          style={styles.img}
        />
        <Text
          {...noAccessibility} // no effect :(
          style={styles.text}>
          Float Text
        </Text>
        <Text> Another text </Text>
      </Pressable>

      <View style={{height: 30}} />

      <Pressable
        focusable
        accessible={true}
        accessibilityLabel={'Second Image with My Text'}>
        <Image
          {...noAccessibility} // no effect :(
          source={{uri: img2}}
          //resizeMethod='scale'
          style={styles.img}
        />
        <Text
          {...noAccessibility} // no effect :(
          style={styles.text}>
          Float Text
        </Text>
        <Text> Another text </Text>
      </Pressable>
    </View>;
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 400,
    height: 200,
    borderColor: 'red',
    borderWidth: 2,
  },
  text: {
    left: 20,
    top: -100,
    fontSize: 20,
    color: 'red',
  },
});

AppRegistry.registerComponent('ClientApp', () => App);
