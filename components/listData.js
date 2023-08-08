import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../constants/colors";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { ListTrees, Robotics } from "../stores/fakeData";

const ListData = ({ navigation }) => {

    const [list, setList] = useState('tree');
    const [data, setData] = useState([...ListTrees]);

    return (
        <>
            {/* Button change list */}
            <View
                style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: 100
                }}
            >
                <TouchableOpacity
                    style={{
                        borderColor: COLORS.grey,
                        borderWidth: 1,
                        paddingVertical: 10,
                        width: '100%',
                        flex: 1,
                        marginLeft: 10,
                        alignItems: 'center'
                    }}

                    onPress={() => { setList('tree'); setData([...ListTrees]) }}
                >
                    <Text style={{ color: list === 'tree' ? COLORS.primary : COLORS.black }}>Rubber trees</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        borderColor: COLORS.grey,
                        borderWidth: 1,
                        paddingVertical: 10,
                        width: '100%',
                        flex: 1,
                        marginRight: 10,
                        alignItems: 'center'
                    }}

                    onPress={() => { setList('robot'); setData([...Robotics]) }}
                >
                    <Text style={{ color: list === 'robot' ? COLORS.primary : COLORS.black }}>Robotics</Text>
                </TouchableOpacity>
            </View >

            <ScrollView
                style={{
                    flex: 1
                }}
            >
                {/* List data */}
                <View
                    style={{
                        alignItems: 'center'
                    }}
                >
                    {list === 'tree' &&
                        data.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        borderWidth: 1,
                                        borderColor: COLORS.grey,
                                        borderRadius: 5,
                                        width: '90%',
                                        height: 50,
                                        backgroundColor: COLORS.white,
                                        flexDirection: 'row',
                                        marginBottom: 5
                                    }}

                                    onPress={() => { navigation.push('Detail', item) }}
                                >
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Text
                                            style={{
                                                marginLeft: 10,
                                                color: COLORS.primary,
                                            }}
                                        >
                                            ID: {item.id}
                                        </Text>
                                        <Text
                                            style={{
                                                marginLeft: 10,
                                                color: COLORS.primary,
                                                fontSize: 10
                                            }}
                                        >
                                            Longevity: {item.longevity}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'flex-end'
                                        }}
                                    >
                                        <Ionicons style={{ color: COLORS.primary, marginRight: 10 }} name="arrow-forward-circle-outline" size={20} ></Ionicons>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                    {list === 'robot' &&
                        data.map((item, index) => {
                            const data = ListTrees.filter(x => x.id === item.treeFollowing);
                            return (
                                <TouchableOpacity
                                    key={index}
                                    style={{
                                        borderWidth: 1,
                                        borderColor: COLORS.grey,
                                        borderRadius: 5,
                                        width: '90%',
                                        height: 50,
                                        backgroundColor: COLORS.white,
                                        flexDirection: 'row',
                                        marginBottom: 5
                                    }}

                                    onPress={() => { navigation.push('Detail', data[0]) }}
                                >
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Text
                                            style={{
                                                marginLeft: 10,
                                                color: COLORS.primary,
                                            }}
                                        >
                                            ID: {item.id}
                                        </Text>
                                        <Text
                                            style={{
                                                marginLeft: 10,
                                                color: COLORS.primary,
                                                fontSize: 10
                                            }}
                                        >
                                            Status: {item.status == 1 ? 'ON' : 'OFF'}
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'flex-end'
                                        }}
                                    >
                                        <Ionicons style={{ color: COLORS.primary, marginRight: 10 }} name="arrow-forward-circle-outline" size={20} ></Ionicons>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </>
    )
}

export default ListData;