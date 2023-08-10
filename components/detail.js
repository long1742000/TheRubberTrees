import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Countries, Fields, ListTrees, Plans, Regions, Robotics } from "../stores/fakeData";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const Detail = ({ navigation, route }) => {
    const data = route.params.data;
    const level = route.params.level;

    console.log(data);
    console.log(level);

    switch (level) {
        case 'country':
            const listRegion = Regions.filter(item => item.countryId == data.id);
            return (
                <>
                    {/* Title */}
                    <View
                    >
                        <Text
                            style={{
                                color: 'gray',
                                fontWeight: 500,
                                margin: 10,
                                borderBottomWidth: 1,
                                borderColor: COLORS.grey
                            }}
                        >COUNTRY ID: {data.id}</Text>
                    </View>

                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                borderColor: COLORS.grey,
                                borderWidth: 1,
                                borderRadius: 5,
                                width: '90%',
                                backgroundColor: COLORS.white,
                            }}
                        >
                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    padding: 10
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <Text style={{ fontWeight: 500 }}>Name:</Text>
                                </View>

                                <Text style={{ color: COLORS.primary }}>{data.name}</Text>
                            </View>
                        </View>
                    </View>

                    {listRegion.length > 0 &&
                        <>
                            <View
                            >
                                <Text
                                    style={{
                                        color: 'gray',
                                        fontWeight: 500,
                                        margin: 10,
                                        borderBottomWidth: 1,
                                        borderColor: COLORS.grey
                                    }}
                                >Regions in {data.name}</Text>
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
                        </>
                    }
                </>
            )
        case 'region':
            const listField = Fields.filter(item => item.regionId == data.id);
            const country = Countries.filter(item => item.id == data.countryId);
            return (
                <>
                    {/* Title */}
                    <View
                    >
                        <Text
                            style={{
                                color: 'gray',
                                fontWeight: 500,
                                margin: 10,
                                borderBottomWidth: 1,
                                borderColor: COLORS.grey
                            }}
                        >REGION ID: {data.id}</Text>
                    </View>

                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                borderColor: COLORS.grey,
                                borderWidth: 1,
                                borderRadius: 5,
                                width: '90%',
                                backgroundColor: COLORS.white,
                            }}
                        >
                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    padding: 10
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <Text style={{ fontWeight: 500 }}>Name:</Text>
                                </View>

                                <Text style={{ color: COLORS.primary }}>{data.name} {country[0].name}</Text>
                            </View>
                        </View>
                    </View>

                    {listField.length > 0 &&
                        <>
                            <View
                            >
                                <Text
                                    style={{
                                        color: 'gray',
                                        fontWeight: 500,
                                        margin: 10,
                                        borderBottomWidth: 1,
                                        borderColor: COLORS.grey
                                    }}
                                >Fields in {data.name} {country[0].name}</Text>
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
                        </>
                    }
                </>
            )
        case 'field':
            const listPlan = Plans.filter(item => item.fieldId == data.id);
            const listTree = ListTrees.filter(item => item.fieldId == data.id);
            return (
                <ScrollView
                    style={{
                        flex: 1
                    }}
                >
                    {/* Title */}
                    <View
                    >
                        <Text
                            style={{
                                color: 'gray',
                                fontWeight: 500,
                                margin: 10,
                                borderBottomWidth: 1,
                                borderColor: COLORS.grey
                            }}
                        >FIELD ID: {data.id}</Text>
                    </View>

                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                borderColor: COLORS.grey,
                                borderWidth: 1,
                                borderRadius: 5,
                                width: '90%',
                                backgroundColor: COLORS.white,
                            }}
                        >
                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    padding: 10
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <Text style={{ fontWeight: 500 }}>Name:</Text>
                                </View>

                                <Text style={{ color: COLORS.primary }}>{data.name}</Text>
                            </View>
                        </View>
                    </View>

                    {listPlan == 0 &&
                        <>
                            <View
                            >
                                <Text
                                    style={{
                                        color: 'gray',
                                        fontWeight: 500,
                                        margin: 10,
                                        borderBottomWidth: 1,
                                        borderColor: COLORS.grey
                                    }}
                                >Plans of the {data.name} field</Text>
                            </View>

                            <View
                                style={{
                                    alignItems: 'flex-start'
                                }}
                            >
                                <Text style={{ marginLeft: 10, fontWeight: 500 }}>There is no plan for this field</Text>
                            </View>
                        </>
                    }

                    {listPlan.length > 0 &&
                        <>
                            <View
                            >
                                <Text
                                    style={{
                                        color: 'gray',
                                        fontWeight: 500,
                                        margin: 10,
                                        borderBottomWidth: 1,
                                        borderColor: COLORS.grey
                                    }}
                                >Plans of the {data.name} field</Text>
                            </View>

                            <View
                                style={{
                                    alignItems: 'center'
                                }}
                            >
                                {listPlan.map((item, index) => {
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
                        </>
                    }

                    {listTree.length > 0 &&
                        <>
                            <View
                            >
                                <Text
                                    style={{
                                        color: 'gray',
                                        fontWeight: 500,
                                        margin: 10,
                                        borderBottomWidth: 1,
                                        borderColor: COLORS.grey
                                    }}
                                >List of trees in {data.name} field</Text>
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
                        </>
                    }
                </ScrollView>
            )
        case 'plan':
            return (
                <>
                    {/* Title */}
                    <View
                    >
                        <Text
                            style={{
                                color: 'gray',
                                fontWeight: 500,
                                margin: 10,
                                borderBottomWidth: 1,
                                borderColor: COLORS.grey
                            }}
                        >PLAN ID: {data.id}</Text>
                    </View>

                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                borderColor: COLORS.grey,
                                borderWidth: 1,
                                borderRadius: 5,
                                width: '90%',
                                backgroundColor: COLORS.white,
                            }}
                        >
                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    padding: 10
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <Text style={{ fontWeight: 500 }}>Name:</Text>
                                </View>

                                <Text style={{ color: COLORS.primary }}>{data.name}</Text>
                            </View>

                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    padding: 10
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <Text style={{ fontWeight: 500 }}>Description:</Text>
                                    <Text style={{ color: COLORS.primary }}>{data.description}</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                </>
            )
        case 'tree':
            const robot = Robotics.filter(item => item.treeFollowing === data.id);
            return (
                <>
                    {/* Title */}
                    <View
                    >
                        <Text
                            style={{
                                color: 'gray',
                                fontWeight: 500,
                                margin: 10,
                            }}
                        >RUBBER TREE</Text>
                    </View>

                    {/* Tree detail */}
                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                borderColor: COLORS.grey,
                                borderWidth: 1,
                                borderRadius: 5,
                                width: '90%',
                                backgroundColor: COLORS.white,
                            }}
                        >
                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    padding: 10
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <Text style={{ fontWeight: 500 }}>ID:</Text>
                                </View>

                                <Text style={{ color: COLORS.primary }}>{data.id}</Text>
                            </View>

                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    padding: 10
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <Text style={{ fontWeight: 500 }}>Longevity:</Text>
                                </View>

                                <Text style={{ color: COLORS.primary }}>{data.longevity} days</Text>
                            </View>

                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    padding: 10
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <Text style={{ fontWeight: 500 }}>Perimeter:</Text>
                                </View>

                                <Text style={{ color: COLORS.primary }}>{data.perimeter} cm</Text>
                            </View>

                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    padding: 10
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <Text style={{ fontWeight: 500 }}>Height from root to top:</Text>
                                </View>

                                <Text style={{ color: COLORS.primary }}>{data.heightFromRootToTop} m</Text>
                            </View>

                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    padding: 10
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <Text style={{ fontWeight: 500 }}>Height from root to capony:</Text>
                                </View>

                                <Text style={{ color: COLORS.primary }}>{data.heightFromRootToCanopy} m</Text>
                            </View>
                        </View>
                    </View>

                    {/* Title */}
                    <View
                    >
                        <Text
                            style={{
                                color: 'gray',
                                fontWeight: 500,
                                margin: 10,
                            }}
                        >ROBOTIC FOLLOWING</Text>
                    </View>

                    {/* Robotic detail */}
                    <View
                        style={{
                            alignItems: 'center'
                        }}
                    >
                        <View
                            style={{
                                borderColor: COLORS.grey,
                                borderWidth: 1,
                                borderRadius: 5,
                                width: '90%',
                                backgroundColor: COLORS.white,
                            }}
                        >
                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    padding: 10
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <Text style={{ fontWeight: 500 }}>ID:</Text>
                                </View>

                                <Text style={{ color: COLORS.primary }}>{robot[0].id}</Text>
                            </View>

                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    padding: 10
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <Text style={{ fontWeight: 500 }}>Average operating one day:</Text>
                                </View>

                                <Text style={{ color: COLORS.primary }}>{robot[0].averageOperatingOneDay} h/day</Text>
                            </View>

                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    padding: 10
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <Text style={{ fontWeight: 500 }}>Average output obtained one day:</Text>
                                </View>

                                <Text style={{ color: COLORS.primary }}>{robot[0].averageOutputObtainedOneDay} L/day</Text>
                            </View>

                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    padding: 10
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <Text style={{ fontWeight: 500 }}>Average output obtained one year:</Text>
                                </View>

                                <Text style={{ color: COLORS.primary }}>{robot[0].averageOutputObtainedOneYear} L/year</Text>
                            </View>

                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    padding: 10
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1
                                    }}
                                >
                                    <Text style={{ fontWeight: 500 }}>Status:</Text>
                                </View>

                                <Text style={{ color: COLORS.primary }}>{robot[0].status === 1 ? 'ON' : 'OFF'}</Text>
                            </View>
                        </View>
                    </View>

                </>
            )
    }
}

export default Detail;