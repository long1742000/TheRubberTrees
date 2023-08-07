import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { removeStorage, searchAllItem } from "../controller/controller";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListTrees, Robotics } from "../stores/fakeData";

const Home = ({ navigation }) => {

    // Check user sign in
    const checkSignIn = async () => {
        try {
            await AsyncStorage.getItem('user')
                .then(value => {
                    // setUser(JSON.parse(value));
                    if (value != null) {

                    }
                    else {
                        navigation.replace('Login');
                    }
                })
        } catch (e) {
            console.log(e);
        }
    };

    // Typing keyword
    const [keyword, setKeyword] = useState('');

    // componentDidMount
    useEffect(() => {
        checkSignIn();
    }, [])

    // Click search
    const clickSearch = () => {
        const rs = searchAllItem(keyword, ListTrees, Robotics);
        navigation.push('Result', rs);
    }

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

            {/* Search form */}
            <View
                style={{
                    flex: 2,
                    alignItems: 'center',
                    paddingTop: 100
                }}
            >
                <View
                    style={{
                        borderColor: COLORS.primary,
                        borderWidth: 2,
                        height: 40,
                        width: '80%',
                        flexDirection: 'row',
                        borderRadius: 10
                    }}
                >

                    {/* Search */}
                    <View
                        style={{
                            flex: 5,
                            justifyContent: 'center',
                            paddingLeft: 10,
                            borderRightColor: COLORS.primary,
                            borderRightWidth: 2
                        }}
                    >
                        <TextInput
                            placeholder="Search something..."
                            onChangeText={(newText) => { setKeyword(newText) }}
                        >

                        </TextInput>
                    </View>

                    {/* Search button */}
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}

                        onPress={() => { clickSearch() }}
                    >
                        <Ionicons style={{ color: COLORS.primary }} name="search" size={18}></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default Home;