import React from 'react';
import { string } from 'prop-types';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    height: 40,
    borderBottomColor: "#EFEFEF",
    borderBottomWidth: 2
  },
  text: {
    fontSize: 14
  }
})

const Header = ({ title }) => {
  const { header, text } = styles;
  
  return (
    <View style={header}>
      <Text style={text}>
        { title || "Untitled" }
      </Text>
    </View>
  );
}

Header.propTypes = {
  title: string
}

export default Header;