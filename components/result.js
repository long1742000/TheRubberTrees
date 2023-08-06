import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import NavBar from "./navbar";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const Result = ({ route, navigation }) => {

    const [listTree, setListTree] = useState([...route.params.listTree]);
    const [listRobotics, setListRobotics] = useState([...route.params.listRobotic]);
    const [listRoboticFollowTree, setListRoboticFollowTree] = useState([...route.params.listRoboticFollowTree]);

    return (
        <>
            <ScrollView>
                {/* Rubber trees */}
                {listTree.length > 0 &&
                    <View
                        style={{
                            width: '100%'
                        }}
                    >
                        <Text
                            style={{
                                borderBottomColor: COLORS.grey,
                                borderBottomWidth: 1,
                                margin: 10,
                                fontSize: 15,
                                fontWeight: 500,
                                color: 'gray'
                            }}
                        >Rubber trees</Text>
                        <View
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            {listTree.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={{
                                            borderWidth: 1,
                                            borderColor: COLORS.grey,
                                            borderRadius: 5,
                                            width: '90%',
                                            height: 40,
                                            backgroundColor: COLORS.white,
                                            flexDirection: 'row',
                                            marginBottom: 5
                                        }}
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
                            })}
                        </View>
                    </View>
                }


                {/* Robotics */}
                {listRobotics.length > 0 &&
                    <View
                        style={{
                            width: '100%'
                        }}
                    >
                        <Text
                            style={{
                                borderBottomColor: COLORS.grey,
                                borderBottomWidth: 1,
                                margin: 10,
                                fontSize: 15,
                                fontWeight: 500,
                                color: 'gray'
                            }}
                        >Robotics</Text>
                        <View
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            {listRobotics.map((item, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={{
                                            borderWidth: 1,
                                            borderColor: COLORS.grey,
                                            borderRadius: 5,
                                            width: '90%',
                                            height: 40,
                                            backgroundColor: COLORS.white,
                                            flexDirection: 'row',
                                            marginBottom: 5
                                        }}
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
                            })}
                        </View>
                    </View>
                }

                {/* Robotic following Rubber tree */}
                {listRoboticFollowTree.length > 0 &&
                    <View
                        style={{
                            width: '100%'
                        }}
                    >
                        <Text
                            style={{
                                borderBottomColor: COLORS.grey,
                                borderBottomWidth: 1,
                                margin: 10,
                                fontSize: 15,
                                fontWeight: 500,
                                color: 'gray'
                            }}
                        >Robotic following Rubber tree</Text>
                        <View
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            {listRoboticFollowTree.map((item, index) => {
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
                                                Following tree: {item.treeFollowing}
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
                            })}
                        </View>
                    </View>
                }
            </ScrollView>
        </>
    )
}

export default Result;