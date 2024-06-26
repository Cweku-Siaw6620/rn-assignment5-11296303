import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function Transaction() {

  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 30 }}>  

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Transactions</Text>
          <Text style={{ marginRight: 20, fontSize: 15, paddingTop: 3 }}>Sell All</Text>
        </View>

      </View>

      <FlatList 
            vertical
            data={Transactions}
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

const Transactions = [
    {id: 1, image: require('./image/apple.png'), postion: 'Apple Store', company: 'Entertainment', 
      salary: '-$5,99',},

    {id: 2, image: require('./image/amazon.png'), postion: 'Amazon', company: 'Shopping', 
        salary: '-$12,99',},

    {id: 3, image: require('./image/bolt.png'), postion: 'Bolt', company: 'travelling', 
        salary: '-$30',},

    {id: 4, image: require('./image/shopping.jpeg'), postion: 'Grocery', company: 'Shopping', 
        salary: '-$88',},

    {id: 5, image: require('./image/transaction.png'), postion: 'Money Transfer', company: 'Facebook ', 
        salary: '$300',},

    {id: 6, image: require('./image/twitter.png'), postion: 'Twitter', company: 'Entertainment', 
        salary: '$208', },
      
    {id: 7, image: require('./image/spotify.png'), postion: 'Spotify', company: 'Music', 
        salary: '-$7,22', },
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
