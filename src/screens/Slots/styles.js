import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  head: {
    height: 50,
    backgroundColor: '#F00',
  },
  textWhite: {
    color: '#FFF',
  },
  text: {
    textAlign: 'center',
    fontWeight: '200',
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: '#F7F8FA',
  },
  filterPanel: {flexDirection: 'row'},
  paginationPanel: {flex: 1, flexDirection: 'column'},
  searchPanel: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  picker: {height: 50, width: 100},
  underline: {textDecorationLine: 'underline'},
  tableBorder: {borderColor: '#C1C0B9'},
  tableEvenRow: {backgroundColor: '#DDD'},
  tableWrapper: {flexDirection: 'row'},
});
