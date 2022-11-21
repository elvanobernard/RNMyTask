import { Text, View, StyleSheet } from "react-native";
import { Button, SmallButton } from "../components/UI/Button";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Card from "../components/UI/Card";
import PhaseBar from "../components/PhaseBar";

const TaskDetail = () => {
    const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>MyTask</Text>
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <SmallButton title={'Attach'} />
                    </View>
                    <View style={styles.btn}>
                        <SmallButton title={'Add Child Issue'} />
                    </View>
                    <View style={styles.btn}>
                        <MaterialCommunityIcons name="square-edit-outline" size={24} color="black" />
                    </View>
                </View>
            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.title2}>Description</Text>
                <Text style={styles.description}>{description}</Text>
                {/* <View style={styles.status}>
                    <SmallButton title={'TO DO'} />
                </View> */}
                <PhaseBar />
            </View>
            <View style={styles.childContainer}>
                <Text style={styles.title2}>Child Issues</Text>
                {/* <Text>No child issue yet</Text> */}
                <Card>
                    <Text>MyChildTask</Text>
                    <SmallButton title={'DONE'} />
                </Card>
                <Card>
                    <Text>MyChildTask2</Text>
                    <SmallButton title={'TO DO'} />
                </Card>
            </View>
            <View style={styles.attachmentContainer}>
                <Text style={styles.title2}>Attachments (1)</Text>
                <Card><Text>Photo.jpg</Text></Card>
            </View>
        </View>
    );
};

export default TaskDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        marginHorizontal: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 18,
    },
    btnContainer: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
    },
    btn: {
        marginEnd: 8,
    },
    descriptionContainer: {
        marginBottom: 16,
    },
    title2: {
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 8,
    },
    description: {
        marginBottom: 16,
    },
    status: {
        flexDirection: 'row',
    },
    childContainer: {
        marginBottom: 16,
    },
    attachmentContainer: {
        marginBottom: 16,
    },
});