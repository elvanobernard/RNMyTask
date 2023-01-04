import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { Button } from "../components/UI/Button";
import { FontAwesome5 } from '@expo/vector-icons';

import colors from "../static/colors";
import PhaseBar from "../components/PhaseBar";

const TaskForm = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Pressable style={styles.icon}>
                    <FontAwesome5 name="trash" size={20} color={colors.gray700} />
                </Pressable>
                <Pressable style={styles.icon}>
                    <FontAwesome5 name="check" size={20} color={colors.gray700} />
                </Pressable>
            </View>
            <Text style={styles.label}>Task Name</Text>
            <TextInput style={styles.textField} />
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={[styles.textField, styles.descriptionField]}
                multiline={true}
            />
            <Text style={styles.label}>Status</Text>
            <PhaseBar />
        </View>
    );
};

export default TaskForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        marginHorizontal: 40,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    icon: { marginStart: 24 },
    label: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 8,
    },
    textField: {
        borderColor: colors.gray700,
        backgroundColor: colors.gray400,
        borderWidth: 1,
        borderRadius: 4,
        fontSize: 16,
        paddingVertical: 4,
        paddingHorizontal: 8,
        marginBottom: 16,
    },
    descriptionField: {
        minHeight: 80,
        textAlignVertical: 'top'
    },
});