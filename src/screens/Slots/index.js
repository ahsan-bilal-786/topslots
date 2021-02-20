import React, {useState} from 'react';
import map from 'lodash/map';
import slice from 'lodash/slice';
import range from 'lodash/range';
import toLower from 'lodash/toLower';
import filter from 'lodash/filter';
import includes from 'lodash/includes';
import size from 'lodash/size';
import {Picker} from '@react-native-picker/picker';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {Table, TableWrapper, Cell} from 'react-native-table-component';
import {Input} from 'react-native-elements';
import Header from 'components/Header';
import {styles} from 'screens/Slots/styles';
import rtpSlot from 'screens/Slots/Slots.json';

const tableConfig = {
  tableHead: ['SLOT', 'RTP', 'RISK', 'SUPPLIER'],
  widthArr: [140, 60, 80, 100],
  bodyWidthArr: [120, 60, 80, 120],
};

const paginationLength = 50;
const paginationRange = (pageNo) => {
  const end = pageNo * paginationLength;
  const start = end - paginationLength;
  return {start, end};
};
const getFilteredData = (search) => {
  if (search === '') {
    return rtpSlot;
  }
  return filter(rtpSlot, (val) => {
    return (
      includes(toLower(val[0]), toLower(search)) ||
      includes(toLower(val[3]), toLower(search))
    );
  });
};

const SlotTable = ({navigation}) => {
  const [pageNo, handlePageNo] = useState(1);
  const [search, handleSearch] = useState('');
  const {start, end} = paginationRange(pageNo);
  const filteredData = getFilteredData(search);
  const rows = slice(filteredData, start, end);

  const linkedCell = (data, index) => (
    <TouchableOpacity onPress={() => navigation.push('Faq')}>
      <Text style={[styles.underline, styles.textWhite]}>{data}</Text>
    </TouchableOpacity>
  );

  const slotViewCell = (data, index) => (
    <TouchableOpacity
      onPress={() => navigation.push('GameFrame', {gameId: index})}>
      <Text style={styles.underline}>{data}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.filterPanel}>
          <View style={styles.paginationPanel}>
            <Picker
              selectedValue={pageNo}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => handlePageNo(itemValue)}>
              {map(range(1, size(filteredData) / paginationLength), (val) => (
                <Picker.Item key={val} label={`${val}`} value={val} />
              ))}
            </Picker>
          </View>
          <View style={styles.searchPanel}>
            <Input
              placeholder="Search"
              value={search}
              onChangeText={(text) => handleSearch(text)}
            />
          </View>
        </View>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={styles.tableBorder}>
              <TableWrapper style={styles.tableWrapper}>
                {map(tableConfig.tableHead, (cellData, cellIndex) => (
                  <Cell
                    key={cellIndex}
                    data={
                      [1, 2].includes(cellIndex)
                        ? linkedCell(cellData)
                        : cellData
                    }
                    style={[
                      styles.head,
                      {width: tableConfig.widthArr[cellIndex]},
                    ]}
                    textStyle={[styles.text, styles.textWhite]}
                  />
                ))}
              </TableWrapper>
            </Table>
            <ScrollView style={styles.dataWrapper} scrollEventThrottle={400}>
              <Table borderStyle={styles.tableBorder}>
                {map(rows, (dataRow, index) => (
                  <TableWrapper key={index} style={styles.tableWrapper}>
                    <Cell
                      data={slotViewCell(dataRow.Slot, index)}
                      style={[
                        styles.row,
                        index % 2 && styles.tableEvenRow,
                        {width: tableConfig.bodyWidthArr[0]},
                      ]}
                      textStyle={styles.text}
                    />
                    <Cell
                      data={slotViewCell(dataRow.RTP, index)}
                      style={[
                        styles.row,
                        index % 2 && styles.tableEvenRow,
                        {width: tableConfig.bodyWidthArr[1]},
                      ]}
                      textStyle={styles.text}
                    />
                    <Cell
                      data={slotViewCell(dataRow.RISK, index)}
                      style={[
                        styles.row,
                        index % 2 && styles.tableEvenRow,
                        {width: tableConfig.bodyWidthArr[2]},
                      ]}
                      textStyle={styles.text}
                    />
                    <Cell
                      data={slotViewCell(dataRow.Supplier, index)}
                      style={[
                        styles.row,
                        index % 2 && styles.tableEvenRow,
                        {width: tableConfig.bodyWidthArr[3]},
                      ]}
                      textStyle={styles.text}
                    />
                  </TableWrapper>
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SlotTable;
