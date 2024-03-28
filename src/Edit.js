import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Edit({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/image/ArrowPointingLeft.png')} />
        </TouchableOpacity>
        <View style={styles.textHeader}>
          <Text style={styles.font1}>CẬP NHẬT THÔNG TIN NHÂN VIÊN</Text>
        </View>
      </View>

      <ScrollView disableIntervalMomentum={true}>
        <View style={styles.row}>
          <Text style={styles.fontText}>Mã nhân viên:</Text>
          <TextInput style={styles.fontInput} />
        </View>
        <View style={styles.row}>
          <Text style={styles.fontText}>Tên nhân viên:</Text>
          <TextInput style={styles.fontInput} />
        </View>
        <View style={styles.row}>
          <Text style={styles.fontText}>Ngày sinh:</Text>
          <TextInput style={styles.fontInput} />
        </View>
        <View style={styles.row}>
          <Text style={styles.fontText}>CMND/CCCD:</Text>
          <TextInput style={styles.fontInput} />
        </View>
        <View style={styles.row}>
          <Text style={styles.fontText}>Nơi cấp:</Text>
          <TextInput style={styles.fontInput} />
        </View>
        <View style={styles.row}>
          <Text style={styles.fontText}>Ngày cấp:</Text>
          <TextInput style={styles.fontInput} />
        </View>
        <View style={styles.row}>
          <Text style={styles.fontText}>Quê quán:</Text>
          <TextInput style={styles.fontInput} />
        </View>
        <View style={styles.row}>
          <Text style={styles.fontText}>Giới tính:</Text>
          <TextInput style={styles.fontInput} />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text>Lưu</Text>
        </TouchableOpacity>
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
    alignContent: 'center',
    margin: 10,
  },

  font1: {
    fontSize: 20,
    marginRight: 10,
    color: 'black',
  },

  textHeader: {
    marginLeft: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  row: {
    marginHorizontal: '5%',
    marginBottom: 10,
  },

  fontText: {
    marginBottom: 10,
    fontSize: 20,
    color: 'black',
  },

  fontInput: {
    borderRadius: 15,
    borderWidth: 1,
    padding: 15,
    fontSize: 20,
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
