import { Image, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../constants/colors";
import { removeStorage } from "../controller/controller";

const Account = ({ navigation }) => {
    return (
        <>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image source={require('../assets/images/user.jpg')}
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 100
                    }}
                ></Image>
            </View>

            <View
                style={{
                    flex: 1,
                    alignItems: 'center'
                }}
            >
                <TouchableOpacity
                    style={{
                        width: '90%',
                        borderWidth: 1,
                        borderColor: COLORS.grey,
                        borderRadius: 10,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 20,
                        marginBottom: 10
                    }}
                >
                    <Text style={{ color: COLORS.primary }}>Change password</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '90%',
                        borderWidth: 1,
                        borderColor: COLORS.grey,
                        borderRadius: 10,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingLeft: 20
                    }}

                    onPress={() => { removeStorage('user'); navigation.replace('Login') }}
                >
                    <Text style={{ color: COLORS.red, fontWeight: 500 }}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Account;