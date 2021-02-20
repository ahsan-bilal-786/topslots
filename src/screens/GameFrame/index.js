import React, {useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import get from 'lodash/get';
import {Button} from 'react-native-elements';
import {WebView} from 'react-native-webview';
import Header from 'components/Header';
import rtpSlot from 'screens/Slots/Slots.json';

const games = [
  {
    companyImage:
      'https://spelsverige.se/wp-content/uploads/2019/02/unibet2.png',
    offerTitle: 'Unibet: SEK 100 free bet',
    offerDescription: '18+ | Play responsibly | Terms and Conditions Apply',
    turnOver: 'No Turnover Requirements',
    turnOverLink: 'https://spelsverige.se/unibet',
    summary:
      'Part of the Kindred group, the gaming site that I prefer thanks to their reliability, fast withdrawals, and high odds. Among the best gaming companies on the market.',
    joinLink:
      'https://dspk.kindredplc.com/redirect.aspx?pid=29844364&bid=33273',
  },
  {
    companyImage:
      'https://spelsverige.se/wp-content/uploads/2019/05/leovegas.jpg',
    offerTitle: 'SpeedyBet: 100kr 100% Bonus',
    offerDescription: '18+ | Play responsibly | Terms and Conditions Apply',
    turnOver: '16 x Bonus Min Odds 1.8',
    turnOverLink: 'https://spelsverige.se/speedybet/',
    summary:
      'They use the same platform as all gaming companies within the Bethard group but are worth checking out if you want very fast withdrawals (normally within five minutes).',
    joinLink:
      'https://media.heroaffiliates.com/redirect.aspx?pid=270903&bid=3153&redirectURL=https://www.speedybet.com/',
  },
  {
    companyImage:
      'https://spelsverige.se/wp-content/uploads/2019/06/yobetit.jpg',
    offerTitle: 'Leovegas: 100kr 100% Bonus',
    offerDescription: '18+ | Play responsibly | Terms and Conditions Apply',
    turnOver: '10 x Bonus Min Odds 1.8',
    turnOverLink: 'https://spelsverige.se/leovegas',
    summary:
      'A reliable gaming company with a unique setup that works surprisingly well once you get used to it, especially on the mobile (Mobile Operator of the Year 2016). In addition, a valuable new customer offer',
    joinLink: 'https://ads.leovegas.com/redirect.aspx?pid=3608107&bid=15022',
  },
  {
    companyImage:
      'https://spelsverige.se/wp-content/uploads/2020/06/tipwin.png',
    offerTitle: 'Tipwin 1000kr 100% Bonus',
    offerDescription: '18+ | Play responsibly | Terms and Conditions Apply',
    turnOver: '5 x Bonus Min odds 1.8',
    turnOverLink: 'https://spelsverige.se/tipwin',
    summary:
      'This recently launched website does not have a Swedish alternative yet, but they have very competitive odds, extensive statistics from sports radar and an extremely useful but surprisingly rare results section.',
    joinLink: 'http://tipwin.com/',
  },
];
const GameFrame = ({route, navigation}) => {
  const [gameView, toggleGameView] = useState(false);
  const gameId = get(route, 'params.gameId', 0);
  const {Slot, iframe_src, cover_photo} = rtpSlot[gameId];
  return (
    <>
      <Header {...{navigation}} title={Slot} />

      {!gameView ? (
        <View style={styles.container}>
          <Image
            source={{uri: cover_photo}}
            style={{height: 400, marginBottom: 10}}
          />
          <Button
            title={`Play ${Slot}`}
            onPress={() => toggleGameView(!gameView)}
          />
        </View>
      ) : (
        <WebView source={{uri: iframe_src}} />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#ffffff',
  },
});

export default GameFrame;
