import React from 'react'
import { Dashboard, Login, Signup } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import auth from '@react-native-firebase/auth';
import { AsyncStorage } from 'react-native';



const AuthStack = createNativeStackNavigator()
const HomeStack = createNativeStackNavigator()
const MainStack = createNativeStackNavigator()


const Auth = () => {
    return (
        <AuthStack.Navigator initialRouteName='Login'>
            <AuthStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <AuthStack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
        </AuthStack.Navigator>
    )
}

const Home = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={Dashboard} options={{ headerShown: false }} />
        </HomeStack.Navigator>
    )
}




class Navigation extends React.Component {
    state = {
        user: null
    }


    async componentDidMount() {
        let userData = await AsyncStorage.getItem('User')
        this.setState({ user: JSON.parse(userData) })

    }

    render() {
        let screen = this.state.user?.uid ? Home : Auth

        return (
            <MainStack.Navigator initialRouteName={screen} >
                <MainStack.Screen name='Auth' component={Auth} options={{ headerShown: false }} />
                <MainStack.Screen name='Dashboard' component={Dashboard} />
            </MainStack.Navigator>
        )

    }
}

export default Navigation