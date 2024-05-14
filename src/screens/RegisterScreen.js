import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView, StyleSheet, TextInput, Pressable } from 'react-native';
import Colors from '../../theme/Colors';


const RegisterScreen = ({ navigation }) => {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.txtHeader1}>Smart</Text>
                    <Text style={styles.txtHeader2}>Vivarium</Text>
                </View>
                <Text style={styles.txtHeader3}>Đăng ký</Text>
            </View>
            <View style={styles.body}>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput style={styles.input} placeholder='Số điện thoại' placeholderTextColor='black'
                        onChangeText={(text) => {
                            setPhone(text);
                        }}
                    />
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput style={styles.input} placeholder='Mật khẩu' secureTextEntry placeholderTextColor='black'
                        onChangeText={(text) => {
                            setPassword(text);
                        }}
                    />
                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <TextInput style={styles.input} placeholder='Nhập lại mật khẩu' secureTextEntry placeholderTextColor='black'
                        onChangeText={(text) => {
                            setRePassword(text);
                        }}
                    />
                </View>
                {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                    <Checkbox checked>Nhớ đăng nhập</Checkbox>
                    <Pressable>
                        <Text style={{ fontWeight: 'bold' }}>Quên mật khẩu</Text>
                    </Pressable>
                </View> */}
            </View>
            <View style={styles.login}>
                <Pressable style={{ width: '80%', height: 50, backgroundColor: Colors.primary, borderRadius: 10, justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    <Text style={{ fontSize: 22, color: 'white', fontWeight: 'bold' }}>Đăng ký</Text>
                </Pressable>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Hoặc </Text>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('Login');
                        }}
                    >
                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Đăng nhập</Text>
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
        height: 250,
        justifyContent: 'space-around',
        alignItems: 'center',
    }

})

export default RegisterScreen;
