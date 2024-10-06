import DownloadPicture from "@/components/BottomSheet"; // Ensure the path is correct
import { Link } from "expo-router";
import { useState } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Account() {
    const [open, setOpen] = useState(false);

    return (
        <SafeAreaView>
            <Text>Account Page</Text>

            <Link href="/accountInfo">
                <Text>Account Info</Text>
            </Link>

            <Button title="Open Bottom Sheet" onPress={() => {setOpen(true)}} ></Button>

            {open && <DownloadPicture />}
        </SafeAreaView>
    );
}
