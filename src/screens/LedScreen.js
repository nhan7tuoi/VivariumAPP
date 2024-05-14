import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable } from 'react-native';
import Colors from '@/theme/Colors';
import ColorPicker from 'react-native-wheel-color-picker';
import Slider from '@react-native-community/slider';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const LedScreen = ({ navigation }) => {
  const picker = useRef(null);
  const [color, setColor] = useState('#FF0000');
  const [brightness, setBrightness] = useState(50);

  const handleBrightness = (currentBrightness) => {
    setBrightness(currentBrightness);
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.txtHeader}>Đèn RGB</Text>
      </View>
      <View style={styles.imgBody}>
        <View style={{ width: 300, height: 300, alignSelf: 'center', transform: [{ scale: 0.9 }] }}>
          <ColorPicker
            ref={picker}
            color={color}
            gapSize={30}
            thumbSize={20}
            sliderHidden={true}
            swatches={false}
            onColorChange={(color) => setColor(color)}
          />
          <Text style={{ alignSelf: 'flex-end', fontWeight: 'bold' }}>{color}</Text>
        </View>
      </View>
      <View style={{ width: '100%', height: '10%', flexDirection: 'row', padding: 20 }}>
        <Pressable>
          <MaterialCommunityIcons name="lightbulb-off-outline" size={28} color="black" />
        </Pressable>
        <Slider
          value={50}
          style={{ width: '80%', height: 30, marginTop: 10, paddingBottom: 35 }}
          minimumValue={1}
          maximumValue={100}
          minimumTrackTintColor={Colors.icon}
          maximumTrackTintColor={Colors.icon}
          onValueChange={(value) => handleBrightness(value)}
        />
        <Pressable>
          <MaterialCommunityIcons name="lightbulb-on-outline" size={28} color="black" style={{ paddingLeft: 10 }} />
        </Pressable>
      </View>
      <View style={{ width: '100%', height: '12%', padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Đã lưu</Text>
        <View style={{ backgroundColor: Colors.icon, borderRadius: 10 }}>
          <FlatList
            horizontal
            data={colors}
            keyExtractor={(item) => item.color}
            renderItem={({ item }) => (
              <Pressable onPress={() => setColor(item.color)}
                style={{ width: 30, height: 30, backgroundColor: item.color, margin: 5, borderRadius: 10 }} />
            )}
          />
        </View>
      </View>
      <View style={{ width: '100%', height: '15%', padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Có sẳn</Text>
        <View style={{ backgroundColor: Colors.icon, borderRadius: 10 }}>
          <FlatList
            horizontal
            data={colors}
            keyExtractor={(item) => item.color}
            renderItem={({ item }) => (
              <Pressable onPress={() => setColor(item.color)}
                style={{ width: 30, height: 30, backgroundColor: item.color, margin: 5, borderRadius: 10 }} />
            )}
          />
        </View>
      </View>
      <View style={{ width: '100%', height: '45%', flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
        <Pressable
          onPress={() => {
            navigation.navigate('RegimeLed');
          }}
          style={{ width: '40%', height: 50, backgroundColor: Colors.icon, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Khác</Text>
        </Pressable>
        <Pressable style={{ width: '40%', height: 50, backgroundColor: Colors.primary, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Bật</Text>
        </Pressable>
      </View>
    </View >
  );
}

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
    width: 190,
    height: 190,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: Colors.icon,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

const colors = [
  { color: '#FF0000', name: 'Đỏ' },
  { color: '#00FF00', name: 'Xanh lá' },
  { color: '#0000FF', name: 'Xanh dương' },
  { color: '#FFFF00', name: 'Vàng' },
  { color: '#FF00FF', name: 'Hồng' },
  { color: '#00FFFF', name: 'Xanh lam' },
  { color: '#FFFFFF', name: 'Trắng' },
  { color: '#000000', name: 'Đen' },
  { color: '#FFA500', name: 'Cam' },
  { color: '#800080', name: 'Tím' }
]

export default LedScreen;
