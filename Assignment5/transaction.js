import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function Transaction() {

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 30 }}>  

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Transactions</Text>
          <Text style={{ marginRight: 20, fontSize: 15, paddingTop: 3 }}>See all</Text>
        </View>

      </View>

      <FlatList 
            vertical
            data={Transaction}
            renderItem={({ item }) => (

                  <View style={styles.contain}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image style={styles.image} source={item.image}/>

                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.postion}>{item.postion}</Text>
                        <Text style={styles.company}>{item.company}</Text>
                    </View>
                    </View>

                    

                    <View style={{flexDirection: 'column'}}>
                    <Text style={styles.salary}>{item.salary}</Text>
                        <Text style={styles.location}>{item.location}</Text>
                    </View>
                  </View>
                    
            )}
        />
    </View>
  );
}

const Popularjobs = [
    {id: 1, image: require('./image/apple.png'), postion: 'Jnr Executive', company: 'Amazon', 
      salary: '$96,000/y',},

    {id: 2, image: require('./image/amazon.png'), postion: 'Product Manager', company: 'Beats', 
        salary: '$86,000/y',},

    {id: 3, image: require('./image/bolt.png'), postion: 'Product Manager', company: 'Bolt', 
        salary: '$86,000/y',},

    {id: 4, image: require('./image/shopping.jpeg'), postion: 'Snr Executive', company: 'BurgerKing', 
        salary: '$99,000/y',},

    {id: 5, image: require('./image/transaction.png'), postion: 'Product Manager', company: 'Facebook ', 
        salary: '$78,000/y',},

    {id: 6, image: require('./image/twitter.png'), postion: 'Comus Manager', company: 'Twitter', 
        salary: '$208,550/y', },
      
    {id: 7, image: require('./image/spotify.png'), postion: 'Engineer', company: 'Spotify', 
        salary: '$102,500/y', },
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginBottom: 50
  },
  
  image: {
    height: 45,
    width: 45,
    marginRight: 15
  },

  contain: {
    padding: 20,
    backgroundColor: 'FAFAFA',
    flexDirection: 'row', 
    alignItems: 'center',
    borderWidth: 0.1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 20, 
    justifyContent: 'space-between',
  },

  postion: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  salary: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  salary: {
    fontWeight: 'bold',
  }
});
