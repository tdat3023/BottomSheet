import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Detail({route, navigation}) {
  const data = route.params.data;
  // console.log('====================================');
  // console.log(data);
  // console.log('====================================');
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/image/ArrowPointingLeft.png')} />
        </TouchableOpacity>
        <View style={styles.textHeader}>
          <Text style={styles.font1}>THÔNG TIN CHI TIẾT NHÂN VIÊN</Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../assets/image/Edit.png')} />
        </TouchableOpacity>
      </View>

      <View>
        <View style={[styles.row, {backgroundColor: '#E3DEDE'}]}>
          <Text style={[styles.text1, styles.font2]}>Mã nhân viên:</Text>
          <Text style={[styles.text2, styles.font2]}>{data.id}</Text>
        </View>
        <View style={[styles.row, {backgroundColor: '#C2EFF5'}]}>
          <Text style={[styles.text1, styles.font2]}>Tên nhân viên:</Text>
          <Text style={[styles.text2, styles.font2]}>{data.name}</Text>
        </View>
        <View style={[styles.row, {backgroundColor: '#E3DEDE'}]}>
          <Text style={[styles.text1, styles.font2]}>Ngày sinh:</Text>
          <Text style={[styles.text2, styles.font2]}>{data.DateOfBirth}</Text>
        </View>
        <View style={[styles.row, {backgroundColor: '#C2EFF5'}]}>
          <Text style={[styles.text1, styles.font2]}>Quê quán:</Text>
          <Text style={[styles.text2, styles.font2]}>{data.HomeTown}</Text>
        </View>
        <View style={[styles.row, {backgroundColor: '#E3DEDE'}]}>
          <Text style={[styles.text1, styles.font2]}>CMND/CCCD:</Text>
          <Text style={[styles.text2, styles.font2]}>{data.CCCD}</Text>
        </View>
        <View style={[styles.row, {backgroundColor: '#C2EFF5'}]}>
          <Text style={[styles.text1, styles.font2]}>Nơi cấp:</Text>
          <Text style={[styles.text2, styles.font2]}>{data.IssueBy}</Text>
        </View>
        <View style={[styles.row, {backgroundColor: '#E3DEDE'}]}>
          <Text style={[styles.text1, styles.font2]}>Ngày cấp:</Text>
          <Text style={[styles.text2, styles.font2]}>{data.DateOfIssue}</Text>
        </View>
        <View style={[styles.row, {backgroundColor: '#C2EFF5'}]}>
          <Text style={[styles.text1, styles.font2]}>Giới tính:</Text>
          <Text style={[styles.text2, styles.font2]}>{data.Gender}</Text>
        </View>
        <View style={[styles.row, {backgroundColor: '#E3DEDE'}]}>
          <Text style={[styles.text1, styles.font2]}>Tuổi:</Text>
          <Text style={[styles.text2, styles.font2]}>Tuoi</Text>
        </View>
        <View style={[styles.row, {backgroundColor: '#C2EFF5'}]}>
          <Text style={[styles.text1, styles.font2]}>Tình trạng hôn nhân:</Text>
          <Text style={[styles.text2, styles.font2]}>Yes</Text>
        </View>
        <View style={[styles.row, {backgroundColor: '#E3DEDE'}]}>
          <Text style={[styles.text1, styles.font2]}>Số điện thoại:</Text>
          <Text style={[styles.text2, styles.font2]}>{data.PhoneNumber}</Text>
        </View>
        <View style={[styles.row, {backgroundColor: '#C2EFF5'}]}>
          <Text style={[styles.text1, styles.font2]}>Email:</Text>
          <Text style={[styles.text2, styles.font2]}>{data.Email}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
    margin: 10,
    marginBottom: 15,
  },

  font1: {
    fontSize: 20,
    color: 'black',
  },

  font2: {
    fontSize: 16,
    color: 'black',
  },

  textHeader: {
    alignItems: 'center',
    alignSelf: 'center',
  },

  row: {
    marginHorizontal: '5%',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },

  text1: {
    justifyContent: 'flex-start',
  },

  text2: {
    justifyContent: 'flex-end',
  },

  footer: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  footerButton: {
    height: 50,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F8B3E',
    borderRadius: 10,
  },
});
