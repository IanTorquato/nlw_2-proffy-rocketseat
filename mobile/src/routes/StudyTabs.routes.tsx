import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import TeacherList from '../pages/TeacherList'
import Favorites from '../pages/Favorites'

const { Navigator, Screen } = createBottomTabNavigator()

const StudyTabs: React.FC = () => {
  return (
    <Navigator tabBarOptions={{
      style: {
        elevation: 0,
        height: 64
      },
      tabStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
      },
      iconStyle: {
        flex: 0,
        height: 20,
        width: 20
      },
      labelStyle: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 13,
        marginLeft: 16
      },
      inactiveBackgroundColor: '#fafafc',
      activeBackgroundColor: '#ebebf5',
      inactiveTintColor: '#c1bccc',
      activeTintColor: '#32264d'
    }}>
      <Screen name="TeacherList" component={TeacherList} options={{
        tabBarLabel: 'Proffys',
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name="ios-easel" color={focused ? '#8257e5' : color} size={size} />
        )
      }} />

      <Screen name="Favorites" component={Favorites} options={{
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({ color, size, focused }) => (
          <Ionicons name="ios-heart" color={focused ? '#8257e5' : color} size={size} />
        )
      }} />
    </Navigator>
  )
}

export default StudyTabs
