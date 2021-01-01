import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import SlotMachine from 'components/LoadingSlot';
import {styles} from 'screens/AppLoading/styles';

const AppLoading = ({navigation}) => {
  const [text, handleText] = useState('RTPS');
  const [animation, handleAnimation] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      handleAnimation(true);
      handleText('SLOT');
      setTimeout(() => {
        navigation.push('Slots');
      }, 3000);
    }, 500);
  }, []);
  return (
    <View style={styles.wrapper}>
      <SlotMachine
        key={text}
        text={text}
        range="ABCDEFHIJKLMNOPQRSTUVWXYZ"
        initialAnimation={animation}
        duration={3000}
      />
    </View>
  );
};

export default AppLoading;
