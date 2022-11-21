import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import TaskSummary from '../components/TaskSummary'
import colors from "../static/colors";

const Home = () => {
    const currentPage = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Text style={styles.username}>Hi, Elvano</Text>
                <Text style={styles.subtitle}>Welcome back</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.title}>My Tasks</Text>
                <View style={styles.statusContainer}>
                    <Text style={[styles.status, styles.statusActive]}>To Do</Text>
                    <Text style={styles.status}>In Progress</Text>
                    <Text style={styles.status}>Done</Text>
                </View>
                <View style={styles.taskList}>
                    <TaskSummary />
                    <TaskSummary />
                    <TaskSummary />
                </View>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        marginHorizontal: 20,
    },
    username: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.primary500
    },
    subtitle: {},
    userContainer: {
        marginBottom: 20,
    },
    taskContainer: {},
    title: {
        fontSize: 24,
        fontWeight: '900',
        marginBottom: 8,
    },
    statusContainer: {
        flexDirection: 'row',
        marginBottom: 16
    },
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
    taskList: {},
});