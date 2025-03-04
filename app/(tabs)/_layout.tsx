import { Link, Tabs } from 'expo-router';
import Home from '~/assets/images/UI/House.svg';
import Places from '~/assets/images/Maps/direction board.svg';
import Maps from '~/assets/images/Maps/map.svg';
import Tips from '~/assets/images/Content/list format.svg';
import Attractions from '~/assets/images/Maps/location pin.svg';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveBackgroundColor: '#c0c0c0',
        tabBarInactiveBackgroundColor: '#fff',
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#808080',
        tabBarStyle: {
          padding: 2,
          height: 60,
          width: '100%',
          alignSelf: 'center',
          borderRadius: 10,
          backgroundColor: '#fff',
          borderWidth: 1,
          borderColor: '#000',
        },
        headerShown: false,
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: 'Poppins',
          paddingBottom: 10,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home width={24} height={24} fill={color} />,
        }}
      />
      <Tabs.Screen
        name="attractions"
        options={{
          title: 'Attractions',
          tabBarIcon: ({ color }) => <Attractions fill={color} width={24} height={24} />,
        }}
      />
      <Tabs.Screen
        name="maps"
        options={{
          title: 'Map',
          tabBarIcon: ({ color }) => (
            <View className=" bg-navy_blue p-1">
              <Maps fill="white" width={24} height={24} />
            </View>
          ),
          tabBarItemStyle: {
            backgroundColor: '#20A8E0',
            borderRadius: 10,
          },
        }}
      />
      <Tabs.Screen
        name="places2go"
        options={{
          title: 'Places2Go',
          tabBarIcon: ({ color }) => <Places fill={color} width={24} height={24} />,
        }}
      />
      <Tabs.Screen
        name="travelTips"
        options={{
          title: 'Travel Tips',
          tabBarIcon: ({ color }) => <Tips fill={color} width={24} height={24} />,
        }}
      />
      <Tabs.Screen
        name="(attractions)"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
