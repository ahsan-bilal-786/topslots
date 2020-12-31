import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header} from 'react-native-elements';

const Faq = () => {
  return (
    <>
      <Header
        placement="left"
        centerComponent={{text: 'Top Slot & Games', style: {color: '#fff'}}}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '800',
            textDecorationLine: 'underline',
          }}>
          RISK
        </Text>
        <Text style={{marginBottom: 10}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '800',
            textDecorationLine: 'underline',
          }}>
          RTP
        </Text>
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex
          ea commodi consequatur.
        </Text>
      </View>
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

export default Faq;
