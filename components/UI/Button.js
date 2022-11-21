import { Pressable, View, Text, StyleSheet } from "react-native";
import colors from "../../static/colors";

const createButton = (title, onPress, buttonStyle, textStyle) => {
    return (
        <Pressable style={({ pressed }) => [buttonStyle, pressed && styles.pressed]} onPress={onPress}>
            <Text style={textStyle}>{title}</Text>
        </Pressable>
    );
}

const createPhase = (title, onPress, phaseStyle, textStyle) => {
    return (
        <Pressable style={phaseStyle} onPress={onPress}>
            <Text style={textStyle}>{title}</Text>
        </Pressable>
    );
};

export const Button = ({ title, onPress }) => {
    return createButton(title, onPress, styles.button, styles.title);
};

export const SmallButton = ({ title, onPress }) => {
    return createButton(title, onPress, styles.smallButton, styles.smallTitle);
};

export const Phase = ({ title, onPress }) => {
    return createPhase(title, onPress, styles.button, styles.title)
}

export const SmallPhase = ({ title, onPress }) => {
    return createPhase(title, onPress, styles.smallButton, styles.smallTitle)
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary500,
        paddingVertical: 9,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },
    smallButton: {
        backgroundColor: colors.primary500,
        paddingVertical: 4,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },
    pressed: {
        backgroundColor: colors.primary700,
    },
    title: {
        color: '#ffffff',
        fontWeight: '700',
    },
    smallTitle: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 12,
    },
});