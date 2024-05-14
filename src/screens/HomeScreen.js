import Colors from '@/theme/Colors';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { Switch } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { removeAuth } from '../redux/authSlice';

const HomeScreen = () => {
    const dispatch = useDispatch();
    const [switchValue1, setSwitchValue1] = useState(false);
    const [switchValue2, setSwitchValue2] = useState(false);
    const [switchValue3, setSwitchValue3] = useState(false);
    const [switchValue4, setSwitchValue4] = useState(false);
    const [switchValue5, setSwitchValue5] = useState(false);

    const date = new Date();
    const dayOfWeek = date.getDay();
    const daysOfWeek = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dayName = daysOfWeek[dayOfWeek];
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();            
    const formatDate = `${dayName}, ${dayOfMonth}/${month}/${year}`;

    const onChangeSwitch = (checked, num) => {
        if (num === 1) {
            setSwitchValue1(checked);
        } else if (num === 2) {
            setSwitchValue2(checked);
        } else if (num === 3) {
            setSwitchValue3(checked);
        } else if (num === 4) {
            setSwitchValue4(checked);
        } else if (num === 5) {
            setSwitchValue5(checked);
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row', width: '60%', justifyContent: 'space-between' }}>
                    {/* <Image source={require('../../assets/images/avt.png')} style={{ width: 50, height: 50 }} /> */}
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Trần Quốc Trọng</Text>
                        <Text style={{ fontSize: 14 }}>{formatDate}</Text>
                    </View>
                </View>
                <Pressable onPress={
                    () => {
                        dispatch(removeAuth());
                    }
                }>
                    <Image source={require('../../assets/images/logout.png')} style={{ width: 50, height: 50 }} />
                </Pressable>
            </View>
            <View style={styles.content}>
                <View style={styles.weather}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}>28</Text>
                            <Text style={{ fontSize: 10, color: 'white', marginTop: -5 }}> độ C</Text>
                        </View>
                        <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/icons/weather.png')} style={{ width: 28, height: 28 }} />
                        </View>
                    </View>
                    <View style={{ height: 0.5, borderWidth: 1, borderColor: "black", borderStyle: 'dotted' }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}>70%</Text>
                            <Text style={{ fontSize: 10, color: 'white', marginTop: -5 }}> Độ ẩm</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}>8h</Text>
                            <Text style={{ fontSize: 10, color: 'white', marginTop: -5 }}> Đèn</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 26, fontWeight: 'bold', color: 'white' }}>40%</Text>
                            <Text style={{ fontSize: 10, color: 'white', marginTop: -5 }}>Độ ẩm đất</Text>
                        </View>
                    </View>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.action}>
                <View style={[styles.itemAction, {
                    backgroundColor: switchValue1 ? Colors.weatherActive : Colors.weather

                }]}>
                    <View>
                        <View style={{ width: 50, height: 50, backgroundColor: Colors.iconActive, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/denRoi.png')} style={{ width: 28, height: 28 }} />
                        </View>
                        <Text style={{ color: switchValue1 ? 'white' : 'black', fontSize: 16, fontWeight: 'bold' }}>Đèn rọi</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ color: switchValue1 ? 'white' : 'black', fontSize: 12, fontWeight: 'bold' }}>
                            {switchValue1 ? 'Tắt' : 'Bật'}
                        </Text>
                        <Switch color={Colors.primary}  value={switchValue1} onValueChange={
                            (checked) => onChangeSwitch(checked, 1)
                        } />
                    </View>
                </View>
                <View style={[styles.itemAction, {
                    backgroundColor: switchValue2 ? Colors.weatherActive : Colors.weather

                }]}>
                    <View>
                        <View style={{ width: 50, height: 50, backgroundColor: Colors.iconActive, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/khoi.png')} style={{ width: 28, height: 28 }} />
                        </View>
                        <Text style={{ color: switchValue2 ? 'white' : 'black', fontSize: 16, fontWeight: 'bold' }}>Khói</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ color: switchValue2 ? 'white' : 'black', fontSize: 12, fontWeight: 'bold' }}>
                            {switchValue2 ? 'Tắt' : 'Bật'}
                        </Text>
                        <Switch color={Colors.primary}  value={switchValue2} onValueChange={
                            (checked) => onChangeSwitch(checked, 2)
                        } />
                    </View>
                </View>
                <View style={[styles.itemAction, {
                    backgroundColor: switchValue3 ? Colors.weatherActive : Colors.weather

                }]}>
                    <View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <View style={{ width: 50, height: 50, backgroundColor: Colors.iconActive, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../assets/images/phunSuong.png')} style={{ width: 28, height: 28 }} />
                            </View>
                            <Text style={{color:switchValue3 ? 'white' : 'black', fontSize: 20, fontWeight: 'bold' }}>70%</Text>
                        </View>
                        <Text style={{ color: switchValue3 ? 'white' : 'black', fontSize: 16, fontWeight: 'bold' }}>Phun sương</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ color: switchValue3 ? 'white' : 'black', fontSize: 12, fontWeight: 'bold' }}>
                            {switchValue3 ? 'Tắt' : 'Bật'}
                        </Text>
                        <Switch color={Colors.primary}  value={switchValue3} onValueChange={
                            (checked) => onChangeSwitch(checked, 3)
                        } />
                    </View>
                </View>
                <View style={[styles.itemAction, {
                    backgroundColor: switchValue4 ? Colors.weatherActive : Colors.weather

                }]}>
                    <View>
                        <View style={{ width: 50, height: 50, backgroundColor: Colors.iconActive, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/thacNuoc.png')} style={{ width: 28, height: 28 }} />
                        </View>
                        <Text style={{ color: switchValue4 ? 'white' : 'black', fontSize: 16, fontWeight: 'bold' }}>Thác nước</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ color: switchValue4 ? 'white' : 'black', fontSize: 12, fontWeight: 'bold' }}>
                            {switchValue4 ? 'Tắt' : 'Bật'}
                        </Text>
                        <Switch color={Colors.primary}  value={switchValue4} onValueChange={
                            (checked) => onChangeSwitch(checked, 4)
                        } />
                    </View>
                </View>
                <View style={[styles.itemAction, {
                    backgroundColor: switchValue5 ? Colors.weatherActive : Colors.weather

                }]}>
                    <View>
                        <View style={{ width: 50, height: 50, backgroundColor: Colors.iconActive, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/rgb.png')} style={{ width: 28, height: 28 }} />
                        </View>
                        <Text style={{ color: switchValue5 ? 'white' : 'black', fontSize: 16, fontWeight: 'bold' }}>Đèn RGB</Text>
                    </View>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ color: switchValue5 ? 'white' : 'black', fontSize: 12, fontWeight: 'bold' }}>
                            {switchValue5 ? 'Tắt' : 'Bật'}
                        </Text>
                        <Switch color={Colors.primary}  value={switchValue5} onValueChange={
                            (checked) => onChangeSwitch(checked, 5)
                        } />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background
    },
    header: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    content: {
        width: '100%',
        height: '30%',
        padding: 20
    },
    weather: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.primary,
        borderRadius: 15,
        padding: 15,
        justifyContent: 'space-between'
    },
    action: {
        width: '100%',
        height: 500,
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
    itemAction: {
        width: "40%",
        height: 140,
        marginLeft: 25,
        marginBottom: 10,
        borderRadius: 15,
        padding: 10,
        justifyContent: 'space-between'
    }
});

export default HomeScreen;
