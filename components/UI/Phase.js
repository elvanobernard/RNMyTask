import { Pressable, View, Text, StyleSheet } from "react-native";
import colors from "../../static/colors";

const createPhase = (title, onPress, active, phaseStyle, textStyle) => {
    return (
        <Pressable style={[phaseStyle, active && styles.active]} onPress={onPress}>
            <Text style={textStyle}>{title}</Text>
        </Pressable>
    );
};

export const Phase = ({ title, onPress, active }) => {
    return createPhase(title, onPress, active, styles.phase, styles.title)
};

export const SmallPhase = ({ title, onPress, active }) => {
    return createPhase(title, onPress, active, styles.smallPhase, styles.smallTitle)
};

const styles = StyleSheet.create({
    phase: {
        backgroundColor: colors.gray700,
        paddingVertical: 9,
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },
    smallPhase: {
        backgroundColor: colors.gray700,
        paddingVertical: 4,
        paddingHorizontal: 8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
    },
    active: {
        backgroundColor: colors.primary500,
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