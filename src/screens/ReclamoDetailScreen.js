// src/screens/ReclamoDetailScreen.js
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Title, Paragraph, List } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
/* import { useGetReclamoByIdQuery } from '../services/reclamoApi';
 */

const ReclamoDetailScreen = ({ route, navigation }) => {
    const { reclamo } = route.params;

    /* const { reclamoId } = route.params;
    const { data: reclamo, error, isLoading } = useGetReclamoByIdQuery(reclamoId);
 */
      // Manejar isLoading y error...

  // Mostrar los detalles...
    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.goBack()} />
                <Appbar.Content title={`Reclamo #${reclamo.id}`} />
            </Appbar.Header>
            <ScrollView contentContainerStyle={styles.container}>
                <Title style={styles.title}>Detalle del Reclamo #{reclamo.id}</Title>

                <List.Section>
                    <List.Item
                        title="Fecha de Creación"
                        description={new Date(reclamo.fecha_creacion).toLocaleDateString()}
                        left={(props) => <List.Icon {...props} icon="calendar" />}
                    />
                    <List.Item
                        title="Motivo"
                        description={reclamo.motivo}
                        left={(props) => <List.Icon {...props} icon="alert-circle" />}
                    />
                    <List.Item
                        title="Comentario"
                        description={reclamo.comentario}
                        left={(props) => <List.Icon {...props} icon="comment" />}
                    />
                    <List.Item
                        title="Localidad"
                        description={reclamo.localidad}
                        left={(props) => <List.Icon {...props} icon="map-marker" />}
                    />
                    <List.Item
                        title="Calle"
                        description={`${reclamo.calle} ${reclamo.numero_calle}`}
                        left={(props) => <List.Icon {...props} icon="road" />}
                    />
                    <List.Item
                        title="Prioridad"
                        description={reclamo.prioridad_reclamo}
                        left={(props) => <List.Icon {...props} icon="priority-high" />}
                    />
                    <List.Item
                        title="Estado"
                        description={reclamo.calificacion_reclamo}
                        left={(props) => <List.Icon {...props} icon="check-circle" />}
                    />
                    {/* Agrega más detalles según necesites */}
                </List.Section>
            </ScrollView>
        </>
    );
};

export default ReclamoDetailScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        marginBottom: 20,
        textAlign: 'center',
    },
});
