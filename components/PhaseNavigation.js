import { Text, Pressable, StyleSheet } from "react-native";
import colors from "../static/colors";

const PhaseNavigation = ({ onPress, phase, index, active }) => {
    const pressHandler = () => {
        onPress(index);
    }

    return (
        <Pressable onPress={pressHandler}>
            <Text style={[styles.status, active && styles.statusActive]}>{phase.name}</Text>
        </Pressable>
    );
};

export default PhaseNavigation;

const styles = StyleSheet.create({
    status: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.gray700,
        marginEnd: 16
    },
    statusActive: {
        color: colors.primary700,
        fontWeight: '900',
    },
});
