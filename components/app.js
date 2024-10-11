import { View, Text} from 'react-native'
import React from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'


const App = () => {
    return (
        <View>
            <ToDoList/>
            <ToDoForm/>
        </View>
    )
}

export default App;