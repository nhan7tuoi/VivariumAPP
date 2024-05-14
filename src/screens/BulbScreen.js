import Colors from '@/theme/Colors';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

const BulbScreen = () => {
  const [dateStart, setDateStart] = useState(new Date());
  const [dateEnd, setDateEnd] = useState(new Date());
  const [mode, setMode] = useState(-1);
  const [showStart, setShowStart] = useState(false);
  const [showEnd, setShowEnd] = useState(false);


  const onChangeStart = (event, selectedDate) => {
    console.log(selectedDate);
    const currentDate = selectedDate || dateStart;
    console.log(currentDate);
    setDateStart(currentDate);
  }
  const onChangeEnd = (event, selectedDate) => {
    const currentDate = selectedDate || dateEnd;
    setDateEnd(currentDate);
  }

  const handlleStart = () => {
    console.log(dateStart);
    console.log(dateEnd);
    console.log(mode);
  }

  const handleMode = (currentMode) => {
    setMode(currentMode);
  }




  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Đèn chiếu sáng</Text>
      </View>
      <View style={styles.imgBody}>
        <View style={styles.circleImg}>
          <Image source={require('../../assets/images/bulbImg.png')} style={{ width: 100, height: 100 }} />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={{ width: "100%", height: 200, backgroundColor: Colors.icon, borderRadius: 20, padding: 10 }}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Hẹn giờ</Text>
          <View style={{ marginVertical: 10, flexDirection: 'row' }}>
            <Text style={{ color: 'black', fontSize: 18 }}>Bật</Text>
            {Platform.OS === 'ios' ?
              <DateTimePicker
                style={{ width: '90%' }}
                value={dateStart}
                mode='time'
                is24Hour={true}
                locale="vi"
                // minimumDate={new Date()}
                // minimumTime={new Date().getHours() < dateStart.getHours() ? new Date() : undefined}
                onChange={(event, selectedDate) => onChangeStart(event, selectedDate)}
              /> :
              <Pressable onPress={() => setShowStart(true)}
                style={{
                  width: '20%',
                  height: 35,
                  backgroundColor: 'gray',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  left: '80%',
                  bottom: -5
                }}
              >
                <Text style={{ color: 'white' }}>
                  {dateStart.getHours()}:{dateStart.getMinutes() < 10 ? '0' + dateStart.getMinutes() : dateStart.getMinutes()}
                </Text>
              </Pressable>
            }
            {Platform.OS !== 'ios' && showStart &&
              <DateTimePicker
                style={{ width: '90%' }}
                value={dateEnd}
                mode='time'
                display='spinner'
                is24Hour={true}
                locale="vi"
                // minimumDate={dateStart}
                // minimumTime={new Date().getHours() < dateEnd.getHours() ? new Date() : undefined}
                onChange={(event, selectedDate) => {
                  onChangeStart(event, selectedDate);
                  setShowStart(false);
                }}

              />
            }
          </View>
          <View style={{ marginVertical: 10, flexDirection: 'row' }}>
            <Text style={{ color: 'black', fontSize: 18 }}>Tắt</Text>
            {Platform.OS === 'ios' ?
              <DateTimePicker
                style={{ width: '90%' }}
                value={dateEnd}
                mode='time'
                is24Hour={true}
                locale="vi"
                // minimumDate={dateStart}
                // minimumTime={new Date().getHours() < dateEnd.getHours() ? new Date() : undefined}
                onChange={(event, selectedDate) => onChangeEnd(event, selectedDate)}
              /> :
              <Pressable onPress={() => setShowEnd(true)}
                style={{
                  width: '20%',
                  height: 35,
                  backgroundColor: 'gray',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  left: '80%',
                  bottom: -10
                }}
              >
                <Text style={{ color: 'white' }}>
                {dateEnd.getHours()}:{dateEnd.getMinutes() < 10 ? '0' + dateEnd.getMinutes() : dateEnd.getMinutes()}
                </Text>
              </Pressable>
            }
            {Platform.OS !== 'ios' && showEnd &&
              <DateTimePicker
                style={{ width: '90%' }}
                value={dateEnd}
                mode='time'
                display='spinner'
                is24Hour={true}
                locale="vi"
                // minimumDate={dateStart}
                // minimumTime={new Date().getHours() < dateEnd.getHours() ? new Date() : undefined}
                onChange={(event, selectedDate) => {
                  onChangeEnd(event, selectedDate);
                  setShowEnd(false);
                }}
              />
            }
          </View>
          <View style={[
            { flexDirection: 'row', justifyContent: 'space-between' },
            Platform.OS === 'ios' ? { marginVertical: 15 } : { marginVertical: 30 }
          ]}>
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Lặp lại</Text>
            <RNPickerSelect
              useNativeAndroidPickerStyle={false}
              placeholder={{ label: 'Chọn ngày lặp lại', value: -1 }}
              onValueChange={(value) => {
                handleMode(value);
              }}
              items={options}
            />
          </View>
        </View>
        <Pressable
          onPress={handlleStart}
          style={{ width: '100%', height: 50, backgroundColor: Colors.primary, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Bật</Text>
        </Pressable>
      </View>
    </View>
  );
}

const options = [
  { label: 'Mỗi thứ hai', value: 2 },
  { label: 'Mỗi thứ ba', value: 3 },
  { label: 'Mỗi thứ tư', value: 4 },
  { label: 'Mỗi thứ năm', value: 5 },
  { label: 'Mỗi thứ sáu', value: 6 },
  { label: 'Mỗi thứ bảy', value: 7 },
  { label: 'Mỗi chủ nhật', value: 8 },
  { label: 'Hằng ngày', value: 1 }
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    paddingLeft: 20,
  },
  txtHeader: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
  },
  circleImg: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: Colors.icon,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgBody: {
    width: '100%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    width: '100%',
    height: '50%',
    padding: 20,
    justifyContent: 'space-around'
  }
});



export default BulbScreen;
