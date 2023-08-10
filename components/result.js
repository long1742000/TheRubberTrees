import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Countries, Fields, ListTrees, Regions } from "../stores/fakeData";

const Result = ({ route, navigation }) => {

    const [listTree, setListTree] = useState([...route.params.listTree]);
    const [listRobotics, setListRobotics] = useState([...route.params.listRobotic]);
    const [listRoboticFollowTree, setListRoboticFollowTree] = useState([...route.params.listRoboticFollowTree]);
    const [listCountry, setlistCountry] = useState([...route.params.listCountry]);
    const [listRegion, setlistRegion] = useState([...route.params.listRegion]);
    const [listRegionOfCountry, setlistRegionOfCountry] = useState([...route.params.listRegionOfCountry]);
    const [listField, setlistField] = useState([...route.params.listField]);
    const [listFieldOfRegion, setlistFieldOfRegion] = useState([...route.params.listFieldOfRegion]);
    const [listTreeInField, setlistTreeInField] = useState([...route.params.listTreeInField]);
    const [listPlan, setlistPlan] = useState([...route.params.listPlan]);

    return (
        <>
            {/* If dont have any result */}
            {listTree.length == 0 && listRobotics.length == 0 && listRoboticFollowTree.length == 0 && listRegion.length == 0 && listRegionOfCountry.length == 0 &&
                listCountry.length == 0 && listField.length == 0 && listFieldOfRegion.length == 0 && listTreeInField.length == 0 && listPlan.length == 0 &&
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: 'gray'
                        }}
                    >No result</Text>
                </View>
            }

            {/* List result */}
            <ScrollView>

                {/* Country */}
                {listCountry.length > 0 &&
                    <View
                        style={{
                            width: '100%'
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <View
                                style={{
                                    flex: 3
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
                                >Countries</Text>
                            </View>
                            <View
                                style={{
                                    alignItems: 'flex-end'
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
                                >{listCountry.length} {listCountry.length > 1 ? 'Results' : 'Result'}</Text>
                            </View>

                        </View>
                        <View
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            {listCountry.map((item, index) => {
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

                                        onPress={() => { navigation.push('Detail', { data: item, level: 'country' }) }}
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
                                                Name: {item.name}
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

                {/* Regions */}
                {listRegion.length > 0 &&
                    <View
                        style={{
                            width: '100%'
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <View
                                style={{
                                    flex: 3
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
                                >Regions</Text>
                            </View>
                            <View
                                style={{
                                    alignItems: 'flex-end'
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
                                >{listRegion.length} {listRegion.length > 1 ? 'Results' : 'Result'}</Text>
                            </View>

                        </View>
                        <View
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            {listRegion.map((item, index) => {
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

                                        onPress={() => { navigation.push('Detail', { data: item, level: 'region' }) }}

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
                                                Name: {item.name}
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

                {/* Regions in country */}
                {listRegionOfCountry.length > 0 &&
                    <View
                        style={{
                            width: '100%'
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <View
                                style={{
                                    flex: 3
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
                                >Regions in country</Text>
                            </View>
                            <View
                                style={{
                                    alignItems: 'flex-end'
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
                                >{listRegionOfCountry.length} {listRegionOfCountry.length > 1 ? 'Results' : 'Result'}</Text>
                            </View>

                        </View>
                        <View
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            {listRegionOfCountry.map((item, index) => {
                                const data = Countries.filter(x => x.id === item.countryId);
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

                                        onPress={() => { navigation.push('Detail', { data: item, level: 'region' }) }}
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
                                                Name: {item.name}
                                            </Text>
                                            <Text
                                                style={{
                                                    marginLeft: 10,
                                                    color: COLORS.primary,
                                                    fontSize: 10
                                                }}
                                            >
                                                In: {data[0].name}
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

                {/* Fields */}
                {listField.length > 0 &&
                    <View
                        style={{
                            width: '100%'
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <View
                                style={{
                                    flex: 3
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
                                >Fields</Text>
                            </View>
                            <View
                                style={{
                                    alignItems: 'flex-end'
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
                                >{listField.length} {listField.length > 1 ? 'Results' : 'Result'}</Text>
                            </View>

                        </View>
                        <View
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            {listField.map((item, index) => {
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

                                        onPress={() => { navigation.push('Detail', { data: item, level: 'field' }) }}
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
                                                Name: {item.name}
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

                {/* Fields in Region */}
                {listFieldOfRegion.length > 0 &&
                    <View
                        style={{
                            width: '100%'
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <View
                                style={{
                                    flex: 3
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
                                >Fields in region</Text>
                            </View>
                            <View
                                style={{
                                    alignItems: 'flex-end'
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
                                >{listFieldOfRegion.length} {listFieldOfRegion.length > 1 ? 'Results' : 'Result'}</Text>
                            </View>

                        </View>
                        <View
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            {listFieldOfRegion.map((item, index) => {
                                const data = Regions.filter(x => x.id === item.regionId);
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
                                        onPress={() => { navigation.push('Detail', { data: item, level: 'field' }) }}

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
                                                Name: {item.name}
                                            </Text>
                                            <Text
                                                style={{
                                                    marginLeft: 10,
                                                    color: COLORS.primary,
                                                    fontSize: 10
                                                }}
                                            >
                                                In: {data[0].name}
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

                {/* Rubber trees */}
                {listTree.length > 0 &&
                    <View
                        style={{
                            width: '100%'
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <View
                                style={{
                                    flex: 3
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
                            </View>
                            <View
                                style={{
                                    alignItems: 'flex-end'
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
                                >{listTree.length} {listTree.length > 1 ? 'Results' : 'Result'}</Text>
                            </View>

                        </View>
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

                                        onPress={() => { navigation.push('Detail', { data: item, level: 'tree' }) }}
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

                {/* Trees of field */}
                {listTreeInField.length > 0 &&
                    <View
                        style={{
                            width: '100%'
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <View
                                style={{
                                    flex: 3
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
                                >Rubber trees of field</Text>
                            </View>
                            <View
                                style={{
                                    alignItems: 'flex-end'
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
                                >{listTreeInField.length} {listTreeInField.length > 1 ? 'Results' : 'Result'}</Text>
                            </View>

                        </View>
                        <View
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            {listTreeInField.map((item, index) => {
                                const data = Fields.filter(x => x.id === item.fieldId);
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
                                        onPress={() => { navigation.push('Detail', { data: item, level: 'tree' }) }}

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
                                                Of: {data[0].name}
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
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <View
                                style={{
                                    flex: 3
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
                            </View>
                            <View
                                style={{
                                    alignItems: 'flex-end'
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
                                >{listRobotics.length} {listRobotics.length > 1 ? 'Results' : 'Result'}</Text>
                            </View>

                        </View>
                        <View
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            {listRobotics.map((item, index) => {
                                const data = ListTrees.filter(x => x.id === item.treeFollowing);
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
                                        onPress={() => { navigation.push('Detail', { data: data[0], level: 'tree' }) }}
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
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <View
                                style={{
                                    flex: 3
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
                                >Robotic following rubber tree</Text>
                            </View>
                            <View
                                style={{
                                    alignItems: 'flex-end'
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
                                >{listRoboticFollowTree.length} {listRoboticFollowTree.length > 1 ? 'Results' : 'Result'}</Text>
                            </View>

                        </View>
                        <View
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            {listRoboticFollowTree.map((item, index) => {
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

                                        onPress={() => { navigation.push('Detail', { data: data[0], level: 'tree' }) }}
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

                {/* Plans */}
                {listPlan.length > 0 &&
                    <View
                        style={{
                            width: '100%'
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <View
                                style={{
                                    flex: 3
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
                                >Plans</Text>
                            </View>
                            <View
                                style={{
                                    alignItems: 'flex-end'
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
                                >{listPlan.length} {listPlan.length > 1 ? 'Results' : 'Result'}</Text>
                            </View>

                        </View>
                        <View
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            {listPlan.map((item, index) => {
                                const data = Fields.filter(x => x.id === item.fieldId);
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        style={{
                                            borderWidth: 1,
                                            borderColor: COLORS.grey,
                                            borderRadius: 5,
                                            width: '90%',
                                            height: 60,
                                            backgroundColor: COLORS.white,
                                            flexDirection: 'row',
                                            marginBottom: 5
                                        }}

                                        onPress={() => { navigation.push('Detail', { data: item, level: 'plan' }) }}

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
                                                Name: {item.name}
                                            </Text>
                                            <Text
                                                style={{
                                                    marginLeft: 10,
                                                    color: COLORS.primary,
                                                    fontSize: 10
                                                }}
                                            >
                                                Plan of field: {data[0].name}
                                            </Text>
                                            <Text
                                                style={{
                                                    marginLeft: 10,
                                                    color: COLORS.primary,
                                                    fontSize: 10
                                                }}
                                            >
                                                Start date: {`${item.startDate.day}/${item.startDate.month}/${item.startDate.year}`}
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