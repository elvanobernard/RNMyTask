import { View, Text, StyleSheet, Pressable } from "react-native";

import { SmallButton } from "./UI/Button";
import { Entypo } from "@expo/vector-icons"

import colors from "../static/colors";

const TaskSummary = ({ task, onPress }) => {
    task.label = [{ name: 'Important' }, { name: 'Urgent AF' }];

    return (
        <Pressable style={({ pressed }) => [styles.container, pressed && styles.pressed]} onPress={onPress}>
            <View>
                <Text style={styles.title}>{task.title}</Text>
                <View style={styles.labelContainer}>
                    {task.label.map(label => {
                        return <View style={styles.label}>
                            <SmallButton title={label.name} />
                        </View>
                    })}
                </View>
            </View>
            <View style={styles.rightContainer}>
                {task.flagged ? <Entypo name="flag" size={20} color="red" /> : ''}
                <Pressable style={styles.dotContainer}>
                    <Entypo name="dots-three-vertical" size={20} color="black" />
                </Pressable>
            </View>
        </Pressable>
    );
}

export default TaskSummary;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        paddingVertical: 16,
        paddingHorizontal: 24,
        paddingRight: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 16,
    },
    pressed: {
        backgroundColor: colors.white200,
    },
    labelContainer: {
        flexDirection: 'row',
    },
    label: {
        marginEnd: 4,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 8,
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    dotContainer: {
        padding: 8,
    }
});