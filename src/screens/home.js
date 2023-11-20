import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';
import PostsScreen from './postsScreen';
import CreatePostsScreen from './createPostsScreen';
import { ArrowLeftButton, UploadButton, CreationTabBarIcon } from '../components/buttonIcons';
import ProfileScreen from './profileScreen';

const Tabs = createBottomTabNavigator();

const Home = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Публікації') {
            return CreationTabBarIcon(Feather, 'grid', focused);
          } else if (route.name === 'Створити публікацію') {
            return CreationTabBarIcon(Ionicons, 'add', focused);
          } else if (route.name === 'Профіль') {
            return CreationTabBarIcon(Feather, 'user', focused);
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
          headerRight: () => <UploadButton />,
        }}
      />
      <Tabs.Screen
        name="Створити публікацію"
        component={CreatePostsScreen}
        options={{
          ...styleHeader,
          headerLeft: () => <ArrowLeftButton />,
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
    height: 44,
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
