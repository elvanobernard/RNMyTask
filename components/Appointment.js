import { View, Text, Pressable, StyleSheet } from "react-native";
import colors from "../static/colors";

const Appointment = ({ title, subtitle, time, upcoming }) => {



    return (
        <Pressable style={({ pressed }) => [
            styles.container,
            upcoming && styles.containerActive,
            pressed && (upcoming ? styles.pressedActive : styles.pressed)]}>
            <View>
                <Text style={[styles.title, upcoming && styles.textActive]}>{title}</Text>
                <Text style={[styles.subtitle, upcoming && styles.textActive]}>{subtitle}</Text>
            </View>
            <Text style={[styles.title, upcoming && styles.textActive]}>{time}</Text>
        </Pressable>
    );
};

export default Appointment;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors.white100,
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderRadius: 8,
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    pressed: {
        backgroundColor: colors.white200,
    },
    title: {
        fontWeight: '700',
    },
    subtitle: {},
    containerActive: {
        backgroundColor: colors.primary500,
        paddingBottom: 48,
    },
    pressedActive: {
        backgroundColor: colors.primary700,
    },
    textActive: { color: '#ffffff' },
});