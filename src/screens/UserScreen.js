import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const UserScreen = () => {
  const [data, setData] = useState('');

  const getData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        setData(res?.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({item}) => {
    return (
      <View style={styles.listWrapper}>
        <View style={styles.id}>
          <Text style={styles.idText}>{item.id}</Text>
        </View>
        <Text>Name: {item.name}</Text>
        <Text>UserName: {item.username}</Text>
        <Text>Email: {item.email}</Text>
        <Text>Phone: {item.phone}</Text>
        <Text>Website: {item.website}</Text>
        <Text>Address - </Text>
        <View style={{marginHorizontal: 20}}>
          <Text>City: {item.address.city}</Text>
          <Text>Street: {item.address.street}</Text>
          <Text>Suite: {item.address.suite}</Text>
          <Text>Zipcode: {item.address.zipcode}</Text>
        </View>
        <Text>Geo - </Text>
        <Text>Latitude: {item.address.geo.lat}</Text>
        <Text>Longitude: {item.address.geo.lng}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.headerText}>All User Data</Text>
      </SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  id: {
    marginBottom: 12,
    backgroundColor: 'gray',
    padding: 6,
    borderRadius: 20,
    marginTop: 9,
  },
  idText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 18,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 30,
    color: '#000',
  },
  listWrapper: {
    padding: 12,
    marginHorizontal: 18,
    backgroundColor: 'white',
    borderRadius: 12,
    marginTop: 18,
  },
});
