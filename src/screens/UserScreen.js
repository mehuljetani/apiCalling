import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchData} from '../helper/globalFunction';
import {deleteUser} from '../redux/action';

const UserScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const data = useSelector(state => {
    return state.getUser.arr;
  });

  const getData = () => {
    let request = {
      // data: {
      //   url: `https://jsonplaceholder.typicode.com/users`,
      // },
      onSuccess: res => {
        console.log('response on screen', res);
      },
      onFail: err => {
        console.log('error on screen ', err);
      },
    };
    dispatch(fetchData(request));
  };

  const onDeletePress = id => {
    dispatch(deleteUser(id));
  };

  const onEditPress = item => {
    navigation.navigate('UpdateScreen', {item: item});
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
        <Button
          title="Delete"
          color={'red'}
          onPress={() => onDeletePress(item.id)}
        />
        <Button title="Edit" color={'blue'} onPress={() => onEditPress(item)} />
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
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 18,
  },
});
