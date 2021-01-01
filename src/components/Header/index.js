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

const AppHeader = ({navigation}) => {
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
      centerComponent={{text: 'Top Slot & Games', style: {color: '#fff'}}}
      {...headerProps}
    />
  );
};

export default AppHeader;
