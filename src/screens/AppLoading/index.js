import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import SlotMachine from 'components/LoadingSlot';
import {styles} from 'screens/AppLoading/styles';

const allowedAge = 'I am over 18';
const restrictedAge = 'I am under 18';

const buttons = [restrictedAge, allowedAge];

const AppLoading = ({navigation}) => {
  const [text, handleText] = useState('SLOT');
  const [animation, handleAnimation] = useState(false);
  const [showAgeVerification, handleAgeVerification] = useState(false);
  const [selectedAgeIndex, handleAgeIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      handleAnimation(true);
      handleText('RTPS');
      setTimeout(() => {
        handleAgeVerification(true);
      }, 3000);
    }, 500);
  }, []);

  useEffect(() => {
    if (selectedAgeIndex) {
      navigation.push('Slots');
    }
  }, [selectedAgeIndex, navigation]);

  return (
    <View style={styles.wrapper}>
      <ButtonGroup
        onPress={(index) => handleAgeIndex(index)}
        selectedIndex={selectedAgeIndex}
        buttons={buttons}
        containerStyle={{
          height: 50,
          width: 300,
          marginBottom: 20,
          flexDirection: 'row',
          flexWrap: 'wrap',
          opacity: showAgeVerification ? 1 : 0,
        }}
        buttonStyle={{backgroundColor: '#f00'}}
        textStyle={{color: '#FFF'}}
        selectedButtonStyle={{backgroundColor: '#fff'}}
        selectedTextStyle={{color: '#F00', fontWeight: 'bold'}}
      />

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
