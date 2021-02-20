import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Header, Icon} from 'react-native-elements';

const LeftComponent = ({link}) => {
  return (
    <TouchableOpacity onPress={link}>
      <Icon name="arrow-back" color="#FFFFFF" />
    </TouchableOpacity>
  );
};

const AppHeader = ({navigation, title}) => {
  let headerProps = {};
  if (navigation) {
    headerProps.leftComponent = (
      <LeftComponent link={() => navigation.push('Slots')} />
    );
  }
  return (
    <Header
      backgroundColor="#F00"
      placement="left"
      centerComponent={{
        text: title || 'Slot RTPs',
        style: {color: '#fff'},
      }}
      {...headerProps}
    />
  );
};

export default AppHeader;
