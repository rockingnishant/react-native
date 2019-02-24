/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
// export default class HelloWorldApp extends Component {
//   render() {
//     let pic = {
//       uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <Text>Hello world!</Text>
//         <Image source={pic} style={{ width: 193, height: 110 }} />
//       </View>     
//     );
//   }
// }

class Blink extends Component {
  constructor(props) {
    super(props)
    this.state = { isShowingText: true };
    setInterval(() => {
      this.setState(previousState => ({ isShowingText: !previousState.isShowingText }))
    }, 1000)
  }
  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}

export default class BlinkApp extends Component{
  render(){
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}