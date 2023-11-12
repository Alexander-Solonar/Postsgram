import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';
import PostsScreen from './postsScreen';
import CreatePostsScreen from './createPostsScreen';
import { ButtonArrowLeft, ButtonUpload, createIconComponent } from '../components/buttonIcons';
import ProfileScreen from './profileScreen';

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Публікації') {
            return createIconComponent(Feather, 'grid', focused);
          } else if (route.name === 'Створити') {
            return createIconComponent(Ionicons, 'add', focused);
          } else if (route.name === 'Профіль') {
            return createIconComponent(Feather, 'user', focused);
          }
        },
        tabBarLabel: () => null,
        tabBarStyle,
        tabBarItemStyle,
        tabBarActiveBackgroundColor: '#FF6C00',
      })}
    >
      <Tabs.Screen
        name="Публікації"
        component={PostsScreen}
        options={{
          ...styleHeader,
          headerRight: () => <ButtonUpload />,
        }}
      />
      <Tabs.Screen
        name="Створити"
        component={CreatePostsScreen}
        options={{
          ...styleHeader,
          headerLeft: () => <ButtonArrowLeft />,
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="Профіль"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tabs.Navigator>
  );
};

const styleHeader = {
  headerTitleAlign: 'center',
  headerStyle: {
    height: 83,
    borderBottomWidth: 1,
  },
  headerTitleStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#212121',
  },
};

const tabBarStyle = {
  paddingHorizontal: 81,
  borderTopWidth: 1,
  paddingVertical: 10,
  height: 60,
};

const tabBarItemStyle = {
  height: 40,
  borderRadius: 50,
};

export default Home;
