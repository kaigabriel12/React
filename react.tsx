import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { spawn } from 'child_process';

const SquareScreen = () => {
  const [number, setNumber] = useState('');
  const [square, setSquare] = useState(null);

  const handlePress = () => {
    const pythonProcess = spawn('python', ['square.py', number]);
    pythonProcess.stdout.on('data', (data) => {
      const result = parseInt(data.toString());
      setSquare(result);
    });
  };

  return (
    <View>
      <TextInput
        value={number}
        onChangeText={setNumber}
        keyboardType="numeric"
        placeholder="Enter a number"
      />
      <Button title="Calculate Square" onPress={handlePress} />
      {square && <Text>The square of {number} is {square}</Text>}
    </View>
  );
};

export default SquareScreen;
