import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from '../RegistrationScreen/RegistrationScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import Home from '../Home/PostsScreen/Home';
import CreatePostsScreen from '../CreatePostsScreen/CreatePostsScreen';

const MainStack = createStackNavigator();

const Authorization = () =>{
    return (
    <MainStack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
       <MainStack.Screen name='Login' component={LoginScreen}/>
       <MainStack.Screen name='Registratione' component={RegistrationScreen}/>
       <MainStack.Screen name='Home' component={Home}/> 
       <MainStack.Screen name='CreatePostsScreen' component={CreatePostsScreen}/> 
    </MainStack.Navigator>
  );
};

export default Authorization;