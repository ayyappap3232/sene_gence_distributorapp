import AsyncStorage from '@react-native-async-storage/async-storage'

//Note : if value is an object send like this -> JSON.stringify(value)
const SetItem = async (name: string, value: any) => {
    try {
        await AsyncStorage.setItem(name, value)
    } catch (error) {
        console.log(error)
    }
}

const GetItem = async (name: string) => {
    try {
        const result = await AsyncStorage.getItem(name)
        return result;
    } catch (error) {
        console.log(error)
    }
}

const RemoveItem = async (name: string) => {
    try {
        await AsyncStorage.removeItem(name)
    } catch (error) {
        console.log(error)
    }
}

export {SetItem, GetItem, RemoveItem}