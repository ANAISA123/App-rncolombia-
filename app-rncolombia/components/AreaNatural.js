import { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { getAreaNatural } from "../api/services";

const AreaNatural = () => {

    const [AreaNatu, setAreaNatu] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const AreaNatu= await getAreaNatural();
            setAreaNatu(AreaNatu);
        }
        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Area Natural de Colombia:</Text>
            {AreaNatu.map(AreaNatu => (
                <Text key={AreaNatu.id} style={styles.text}>{AreaNatu.name}</Text>
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

export default AreaNatural;