import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import DateChild from "../components/DateChild";

import { MaterialIcons } from '@expo/vector-icons';
import colors from "../static/colors";
import Appointment from "../components/Appointment";

const Calendar = () => {
    const [activeDate, setActiveDate] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Monday</Text>
                <Text style={styles.subtitle}>November 14, 2022</Text>
            </View>
            <View style={styles.dateContainer}>
                <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
                <DateChild day={'Mon'} date={14} active={true} />
                <DateChild day={'Tue'} date={15} />
                <DateChild day={'Wed'} date={16} />
                <DateChild day={'Thu'} date={17} />
                <DateChild day={'Fri'} date={18} />
                <DateChild day={'Sat'} date={19} />
                <DateChild day={'Sun'} date={20} />
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </View>
            <View style={styles.appointmentContainer}>
                <Appointment title={'Interview'} subtitle={'Lorem ipsum'} time={'09.30'} upcoming={true} />
                <Appointment title={'Team Meeting'} subtitle={'Design Team'} time={'10.30'} />
            </View>
        </View>
    );
};

export default Calendar;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        marginHorizontal: 20,
    },
    title: {
        color: colors.primary500,
        fontSize: 24,
        fontWeight: '700',
    },
    subtitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    header: {
        marginBottom: 24
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    appointmentContainer: {},
});