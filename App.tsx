import React from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  const nuevaCitaHandler = () => {
    console.log('Discte clack al crear nueva cita...');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable style={styles.btnNuevaCita} onPress={nuevaCitaHandler}>
        <Text style={styles.btnTextoNuevaCita}>Nueva cita</Text>
      </Pressable>
    </SafeAreaView>
  );
};

// para los estilos
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0072AF',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    // textTransform: 'uppercase',
    marginTop: 20,
    fontSize: 26,
    color: '#FFFFFF',
  },

  tituloBold: {
    fontWeight: '900',
    color: '#EAFB10',
  },

  btnNuevaCita: {
    backgroundColor: '#6D2891',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10,
  },

  btnTextoNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 15,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
});

export default App;
