import { Link, Slot } from "expo-router";
import {Text, View} from "react-native";

export default function layout(){
    return (
        <View>
            <View style={{backgroundColor: "black"}}>
                    <Link href={"/"} >
                <Text style = {{color : "#fff"}}>
                    Go back
                    </Text>
                    </Link>
            </View>
            <Slot />
        </View>
    )
}