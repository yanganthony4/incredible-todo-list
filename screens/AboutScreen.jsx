import { View } from 'react-native';
import MainLayout from '../layouts/MainLayout';

const AboutScreen = () => {
    return(
        <MainLayout>
            <Text>
                Incredible To Do List
            </Text>
            <Text>
                Anthony Yang
            </Text>
            <Text>
                November 29, 2024
            </Text>
            <Button 
                title="Go to Home"
                onPress={() => NavigationContainer.navigate('Home')} 
            />
        </MainLayout>
    )
}