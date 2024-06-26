import { StyleSheet, Text, View,Image } from 'react-native';
import Transaction from './transaction';

export default function Homescreen() {
  return (
    <View style={styles.container}>

    <View style={styles.header}>
      <View style={{marginRight:15}}>
      <Image 
    source={require("./image/logo.jpg")}
    style={styles.image}
    />
   </View>

   <View>
    <Text style={{opacity:0.4}}>Welcome back,</Text>
    <Text style={{fontWeight:"bold",fontSize:18}} >Abigail Ninsin</Text>
    </View>

    </View>

<Image 
    source={require("./image/card.jpg")}
    style={styles.cardimage}
    />



<View style={styles.header}>
<View>
      <Image 
    source={require("./image/arrowup.png")}
    style={styles.icon}
    />
    <Text style={styles.text}>Sent</Text>
   </View>
   <View >
      <Image 
    source={require("./image/arrowdown.png")}
    style={styles.icon}
    />
    <Text>Recieve</Text>
   </View>
   <View >
      <Image 
    source={require("./image/dollar.png")}
    style={styles.icon}
    />
    <Text style={styles.text}>Loan</Text>
   </View>
   <View >
      <Image 
    source={require("./image/cloud.jpeg")}
    style={[styles.icon,{marginLeft:10}]} 
    />
    <Text style={styles.text}>Topup</Text>
   </View>

</View>

<Transaction/>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:30,
      
    },
  
    header:{
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
    },
  
    image: {
      width: 100,
      height: 100,
      borderRadius: 50, 
    },

    cardimage:{
        width:390,
        height:250,
        borderRadius: 20,     
    },
    icon: {
        width: 85,
        height: 85,
        borderRadius: 40,
      },
    
    text:{
        marginLeft:20
    }
  
  });
  
