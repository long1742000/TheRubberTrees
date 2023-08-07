import { Image, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const Settings = ({ navigation }) => {
    return (
        <>
            {/* LOGO */}
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

            <View
                style={{
                    flex: 3,
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
                        paddingLeft: 20
                    }}

                    onPress={() => { navigation.push('Account') }}
                >
                    <Ionicons style={{ color: COLORS.primary }} name='person' size={16}> Account</Ionicons>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default Settings;