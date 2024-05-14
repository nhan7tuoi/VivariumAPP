import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, Pressable, Platform } from 'react-native';
import Colors from '../../theme/Colors';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch } from 'react-redux';
import { setAuth } from '../redux/authSlice';

const LoginScreen = ({ navigation }) => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isRemember, setIsRemember] = useState(false);
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(
            setAuth({
                user: {
                    name: 'Phạm Đức Nhân'
                },
                accessToken: '123456',
            })
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.txtHeader1}>Smart</Text>
                    <Text style={styles.txtHeader2}>Vivarium</Text>
                </View>
                <Text style={styles.txtHeader3}>Đăng nhập</Text>
            </View>
            <View style={styles.body}>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput style={styles.input} placeholder='Số điện thoại' placeholderTextColor='black' />
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput style={styles.input} placeholder='Mật khẩu' secureTextEntry placeholderTextColor='black' />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                    <View style={{flexDirection:'row'}}>
                        <BouncyCheckbox
                            size={20}
                            fillColor={Colors.primary}
                            unFillColor="#FFFFFF"
                            iconStyle={{ borderColor: "red" }}
                            innerIconStyle={{ borderWidth: 2 }}
                            onPress={(isChecked) => { setIsRemember(isChecked) }}
                        />
                        <Text style={{ fontSize: 16 }}>Nhớ đăng nhập</Text>
                    </View>
                    <Pressable>
                        <Text style={{ fontWeight: 'bold' }}>Quên mật khẩu</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.login}>
                <Pressable
                    onPress={handleLogin}
                    style={{ width: '80%', height: 50, backgroundColor: Colors.primary, borderRadius: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>Đăng nhập</Text>
                </Pressable>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Hoặc </Text>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('Register');
                        }}
                    >
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Đăng ký</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    header: {
        width: '100%',
        height: '30%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    txtHeader1: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primary,
    },
    txtHeader2: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    txtHeader3: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    body: {
        width: '100%',
        height: '30%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 50,
        backgroundColor: Colors.input,
        borderRadius: 10,
        paddingLeft: 20,
        fontSize: 16,
        color: 'black',
    },
    login: {
        height: '40%',
        justifyContent: 'space-around',
        alignItems: 'center',
    }

})


export default LoginScreen;
