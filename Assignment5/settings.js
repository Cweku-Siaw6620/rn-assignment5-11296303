import React from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { useTheme } from 'styled-components/native';

export default function SettingsScreen ({ setIsDarkTheme, isDarkTheme })  {
  const theme = useTheme();

  const toggleTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
   <View>
          <Switch value={isDarkTheme} onValueChange={toggleTheme} />
          </View>
  );
};

