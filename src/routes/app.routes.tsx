import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Main } from "@screens/Main";
import { Login } from "@screens/Login";
import { Register } from "@screens/Register";
import { Home } from "@screens/Home";
import { RecoverPassword } from "@screens/RecoverPassword";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator >
      <Screen
        name="main"
        component={Main}
        options={{ headerShown: false }}
      />
      <Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Screen
        name="register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen
        name="recover"
        component={RecoverPassword}
        options={{ headerShown: false }}
      />
    </Navigator>
  )
}