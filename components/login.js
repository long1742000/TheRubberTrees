import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, TextInput, ToastAndroid, TouchableOpacity, View } from "react-native";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import GeneralButton from "./button";
import { Account } from "../stores/fakeData";
import { checkExist } from "../controller/controller";

const Login = () => {
    const [isShowPassword, setIsShowPassword] = useState(true);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        if (email.length < 1 || phone.length < 1 || password.length < 1) {
            ToastAndroid.show('Please type all information', ToastAndroid.SHORT);
        }
        else {
            const user = { email, phone, password };
            if (checkExist(user, Account)) {
                ToastAndroid.show('SUCCESS!!!', ToastAndroid.SHORT);
            }
            else {
                ToastAndroid.show('Your account does not exist', ToastAndroid.SHORT);
            }
        }
    }

    return (
        <>
            <LinearGradient
                style={{
                    flex: 1
                }}
                colors={[COLORS.secondary, COLORS.primary]}
            >
                <View
                    style={{
                        margin: 20,
                        backgroundColor: COLORS.white,
                        flex: 1,
                        borderRadius: 20
                    }}
                >
                    {/* Company LOGO */}
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <Image source={require('../assets/images/logo.png')}
                            style={{
                                width: 150,
                                height: 150,
                            }}
                        ></Image>
                    </View>

                    {/* Login form */}
                    <View
                        style={{
                            flex: 2,
                            padding: 30
                        }}
                    >
                        {/* Email */}
                        <View
                            style={{
                                marginBottom: 10
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: 400,
                                    marginVertical: 8
                                }}
                            >Email address</Text>
                            <View
                                style={{
                                    width: '100%',
                                    height: 30,
                                    borderColor: COLORS.black,
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    alignItems: "center",
                                    justifyContent: 'center',
                                    paddingLeft: 22
                                }}
                            >
                                <TextInput
                                    placeholder="Enter your email address"
                                    style={{
                                        fontSize: 12,
                                        width: '100%',
                                    }}

                                    onChangeText={(typing) => { setEmail(typing) }}
                                ></TextInput>
                            </View>
                        </View>

                        {/* Phone */}
                        <View
                            style={{
                                marginBottom: 10
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: 400,
                                    marginVertical: 8
                                }}
                            >Phone number</Text>
                            <View
                                style={{
                                    width: '100%',
                                    height: 30,
                                    borderColor: COLORS.black,
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    alignItems: "center",
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    paddingLeft: 22
                                }}
                            >
                                <TextInput
                                    placeholder="+84"
                                    placeholderTextColor={COLORS.black}
                                    style={{
                                        width: '12%',
                                        borderRightWidth: 1,
                                        height: '100%',
                                        borderLeftColor: COLORS.grey,
                                        fontSize: 12
                                    }}
                                ></TextInput>
                                <TextInput
                                    placeholder="Enter your phone number"
                                    style={{
                                        fontSize: 12,
                                        width: '88%',
                                        paddingLeft: 10
                                    }}

                                    onChangeText={(typing) => { setPhone(typing) }}
                                ></TextInput>
                            </View>
                        </View>

                        {/* Password */}
                        <View
                            style={{
                                marginBottom: 10
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 12,
                                    fontWeight: 400,
                                    marginVertical: 8
                                }}
                            >Password</Text>
                            <View
                                style={{
                                    width: '100%',
                                    height: 30,
                                    borderColor: COLORS.black,
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    alignItems: "center",
                                    justifyContent: 'center',
                                    paddingLeft: 22
                                }}
                            >
                                <TextInput
                                    placeholder="Enter your password"
                                    secureTextEntry={isShowPassword}
                                    style={{
                                        fontSize: 12,
                                        width: '100%',
                                    }}

                                    onChangeText={(typing) => { setPassword(typing) }}
                                ></TextInput>

                                <TouchableOpacity
                                    onPress={() => setIsShowPassword(!isShowPassword)}
                                    style={{
                                        position: 'absolute',
                                        right: 12
                                    }}
                                >
                                    {
                                        isShowPassword == true ?
                                            (
                                                <Ionicons name="eye" size={16}></Ionicons>
                                            ) : (
                                                <Ionicons name="eye-off" size={16}></Ionicons>
                                            )
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* Button sign in */}
                        <GeneralButton
                            title="Sign in"
                            fontSize={12}
                            filled

                            style={{
                                marginTop: 12,
                            }}

                            onPress={() => { signIn() }}
                        ></GeneralButton>
                    </View>
                </View>
            </LinearGradient>
        </>
    )
}

export default Login;