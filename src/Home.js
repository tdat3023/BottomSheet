import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  TextInput,
} from "react-native";
import React, {
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
} from "react";
import BoxInfor from "./component/BoxInfor";
import { SafeAreaView } from "react-native-safe-area-context";
import employeeApi from "./Api/EmployeeApi";
import LoadingModal from "./component/LoadingModal";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";

export default function Home({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await employeeApi.getAllEmployees();
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
      setData(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const bottomSheetRef = useRef(null);
  const handleClose = () => bottomSheetRef.current?.close();
  const handleOpen = () => bottomSheetRef.current?.present();
  const snapPoints = useMemo(() => ["75%"], []);
  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    []
  );

  // const [isClose, setIsClose] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View style={styles.headerView}>
          <View style={styles.iconHeader}>
            <Image source={require("../assets/image/menuRounded.png")} />
          </View>
          <View style={styles.textHeader}>
            <Text style={styles.font1}>DANH MỤC NHÂN VIÊN</Text>
          </View>
          <View style={styles.buttonHeader}>
            <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
              <Image
                style={{ marginRight: 10 }}
                source={require("../assets/image/Add.png")}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleOpen}>
              <Image source={require("../assets/image/Filter.png")} />
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={data}
          renderItem={({ item }) => (
            <BoxInfor data={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
        />

        {/* bottomsheet */}

        <BottomSheet
          style={{ flex: 1 }}
          snapPoints={snapPoints}
          ref={bottomSheetRef}
          index={0}
          backdropComponent={renderBackdrop}
          handleIndicatorStyle={{ backgroundColor: "white" }}
        >
          <View style={styles.contentContainer}>
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Image source={require("../assets/image/Filter.png")} />
            </TouchableOpacity>

            <Text style={styles.font1}>Lọc nhân viên</Text>
          </View>
          <ScrollView>
            <View style={styles.row}>
              <Text style={styles.fontText}>Tên nhân viên:</Text>
              <TextInput style={styles.fontInput} />
            </View>
            <View style={styles.row}>
              <Text style={styles.fontText}>Tên nhân viên:</Text>
              <BottomSheetTextInput style={styles.fontInput} />
            </View>
            <View style={styles.row}>
              <Text style={styles.fontText}>Tên nhân viên:</Text>
              <TextInput style={styles.fontInput} />
            </View>
            <View style={styles.row}>
              <Text style={styles.fontText}>Tên nhân viên:</Text>
              <TextInput style={styles.fontInput} />
            </View>
          </ScrollView>
          <View style={{}}>
            <TouchableOpacity
              // onPress={handleClose}
              style={styles.btnFilter}
            >
              <Text style={styles.fontfilter}>Xác nhận</Text>
            </TouchableOpacity>
          </View>
        </BottomSheet>
        <LoadingModal visible={isLoading} />
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    marginTop: 10,
  },

  font1: {
    fontSize: 20,
    marginRight: 10,
  },

  iconHeader: {},
  textHeader: {
    alignItems: "center",
    alignSelf: "center",
  },
  buttonHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  contentContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 10,
  },

  row: {
    marginHorizontal: "5%",
    marginBottom: 10,
  },
  fontText: {
    marginBottom: 10,
    fontSize: 20,
    color: "black",
  },

  fontInput: {
    borderRadius: 15,
    borderWidth: 1,
    padding: 15,
    fontSize: 20,
  },
  btnFilter: {
    padding: 10,

    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: "#e56d52",
    width: "90%",
  },

  fontfilter: {
    fontSize: 20,
    color: "white",
  },
});
