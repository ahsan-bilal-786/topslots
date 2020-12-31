import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {Header, Icon} from 'react-native-elements';
import map from 'lodash/map';
import slice from 'lodash/slice';
import {Table, Row} from 'react-native-table-component';
import rtpSlot from 'screens/Slots/Slot-RTP.json';

const tableConfig = {
  tableHead: rtpSlot.data[0],
  widthArr: [140, 60, 80, 100],
};

const data = slice(rtpSlot.data, 1, 100);

const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
  const paddingToBottom = 50;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const SlotTable = () => {
  const pagination = 75;
  const [rows, handleRows] = useState([]);
  const [search, handleSearch] = useState('');

  const addRows = () => {
    const currentRowsLength = rows.length;
    if (currentRowsLength < data.length) {
      const newLength = currentRowsLength + pagination;
      handleRows(slice(data, 0, newLength));
    }
  };

  const onScroll = ({nativeEvent}) => {
    if (isCloseToBottom(nativeEvent)) {
      addRows();
    }
  };
  useEffect(() => {
    addRows();
  }, []);
  return (
    <>
      <Header
        placement="left"
        centerComponent={{text: 'Top Slot & Games', style: {color: '#fff'}}}
      />
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              <Row
                data={tableConfig.tableHead}
                widthArr={tableConfig.widthArr}
                style={styles.head}
                textStyle={styles.text}
              />
            </Table>
            <ScrollView
              style={styles.dataWrapper}
              onScroll={onScroll}
              scrollEventThrottle={400}>
              <Table
                borderStyle={{borderColor: '#C1C0B9'}}
                pagination
                paginationServer
                paginationTotalRows={rtpSlot.data.length}
                selectableRows
                paginationPerPage={10}>
                {map(rows, (dataRow, index) => (
                  <Row
                    key={index}
                    data={dataRow}
                    widthArr={tableConfig.widthArr}
                    style={[
                      styles.row,
                      index % 2 && {backgroundColor: '#ffffff'},
                    ]}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
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
  head: {
    height: 50,
    backgroundColor: '#6F7BD9',
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
});

export default SlotTable;
