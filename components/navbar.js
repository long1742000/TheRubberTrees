import { TouchableOpacity, View } from "react-native"
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const NavBar = ({ navigation }) => {
    return (
        <View
            style={{
                position: 'absolute',
                bottom: 0,
                borderTopColor: COLORS.grey,
                borderTopWidth: 1,
                width: '100%',
                flexDirection: 'row',
                height: 40,
                backgroundColor: COLORS.white
            }}
        >
            <TouchableOpacity
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}

                onPress={() => { navigation.navigate('Home') }}
            >
                <Ionicons style={{ color: COLORS.primary }} name="home" size={16}></Ionicons>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Ionicons style={{ color: COLORS.primary }} name="list" size={20}></Ionicons>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Ionicons style={{ color: COLORS.primary }} name="settings" size={16}></Ionicons>
            </TouchableOpacity>
        </View>
    )
}

export default NavBar;