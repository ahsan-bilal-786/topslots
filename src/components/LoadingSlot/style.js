import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
  },
  slotWrapper: {
    backgroundColor: 'gray',
    marginLeft: 5,
  },
  slotInner: {
    backgroundColor: 'black',
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  text: {
    fontSize: 50,
    top: -2,
    fontWeight: 'bold',
    color: '#b5b7ba',
  },
  innerBorder: {
    position: 'absolute',
    top: 1,
    right: 1,
    left: 1,
    bottom: 1,
    borderColor: 'black',
    borderWidth: 1,
    zIndex: 1,
  },
  outerBorder: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    borderColor: '#989898',
    borderWidth: 1,
    zIndex: 1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: '#ffffff77',
  },
});
