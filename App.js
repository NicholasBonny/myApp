import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import store from "./store";
import CustomDrawer from "./navigation/CustomDrawer";

import {
  MainLayout,
  OnBoarding,
  SignIn,
  SignUp,
  ForgotPassword,
  Otp,
  FoodDetail,
  Checkout,
  MyCart,
  Success,
  AddCard,
  MyCard,
  DeliveryStatus,
  Map,
  MechanicsList,
  MechanicDetails,
  SchedualAppointment,
  EmergancyList,
  CenterDetails,
  CenterAppointment,
  Profile,
  Bookings,
} from "./screens";

const Stack = createStackNavigator();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={"OnBoarding"}
        >
          {/* Auth Stack */}
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Otp" component={Otp} />
          {/* Home Stack */}
          <Stack.Screen name="Home" component={MainLayout} />
          {/* Order Stack */}
          <Stack.Screen name="FoodDetail" component={FoodDetail} />
          <Stack.Screen name="MechanicsList" component={MechanicsList} />
          <Stack.Screen name="MechanicDetails" component={MechanicDetails} />
          <Stack.Screen
            name="SchedualAppointment"
            component={SchedualAppointment}
          />
          <Stack.Screen name="EmergancyList" component={EmergancyList} />
          <Stack.Screen name="CenterDetails" component={CenterDetails} />
          <Stack.Screen
            name="CenterAppointment"
            component={CenterAppointment}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Bookings" component={Bookings} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="MyCart" component={MyCart} />
          <Stack.Screen
            name="Success"
            component={Success}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen name="AddCard" component={AddCard} />
          <Stack.Screen name="MyCard" component={MyCard} />
          <Stack.Screen
            name="DeliveryStatus"
            component={DeliveryStatus}
            options={{ gestureEnabled: false }}
          />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
