import { View, Text, StyleSheet, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"bold",fontSize:30 ,marginBottom:90, textAlign: 'center'}}>Settings</Text>

      <View style={styles.header}>
      <View style={{rowGap:40}}>
      <Text>Language</Text>
      <Text>My Profile</Text>
      <Text>Contact Us</Text>
      <Text>Change Password</Text>
      <Text>Privacy Policy</Text>
      </View>

      <View style={{rowGap:40,fontSize:30,}}>
      <Text>{'\u003E'}</Text>
        <Text>{'\u003E'}</Text>
        <Text>{'\u003E'}</Text>
        <Text>{'\u003E'}</Text>
        <Text>{'\u003E'}</Text>
      </View>
</View>

      <View style={styles.toggle}>
      <Text> Toggle Theme </Text>
      <Switch value={true} onChange={()=>{}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:90,
    
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    columnGap:150,
  },
  toggle:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  }

});