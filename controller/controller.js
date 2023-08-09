import AsyncStorage from '@react-native-async-storage/async-storage';
import { Fields, ListTrees, Regions } from '../stores/fakeData';

const checkExist = (data, listData) => {
    for (let i = 0; i < listData.length; i++) {
        if (data.email === listData[i].email) {
            if (data.phone === listData[i].phone) {
                if (data.password === listData[i].password) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else if (('0' + data.phone) === listData[i].phone) {
                if (data.password === listData[i].password) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}

const setStorage = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        console.log(e);
    }
};

// const getData = async () => {
//     try {
//         await AsyncStorage.getItem('my-key')
//             .then(value => {
//                 setUser(JSON.parse(value));
//             })
//     } catch (e) {
//         console.log(e);
//     }
// };

// const checkSignIn = async () => {
//     try {
//         await AsyncStorage.getItem('user')
//             .then(value => {
//                 if (value != null) {
//                     navigation.replace('Home');
//                 }
//             })
//     } catch (e) {
//         console.log(e);
//     }
// };

const removeStorage = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.log(e);
    }
};

const searchAllItem = (keyword, listTrees, listRobotics, listCountry, listRegion, listField, listPlan) => {
    let rslistTrees = [...listTrees];
    let rslistRobotics = [...listRobotics];
    let rslistRobotisFollowTree = [...listRobotics];
    let rslistCountry = [...listCountry];
    let rslistRegion = [...listRegion];
    let rslistRegionOfCountry = [];
    let rslistField = [...listField];
    let rslistFieldOfRegion = [];
    let rslistTreeInField = [];
    let rslistPlan = [...listPlan];

    rslistTrees = rslistTrees.filter(item => item.id.includes(keyword));
    rslistRobotics = rslistRobotics.filter(item => item.id.includes(keyword));
    rslistRobotisFollowTree = rslistRobotisFollowTree.filter(item => item.treeFollowing.includes(keyword));
    rslistCountry = rslistCountry.filter(item => item.name.includes(keyword));
    rslistRegion = rslistRegion.filter(item => item.name.includes(keyword));

    for (let i = 0; i < rslistCountry.length; i++) {
        for (let j = 0; j < Regions.length; j++) {
            if (Regions[j].countryId == rslistCountry[i].id) {
                rslistRegionOfCountry.push(Regions[j]);
            }
        }
    }

    rslistField = rslistField.filter(item => item.name.includes(keyword));

    for (let i = 0; i < rslistRegion.length; i++) {
        for (let j = 0; j < Fields.length; j++) {
            if (Fields[j].regionId == rslistRegion[i].id) {
                rslistFieldOfRegion.push(Fields[j]);
            }
        }
    }

    for (let i = 0; i < rslistField.length; i++) {
        for (let j = 0; j < ListTrees.length; j++) {
            if (ListTrees[j].fieldId == rslistField[i].id) {
                rslistTreeInField.push(ListTrees[j]);
            }
        }
    }

    rslistPlan = rslistPlan.filter(item => item.name.includes(keyword));

    return {
        listTree: rslistTrees,
        listRobotic: rslistRobotics,
        listRoboticFollowTree: rslistRobotisFollowTree,
        listCountry: rslistCountry,
        listRegion: rslistRegion,
        listRegionOfCountry: rslistRegionOfCountry,
        listField: rslistField,
        listFieldOfRegion: rslistFieldOfRegion,
        listTreeInField: rslistTreeInField,
        listPlan: rslistPlan
    };
}

export { checkExist, setStorage, removeStorage, searchAllItem }