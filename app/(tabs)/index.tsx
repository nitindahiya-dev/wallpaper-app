import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();


export default function foryou(){
    return (
        <Tab.Navigator>
        <Tab.Screen name="Library" component={LibraryScreen} />
        <Tab.Screen name="Liked" component={LikedScreen} />
        <Tab.Screen name="Suggested" component={SuggestedScreen} />
      </Tab.Navigator>
    )
}

function LibraryScreen(){
    return (
        <View>
            <Text>
                Hiiiii Library Screen
            </Text>
        </View>
    )
}

function LikedScreen(){
    return (
        <View>
            <Text>
                Hiiiii Liked Screen
            </Text>
        </View>
    )
}

function SuggestedScreen(){
    return (
        <View>
            <Text>
                Hiiiii Suggested Screen
            </Text>
        </View>
    )
}