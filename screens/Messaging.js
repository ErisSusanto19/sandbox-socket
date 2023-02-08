import { useLayoutEffect, useState, useEffect } from "react";
import { View, TextInput, Text, FlatList, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MessageComponent from "../components/MessageComponent";
import { styles } from "../assets/style";
import socket from "../assets/socket";
import { useDispatch, useSelector } from "react-redux";
import { createMessage, fetchMessage } from "../store/actionCreator";

const Messaging = ({ route, navigation }) => {
    // const [chatMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState("");
    // const [senderId, setSenderId] = useState("");
    const { chatId, curentUserId } = route.params;

    const dispatch = useDispatch()
    const messages = useSelector(state => state.messages)
    console.log(messages, '<<<< from screen massaging');

    const handleNewMessage = () => {
        // const hour =
        //     new Date().getHours() < 10
        //         ? `0${new Date().getHours()}`
        //         : `${new Date().getHours()}`;

        // const mins =
        //     new Date().getMinutes() < 10
        //         ? `0${new Date().getMinutes()}`
        //         : `${new Date().getMinutes()}`;

        if (chatId) {
            // socket.emit("newMessage", {
            //     chatId
            //     senderId,
            //     message
            // });
            dispatch(createMessage({chatId, senderId: curentUserId, message}))
        }
    };

    // useLayoutEffect(() => {
    //     navigation.setOptions({ title: name });
    //     getUsername();
    //     socket.emit("findRoom", id);
    //     socket.on("foundRoom", (roomChats) => setChatMessages(roomChats));
    // }, []);
    
    useEffect(() => {
        dispatch(fetchMessage("63e31c5f63c1ae2a11aec249"))
    }, [])

    return (
        <View style={styles.messagingscreen}>
            <View
                style={[
                    styles.messagingscreen,
                    { paddingVertical: 15, paddingHorizontal: 10 },
                ]}
            >
                {messages[0] ? (
                    <FlatList
                        data={messages}
                        renderItem={({ item }) => (
                            <MessageComponent item={item} curentUserId={curentUserId} />
                        )}
                        keyExtractor={(item) => item._id}
                    />
                ) : (
                    ""
                )}
            </View>

            <View style={styles.messaginginputContainer}>
                <TextInput
                    style={styles.messaginginput}
                    onChangeText={(value) => setMessage(value)}
                />
                <Pressable
                    style={styles.messagingbuttonContainer}
                    onPress={handleNewMessage}
                >
                    <View>
                        <Text style={{ color: "#f2f0f1", fontSize: 20 }}>SEND</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

export default Messaging;