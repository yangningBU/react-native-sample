import React, { Component } from 'react';
import { AppRegistry, Text, View, ScrollView } from 'react-native';
import Header from "./src/components/Header";
import MessageCard from "./src/components/MessageCard";

const messages = [
  {
    id: 0,
    datetime: new Date(),
    body: "I miss you boo!!!!",
    sender: {
      name: "One"
    }
  },
  {
    id: 1,
    datetime: new Date(),
    body: "I miss you boo two!!!!",
    sender: {
      name: "Two"
    }
  },
  {
    id: 2,
    datetime: new Date(),
    body: "I miss you boo three!!!!",
    sender: {
      name: "Three"
    }
  },
  {
    id: 3,
    datetime: new Date(),
    body: "I miss you boo!!!!",
    sender: {
      name: "Four"
    }
  },
  {
    id: 4,
    datetime: new Date(),
    body: "I miss you boo two!!!!",
    sender: {
      name: "Five"
    }
  },
  {
    id: 5,
    datetime: new Date(),
    body: "I miss you boo three!!!!",
    sender: {
      name: "Six"
    }
  }
]


const styles = {
  timeline: {
    width: 2,
    marginLeft: 20,
    backgroundColor: '#ccc'
  },
  messages: {
    marginLeft: -6,
    flex: 1
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Header title="Your Messages"/>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <View style={styles.timeline}/>
          <View style={styles.messages}>
            <ScrollView>
              {messages.map(message => {
                return <MessageCard message={message} key={message.id}/>;
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('projectlayout', () => App);
