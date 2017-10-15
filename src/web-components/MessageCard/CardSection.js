import React from 'react';

const style = {
  flex: '1',
  flexDirection: 'row',
  padding: '5px'
}

export default ({children}) => {
  return (
    <div style={style}>
      {children}
    </div>
  );
}