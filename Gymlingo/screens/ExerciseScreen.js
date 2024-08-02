import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';

const ExerciseScreen = ({ route, navigation }) => {
  const { exercise } = route.params;
  const [reps, setReps] = useState('');
  const [sets, setSets] = useState('');
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
    setTimer(0);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  React.useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);
      }, 1000);
    } else if (!isRunning && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Image source={exercise.image} style={styles.image} resizeMode="contain" />
        <Text style={styles.name}>{exercise.name}</Text>
        <Text style={styles.instructions}>Instructions for {exercise.name}</Text>

        <TextInput
          style={styles.input}
          placeholder="Reps"
          keyboardType="numeric"
          returnKeyType="done"
          value={reps}
          onChangeText={setReps}
          onSubmitEditing={Keyboard.dismiss}
        />

        <TextInput
          style={styles.input}
          placeholder="Sets"
          keyboardType="numeric"
          returnKeyType="done"
          value={sets}
          onChangeText={setSets}
          onSubmitEditing={Keyboard.dismiss}
        />

        <View style={styles.timerContainer}>
          <Text style={styles.timerText}>Timer: {timer} sec</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={startTimer} style={styles.timerButton}>
              <Text style={styles.buttonText}>Start Timer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={stopTimer} style={styles.timerButton}>
              <Text style={styles.buttonText}>Stop Timer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 18,
    color: '#007BFF',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666666',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '80%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  timerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  timerText: {
    fontSize: 20,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  timerButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default ExerciseScreen;
