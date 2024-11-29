import { View } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const App = () => {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask = (task) => {
    if (task.trim()) { 
      setTasks((prevTasks) => [...prevTasks, task]);
    }
  };

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="About" component={AboutScreen}/>
    </NavigationContainer>
  );
};

export default App;
