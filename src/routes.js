import React from 'react'
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
 } from 'react-navigation'

import Icon from 'react-native-vector-icons/MaterialIcons'

import EmailsDocentes from './pages/EmailsDocentes'
import EmailsAcademicos from './pages/EmailsAcademicos'
import AddEmail from './pages/EmailsAcademicos/AddEmail'

const StyleStack = {
  headerLayoutPreset: "center",
  headerBackTitleVisible: false,
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#3c577c',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
}

export default
  createAppContainer(
    createBottomTabNavigator({
      EmailsDocentess: {
        screen: createStackNavigator({
          EmailsDocentes
        }, StyleStack),
        navigationOptions: {
          tabBarIcon: (({tintColor}) =>
            <Icon name='school' size={30} color={tintColor} />
          )
        }
      },
      EmailsAcademicos: {
        screen: createStackNavigator({
          EmailsAcademicos,
          AddEmail
        }, StyleStack),
        navigationOptions: {
          tabBarIcon: (({tintColor}) =>
            <Icon name='person-add' size={30} color={tintColor} />
          )
        }
      }
    },{
      tabBarOptions: {
        keyboardHidesTabBar: true,
        activeTintColor: '#3c577c',
        inactiveTintColor: '#808080',
        showLabel: false,
        style: {
          backgroundColor: '#49b1be'
        }
      }
    })
  )



