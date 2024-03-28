import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';

export default function BoxInfor({data, navigation}) {
  const [item, setdata] = useState(data);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', {data: item})}>
      <View style={styles.container}>
        <View style={styles.button}>
          <TouchableOpacity>
            <Image source={require('../../assets/image/Delete.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.infor}>
          <View style={styles.textView}>
            <Text style={styles.font1}>Mã nhân viên:</Text>
            <Text style={styles.font2}>{data.id}</Text>
          </View>
          <View style={styles.textView}>
            <Text style={styles.font1}>Tên nhân viên:</Text>
            <Text style={styles.font2}>{data.name}</Text>
          </View>

          <View style={styles.textView2}>
            <View style={styles.textView}>
              <Text style={styles.font1}>Ngày sinh:</Text>
              <Text style={styles.font2}>{data.DateOfBirth}</Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.font1}>Quê quán:</Text>
              <Text style={styles.font2}>{data.HomeTown}</Text>
            </View>
          </View>

          <View style={styles.textView2}>
            <View style={styles.textView}>
              <Text style={styles.font1}>CCCD/CMND:</Text>
              <Text style={styles.font2}>{data.CCCD}</Text>
            </View>
            <View style={styles.textView}>
              <Text style={styles.font1}>Ngày cấp:</Text>
              <Text style={styles.font2}>{data.DateOfIssue}</Text>
            </View>
          </View>

          <View style={styles.textView}>
            <Text style={styles.font1}>Nơi cấp:</Text>
            <Text style={styles.font2}>{data.IssueBy}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C9EDEF',
    flexDirection: 'column',
    margin: 10,
    borderRadius: 10,
    flex: 1,
  },
  button: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  infor: {
    marginHorizontal: 15,
    marginVertical: 20,
  },
  textView: {
    flexDirection: 'row',
  },
  textView2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  font1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 5,
    marginBottom: 5,
  },
  font2: {
    fontSize: 16,
  },
});
