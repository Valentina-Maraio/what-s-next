import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { booksData } from "../redux/data/books";
import { View, Text } from "react-native";

export default function BookScreen() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(booksData());
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }
  return (
    <View>
      <Text>Books List</Text>
      {data &&
        Object.keys(data).map(key => (
          <View key={key}>
            {data[key].map(item => (
              <View key={item.id}>
                <Text>Name: {item.Title}</Text>
                {/* Render other properties of 'item' as needed */}
              </View>
            ))}
          </View>
        ))}
    </View>
  );
}
