import { View, Text} from 'react-native'
import React from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import { useState } from 'react'


const App = () => {
    const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog'])

    return (
        <View>
            <ToDoList tasks={tasks} />
            <ToDoForm/>
        </View>
    )
}

export default App;