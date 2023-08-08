import { Text, View } from "react-native";
import COLORS from "../constants/colors";
import { Robotics } from "../stores/fakeData";

const TreeDetail = ({ navigation, route }) => {

    const data = route.params;
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

export default TreeDetail