import React from 'react';
import { instanceOf, string, shape } from 'prop-types';
import { Text, View, Image } from 'react-native';
import CardSection from './CardSection';
import imagePlaceholder from './person_placeholder_small.png';
import moment from 'moment';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: 150,
  width: 300,
  borderColor: '#CCC',
  borderWidth: 2,
  marginTop: 5
}

const MessageCard = ({ message }) => {
  const { datetime, sender, body } = message;
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{marginRight: 10}}>
        <Text style={{color: '#ccc', fontWeight: 'bold'}}>O</Text>
      </View>
      <View style={cardStyle}>
        <CardSection>
          <Text>{moment(datetime).fromNow()}</Text>
        </CardSection>
        <CardSection>
          <Image source={sender.imageUrl || imagePlaceholder} style={ { width: 20, height: 20, marginRight: 5 } }/>
          <Text>{sender.name}</Text>
        </CardSection>
        <CardSection>
          <View>
            <Text>{body}</Text>
          </View>
        </CardSection>
      </View>
    </View>
  );
}

MessageCard.propTypes = {
  message: shape({
    datetime: instanceOf(Date).isRequired,
    body: string.isRequired,
    sender: shape({
      name: string.isRequired,
      imageUrl: string
    }).isRequired
  }).isRequired
}

export default MessageCard;
