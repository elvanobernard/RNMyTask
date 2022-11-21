import { View, Text, StyleSheet, Pressable } from "react-native";
import { Phase } from "./UI/Phase";

const PhaseBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.phase}>
                <Phase title={"TO DO"} active={true} />
            </View>
            <View style={styles.phase}>
                <Phase title={"IN PROGRESS"} />
            </View>
            <View style={styles.phase}>
                <Phase title={"DONE"} />
            </View>
        </View>
    );
};

export default PhaseBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    phase: {
        marginEnd: 8,
    },
});