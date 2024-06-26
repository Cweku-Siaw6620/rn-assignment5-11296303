import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homescreen from "./homescreen";
import CardScreen from "./card";
import StatisticsScreen from "./statistics";
import SettingsScreen from "./settings";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()

export default function App(){
    return(
      <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Home" component={Homescreen} 
           options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen name="Card" component={CardScreen}
           options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="card" size={size} color={color} />
            ),
          }}
         />

        <Tab.Screen name="Statistics" component={StatisticsScreen} 
         options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pie-chart" size={size} color={color} />
          ),
        }}
        />

        <Tab.Screen name="Settings" component={SettingsScreen}
           options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="settings" size={size} color={color} />
            ),
          }}
        />
  </Tab.Navigator>
  </NavigationContainer>
    );
}