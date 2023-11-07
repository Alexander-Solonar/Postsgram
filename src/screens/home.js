import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';
import PostsScreen from './postsScreen';
import CreatePostsScreen from './createPostsScreen';
import { ButtonArrowLeft, ButtonUpload } from '../components/buttonIcons';
import ProfileScreen from './profileScreen';
import { useRoute } from '@react-navigation/native';

const Tabs = createBottomTabNavigator();
const createIconComponent = (IconComponent, name, focused) => (
  <IconComponent name={name} size={24} color={focused ? '#fff' : 'rgba(33, 33, 33, 0.8)'} />
);

const styleHeader = {
  headerTitleAlign: 'center',
  headerStyle: {
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

export default Home;
