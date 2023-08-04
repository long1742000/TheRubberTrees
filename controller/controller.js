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

export { checkExist }