import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { styles } from "../assets/style";
import socket from "../assets/socket";
import { useDispatch } from "react-redux"
import { createChat, createExChat } from "../store/actionCreator";


const Modal = ({ setVisible }) => {
    const [id, setId] = useState("");
    const [id2, setId2] = useState("");

    const dispatch = useDispatch()

    const closeModal = () => setVisible(false);

    const handleCreateRoom = () => {
        // socket.emit("createRoom", {id, id2});
        dispatch(createChat({id, id2}))
        closeModal();
    };
    return (
        <View style={styles.modalContainer}>
            <Text style={styles.modalsubheading}>Enter your id</Text>
            <TextInput
                style={styles.modalinput}
                placeholder='Your ID'
                onChangeText={(value) => setId(+value)}
            />
            <Text style={styles.modalsubheading}>Enter your id's partner</Text>
            <TextInput
                style={styles.modalinput}
                placeholder="ID's Partner"
                onChangeText={(value) => setId2(+value)}
            />

            <View style={styles.modalbuttonContainer}>
                <Pressable style={styles.modalbutton} onPress={handleCreateRoom}>
                    <Text style={styles.modaltext}>CREATE</Text>
                </Pressable>
                <Pressable
                    style={[styles.modalbutton, { backgroundColor: "#E14D2A" }]}
                    onPress={closeModal}
                >
                    <Text style={styles.modaltext}>CANCEL</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Modal;