import 'react-native-gesture-handler'
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import TabOneScreen from './screens/TabOneScreen';
//import Perfil from './pantallas/Perfil';
import Camara from './components/Camara';
//import QRGen from './pantallas/QRGen';

export default function App() {

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name="Home" options={{
        title: 'Home - 1',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
      }} component={TabOneScreen} />
      <Stack.Screen name="Camara" component={Camara} />
    </Stack.Navigator>
  </NavigationContainer>    
  );
}
/* 
<Stack.Screen name="Perfil" component={Perfil} />
<Stack.Screen name="QRGen" component={QRGen} />
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
