import { Icon } from "react-native-elements";
import MainPage from "./MainPage";
import Regiones from "./Regiones";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Turismo from "./Turismo";
import AreaNatural from "./AreaNatural";

const Tab = createBottomTabNavigator();

function BarraNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={MainPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon
              name="heart"
              type="font-awesome"
              color={color}
              size={size}
            ></Icon>
          ),
        }}
      />

      <Tab.Screen
        name="Regiones"
        component={Regiones}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="map" type="font-awesome" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Turismo"
        component={Turismo}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="car" type="font-awesome" color={color} size={size} />
          ),
        }}
      />
     <Tab.Screen
        name="AreaNatural"
        component={AreaNatural}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="tree" type="font-awesome" color={color} size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}

export default BarraNav;
