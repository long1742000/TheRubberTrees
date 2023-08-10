import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { Countries, Fields, ListTrees, Regions, Robotics } from "../stores/fakeData";

const ListData = ({ navigation, route }) => {

    const list = route.params.list;
    const data = route.params.data;

    switch (list) {
        case 'country':
            return (
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
                        {data.map((item, index) => {
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
                                        marginTop: 5
                                    }}

                                    onPress={() => { navigation.push('Detail', { data: item, level: list }) }}
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
                        })
                        }
                    </View>
                </ScrollView>
            )
        case 'region':
            return (
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
                        {data.map((item, index) => {
                            const country = Countries.filter(x => x.id == item.countryId);
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
                                        marginTop: 5
                                    }}

                                    onPress={() => { navigation.push('Detail', { data: item, level: list }) }}
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
                                            Belong to: {country[0].name}
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
            )
        case 'field':
            return (
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
                        {data.map((item, index) => {
                            const region = Regions.filter(x => x.id == item.regionId);
                            const country = Countries.filter(x => x.id == region[0].countryId);
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
                                        marginTop: 5
                                    }}

                                    onPress={() => { navigation.push('Detail', { data: item, level: list }) }}
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
                                            Belong to: {region[0].name} {country[0].name}
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
            )
        case 'tree':
            return (
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
                        {data.map((item, index) => {
                            const field = Fields.filter(x => x.id == item.fieldId);
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
                                        marginTop: 5
                                    }}

                                    onPress={() => { navigation.push('Detail', { data: item, level: list }) }}
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
                                            Belong to: {field[0].name}
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
            )
        case 'robot':
            return (
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
                        {data.map((item, index) => {
                            const treeFollowing = ListTrees.filter(x => x.id == item.treeFollowing);
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
                                        marginTop: 5
                                    }}

                                    onPress={() => { navigation.push('Detail', { data: item, level: list }) }}
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
                                            Following tree: {treeFollowing[0].id}
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
            )
        case 'plan':
            return (
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
                        {data.map((item, index) => {
                            const field = Fields.filter(x => x.id == item.fieldId);
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
                                        marginTop: 5
                                    }}

                                    onPress={() => { navigation.push('Detail', { data: item, level: list }) }}
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
                                            Plan of {field[0].name} field
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
            )
    }
}

export default ListData;