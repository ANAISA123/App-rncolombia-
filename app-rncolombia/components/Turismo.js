import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { getTurismo } from "../api/services";

const Turismo = () => {

    const [Turist, setTurismo] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const Turist= await getTurismo();
            setTurismo(Turist);
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Turismo de Colombia:</Text>
            {Turist.map(turismo => (
                <Text key={turismo.id} style={styles.text}>{turismo.name}</Text>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        marginVertical: 5,
    },
});

export default Turismo;