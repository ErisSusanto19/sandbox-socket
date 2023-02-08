import { View, Text, Pressable, SafeAreaView, FlatList } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useState, useLayoutEffect, useEffect } from "react";

import ChatComponent from "../components/ChatComponent";
import { styles } from "../assets/style";
import socket from "../assets/socket";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchChat, fetchListExChats } from "../store/actionCreator";

const Chat = () => {
    const [visible, setVisible] = useState(false);
    // const [rooms, setRooms] = useState([]);

    const dispatch = useDispatch()

    const exchats = useSelector(state => state.exchats)
    console.log(exchats, '<<<<< exchats from screen chat');

    const chats = useSelector(state => state.chats)
    console.log(chats, '<<<< chats from screen chat');

    // useLayoutEffect(() => {
        // dispatch(fetchChat(60))
        // dispatch(fetchListExChats())
    //     function fetchPrivat() {
    //         fetch("https://4cba-180-252-39-206.ap.ngrok.io")
    //             .then((res) => res.json())
    //             .then((data) => setRooms(data))
    //             .catch((err) => console.error(err));
    //     }
    //     fetchPrivat();
    // }, []);

    useEffect(() => {
        // socket.on("roomsList", (rooms) => {
        //     setRooms(rooms)
        // });
        // dispatch(fetchListExChats())
        dispatch(fetchChat(60))
    }, []);

    const handleCreateGroup = () => setVisible(true);

    return (
        <SafeAreaView style={styles.chatscreen}>
            <View style={styles.chattopContainer}>
                <View style={styles.chatheader}>
                    <Text style={styles.chatheading}>Chats</Text>

                    <Pressable onPress={handleCreateGroup}>
                        <Feather name='edit' size={24} color='green' />
                    </Pressable>
                </View>
            </View>

            <View style={styles.chatlistContainer}>
                {rooms.length > 0 ? (
                    <FlatList
                        data={rooms}
                        renderItem={({ item }) => <ChatComponent item={item} />}
                        keyExtractor={(item) => item.id}
                    />
                ) : (
                    <View style={styles.chatemptyContainer}>
                        <Text style={styles.chatemptyText}>No rooms created!</Text>
                        <Text>Click the icon above to create a Chat room</Text>
                    </View>
                )}
            </View>
            {visible ? <Modal setVisible={setVisible} /> : ""}
        </SafeAreaView>
    );
};

export default Chat;