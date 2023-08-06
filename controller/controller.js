import AsyncStorage from '@react-native-async-storage/async-storage';

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

const searchAllItem = (keyword, listTrees, listRobotics) => {
    let rslistTrees = [...listTrees];
    let rslistRobotics = [...listRobotics];
    let rslistRobotisFollowTree = [...listRobotics];

    rslistTrees = rslistTrees.filter(item => item.id.includes(keyword));
    rslistRobotics = rslistRobotics.filter(item => item.id.includes(keyword));
    rslistRobotisFollowTree = rslistRobotisFollowTree.filter(item => item.treeFollowing.includes(keyword));

    return { listTree: rslistTrees, listRobotic: rslistRobotics, listRoboticFollowTree: rslistRobotisFollowTree };
}

export { checkExist, setStorage, removeStorage, searchAllItem }