import { Text, StyleSheet, Pressable } from "react-native";
import colors from "../static/colors";

const DateChild = ({ onPress, day, date, active }) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [styles.container, pressed && styles.pressed]}>
            <Text style={[styles.day, active && styles.dayActive]}>{day}</Text>
            <Text style={styles.date}>{date}</Text>
        </Pressable>
    );
}

export default DateChild;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 3,
        borderRadius: 4,
    },
    pressed: {
        backgroundColor: colors.gray400,
    },
    day: {
        fontWeight: '700',
        color: colors.gray700,
    },
    dayActive: {
        color: colors.primary500,
    },
    date: {
        fontWeight: '500',
    },
});