import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
// import { useDispatch, use } from '@reduxjs/toolkit';
import axios from "axios";

import TaskSummary from '../components/TaskSummary'
import PhaseNavigation from "../components/PhaseNavigation";
import colors from "../static/colors";
import { localhost, port } from "../static/development";
import { Button } from "../components/UI/Button";

const Home = ({ navigation }) => {
    const [currentPhase, setCurrentPhase] = useState(0);
    const [phases, setPhases] = useState([]);
    const [tasks, setTasks] = useState([]);

    const extractData = (object) => {
        return object.data.data.data;
    }

    const getHomeData = async () => {
        try {
            let phaseData = await axios.get(`${localhost}/api/v1/phases`);
            phaseData = extractData(phaseData);
            let taskData = await axios.get(`${localhost}/api/v1/tasks?phase=${phaseData[currentPhase]._id}`);
            taskData = extractData(taskData);
            setPhases(phaseData);
            setTasks(taskData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getHomeData();
    }, []
    );

    // HANDLER
    const phaseNavHandler = async (index) => {
        try {
            setCurrentPhase(index);
            let taskData = await axios.get(`${localhost}/api/v1/tasks?phase=${phases[index]._id}`);
            taskData = extractData(taskData);
            setTasks(taskData);
        } catch (err) {
            console.log(err);
        }
    }

    const taskPressHandler = () => {
        navigation.navigate('TaskDetail');
    }

    const newTaskHandler = () => {
        navigation.navigate('TaskForm');
    }

    return (
        <View style={styles.container}>
            <View style={styles.userContainer}>
                <Text style={styles.username}>Hi, Elvano</Text>
                <Text style={styles.subtitle}>Welcome back</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.title}>My Tasks</Text>
                <View style={styles.statusContainer}>
                    {phases.map((phase, index) => {
                        return <PhaseNavigation key={phase._id} onPress={phaseNavHandler} phase={phase} index={index} active={index === currentPhase} />
                    })}
                    {/* <Text style={[styles.status, styles.statusActive]}>To Do</Text>
                    <Text style={styles.status}>In Progress</Text>
                    <Text style={styles.status}>Done</Text> */}
                </View>
                <View style={styles.taskList}>
                    {
                        tasks.map(task => <TaskSummary key={task._id} task={task} onPress={taskPressHandler} />)
                    }
                </View>
            </View>
            <Button title={"New Task"} onPress={newTaskHandler} />
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
    taskList: {},
});