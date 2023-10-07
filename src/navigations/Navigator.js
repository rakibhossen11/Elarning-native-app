import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Courses from "../screens/Courses";
import Xd from "../screens/XD";
import VideoPage from "../screens/VideoPage";

const stackNavigationOptions = {
    headerShown: false
}
const AppNavigator = createStackNavigator({
    Home: {screen:Home},
    Courses: {screen: Courses},
    Xd: {screen:Xd},
    VideoPage: {screen:VideoPage}
},
{
    defaultNavigationOptions:stackNavigationOptions
}
)

export default createAppContainer(AppNavigator);