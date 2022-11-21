import { View, Text, StyleSheet, Pressable } from "react-native";

import { SmallButton } from "./UI/Button";
import { Entypo } from "@expo/vector-icons"

import colors from "../static/colors";

const TaskSummary = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>MyTask</Text>
                <SmallButton title={'Home'} />
            </View>
            <View style={styles.rightContainer}>
                <Entypo name="flag" size={20} color="red" />
                <Pressable>
                    <Entypo name="dots-three-vertical" size={20} color="black" />
                </Pressable>
            </View>
        </View>
    );
}

export default TaskSummary;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray400,
        paddingVertical: 16,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 8,
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});