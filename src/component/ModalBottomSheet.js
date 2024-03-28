import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import React, {
  useMemo,
  useCallback,
  useRef,
  useEffect,
  useState,
  useImperativeHandle,
} from "react";
import {
  BottomSheetBackdrop,
  BottomSheetModalProvider,
  BottomSheetTextInput,
} from "@gorhom/bottom-sheet";
import BottomSheet from "@gorhom/bottom-sheet";

function ModalBottomSheet({ isClose }) {
  const bottomSheetRef = useRef(null);
  const [first, setfirst] = useState(false);
  useEffect(() => {
    if (first) {
      bottomSheetRef?.current?.expand();
    } else {
      bottomSheetRef?.current?.close();
    }
  }, [first]);
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
  return (
    <BottomSheetModalProvider>
      <BottomSheet
        style={{ flex: 1 }}
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        index={0}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={{ backgroundColor: "white" }}
      >
        <View style={styles.contentContainer}>
          <TouchableOpacity
            style={{ marginRight: 10 }}
            // onPress={handleClose}
          >
            <Image source={require("../../assets/image/Filter.png")} />
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
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
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

export default ModalBottomSheet;
