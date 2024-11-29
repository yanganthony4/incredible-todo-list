import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainLayout from '../layouts/MainLayout';

const HomeScreen = () => {
    return (
      <MainLayout>
            <ToDoList tasks={tasks} />
            <ToDoForm addTask={addTask} />
            <Button 
                title="Go to About"
                onPress={() => NavigationContainer.navigate('About')} 
            />
      </MainLayout>
    );
}

export default HomeScreen;