import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import PaymentTf from "../PaymentTf";
import Paymentsukses from "../Paymentsukses";
import Payment from "../Payment";
import Paymentcash from "../Paymentcash";
import Shoppingcart from "../Shoppingcart";
import Loginpage from "../Loginpage";
import SplashScreen from "../SplashScreen";
import FoodPage from "../../components/Product/FoodPage"
import DrinkPage from "../Product/DrinkPage";
import SnackPage from "../Product/SnackPage";
import Products from "../Product";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator> 
        <Stack.Screen name="SplashScreen"component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Loginpage"component={Loginpage} options={{ headerShown: false }}/>
        <Stack.Screen name="Products"component={Products} options={{ headerShown: false } }/>
        <Stack.Screen name="FoodPage"component={FoodPage} options={{ headerShown: false }}/>
        <Stack.Screen name="DrinkPage"component={DrinkPage} options={{ headerShown: false }}/>
        <Stack.Screen name="SnackPage" component={SnackPage} options={{ headerShown: false }} />
        <Stack.Screen name="Shoppingcart"component={Shoppingcart} options={{ headerShown: false }}/>
        <Stack.Screen name="Payment" component={Payment}options={{ headerShown: false }} />
        <Stack.Screen name="PaymentTf"component={PaymentTf}options={{ headerShown: false }}/>
        <Stack.Screen name="Paymentcash"component={Paymentcash} options={{ headerShown: false }}/>
        <Stack.Screen name="Paymentsukses"component={Paymentsukses} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
