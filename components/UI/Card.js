import { View, Text, StyleSheet, Pressable } from "react-native";
import colors from "../../static/colors";

const Card = ({ children, onPress }) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
            {children}
        </Pressable>
    )
};

export default Card;

const styles = StyleSheet.create({
    card: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: colors.gray400,
        borderRadius: 6,
        marginBottom: 8,
    },
    pressed: {
        backgroundColor: colors.gray700,
    }
});