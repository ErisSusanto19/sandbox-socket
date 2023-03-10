import { View, Text, Pressable } from "react-native";
import { useLayoutEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../assets/style";

const ChatComponent = ({ item }) => {
    console.log(item, '<<<< from chat');
    const navigation = useNavigation();
    // const [messages, setMessages] = useState({});

    // useLayoutEffect(() => {
    //     setMessages(item.messages[item.messages.length - 1]);
    // }, []);

    const handleNavigation = () => {
        navigation.navigate("Messaging", {
            chatId: item._id,
            curentUserId: item.users[0]
        });
    };

    return (
        <Pressable style={styles.cchat} onPress={handleNavigation}>
            <Ionicons
                name='person-circle-outline'
                size={45}
                color='black'
                style={styles.cavatar}
            />

            <View style={styles.crightContainer}>
                <View>
                    <Text style={styles.cusername}>{item._id}</Text>

                    {/* <Text style={styles.cmessage}>
                        {messages?.text ? messages.text : "Tap to start chatting"}
                    </Text> */}
                </View>
                {/* <View>
                    <Text style={styles.ctime}>
                        {messages?.time ? messages.time : "now"}
                    </Text>
                </View> */}
            </View>
        </Pressable>
    );
};

export default ChatComponent;