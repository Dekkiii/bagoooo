import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../../Context//authContext'; // Adjust the path

export const ProfileScreen = ({ navigation }) => {
  const { state, signOut } = useContext(AuthContext);

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 20 }}>
        Welcome, {state.firstname}!
      </Text>
      <Button title="Logout" onPress={() => signOut()} />
    </View>
  );
};

export default ProfileScreen;
