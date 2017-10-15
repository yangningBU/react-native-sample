import React from 'react';
import { instanceOf, string, shape } from 'prop-types';
import CardSection from './CardSection';
import imagePlaceholder from './person_placeholder_small.png';
import moment from 'moment';

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '150px',
  width: '300px',
  border: '#CCC 2px solid',
  marginTop: '5px'
}

const MessageCard = ({ message }) => {
  const { datetime, sender, body } = message;
  const imageSrc = sender.imageUrl || imagePlaceholder;

  return (
    <div style={{flexDirection: 'row', alignItems: 'center', position: 'relative'}}>
      <div style={{position: 'absolute', left: '-22.5px', top: '75px'}}>
        <span style={{color: '#ccc', fontWeight: 'bold'}}>O</span>
      </div>
      <div style={cardStyle}>
        <CardSection>
          <span>{moment(datetime).fromNow()}</span>
        </CardSection>
        <CardSection>
          <img src={imageSrc} style={ { width: 20, height: 20, marginRight: 5 } } alt={sender.name + "'s Square Face Picture"}/>
          <span>{sender.name}</span>
        </CardSection>
        <CardSection>
          <div>
            <span>{body}</span>
          </div>
        </CardSection>
      </div>
    </div>
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
