import { Image, Text, TouchableOpacity, View } from 'react-native';
import COLORS from '../constants/colors';
import { Countries, Fields, ListTrees, Plans, Regions, Robotics } from '../stores/fakeData';

const ChooseData = ({ navigation }) => {
    return (
        <>
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
                    flex: 2,
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
                        alignItems: 'center',
                        paddingLeft: 10,
                        marginBottom: 10,
                        flexDirection: 'row'
                    }}

                    onPress={() => { navigation.push('ListData', { data: Countries, list: 'country' }) }}                >

                    <Text
                        style={{
                            color: COLORS.primary,
                            borderWidth: 1,
                            borderColor: COLORS.primary,
                            paddingHorizontal: 4,
                            borderRadius: 20,
                            fontSize: 10,
                            marginRight: 10
                        }}>
                        1
                    </Text>
                    <Text style={{ color: COLORS.primary }}>List country</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '90%',
                        borderWidth: 1,
                        borderColor: COLORS.grey,
                        borderRadius: 10,
                        height: 40,
                        alignItems: 'center',
                        paddingLeft: 10,
                        marginBottom: 10,
                        flexDirection: 'row'
                    }}

                    onPress={() => { navigation.push('ListData', { data: Regions, list: 'region' }) }}
                >

                    <Text
                        style={{
                            color: COLORS.primary,
                            borderWidth: 1,
                            borderColor: COLORS.primary,
                            paddingHorizontal: 4,
                            borderRadius: 20,
                            fontSize: 10,
                            marginRight: 10
                        }}>
                        2
                    </Text>
                    <Text style={{ color: COLORS.primary }}>List region</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '90%',
                        borderWidth: 1,
                        borderColor: COLORS.grey,
                        borderRadius: 10,
                        height: 40,
                        alignItems: 'center',
                        paddingLeft: 10,
                        marginBottom: 10,
                        flexDirection: 'row'
                    }}

                    onPress={() => { navigation.push('ListData', { data: Fields, list: 'field' }) }}
                >

                    <Text
                        style={{
                            color: COLORS.primary,
                            borderWidth: 1,
                            borderColor: COLORS.primary,
                            paddingHorizontal: 4,
                            borderRadius: 20,
                            fontSize: 10,
                            marginRight: 10
                        }}>
                        3
                    </Text>
                    <Text style={{ color: COLORS.primary }}>List field</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '90%',
                        borderWidth: 1,
                        borderColor: COLORS.grey,
                        borderRadius: 10,
                        height: 40,
                        alignItems: 'center',
                        paddingLeft: 10,
                        marginBottom: 10,
                        flexDirection: 'row'
                    }}

                    onPress={() => { navigation.push('ListData', { data: ListTrees, list: 'tree' }) }}
                >

                    <Text
                        style={{
                            color: COLORS.primary,
                            borderWidth: 1,
                            borderColor: COLORS.primary,
                            paddingHorizontal: 4,
                            borderRadius: 20,
                            fontSize: 10,
                            marginRight: 10
                        }}>
                        4
                    </Text>
                    <Text style={{ color: COLORS.primary }}>List tree</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '90%',
                        borderWidth: 1,
                        borderColor: COLORS.grey,
                        borderRadius: 10,
                        height: 40,
                        alignItems: 'center',
                        paddingLeft: 10,
                        marginBottom: 10,
                        flexDirection: 'row'
                    }}

                    onPress={() => { navigation.push('ListData', { data: Robotics, list: 'robot' }) }}
                >

                    <Text
                        style={{
                            color: COLORS.primary,
                            borderWidth: 1,
                            borderColor: COLORS.primary,
                            paddingHorizontal: 4,
                            borderRadius: 20,
                            fontSize: 10,
                            marginRight: 10
                        }}>
                        5
                    </Text>
                    <Text style={{ color: COLORS.primary }}>List robotic</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        width: '90%',
                        borderWidth: 1,
                        borderColor: COLORS.grey,
                        borderRadius: 10,
                        height: 40,
                        alignItems: 'center',
                        paddingLeft: 10,
                        marginBottom: 10,
                        flexDirection: 'row'
                    }}

                    onPress={() => { navigation.push('ListData', { data: Plans, list: 'plan' }) }}
                >

                    <Text
                        style={{
                            color: COLORS.primary,
                            borderWidth: 1,
                            borderColor: COLORS.primary,
                            paddingHorizontal: 4,
                            borderRadius: 20,
                            fontSize: 10,
                            marginRight: 10
                        }}>
                        6
                    </Text>
                    <Text style={{ color: COLORS.primary }}>List plan</Text>

                </TouchableOpacity>

            </View>
        </>
    )
}

export default ChooseData;