import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MessageCard from "./web-components/MessageCard";

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
    width: '2px',
    marginLeft: '20px',
    backgroundColor: '#ccc'
  },
  messages: {
    marginLeft: '15px',
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
      <div style={{flex: 1}}>
        <h1>Your Messages</h1>
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <div style={styles.timeline}/>
          <div style={styles.messages}>
            {messages.map(message => {
              return <MessageCard message={message} key={message.id}/>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
