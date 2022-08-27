import React from 'react';
import { SafeAreaView, ActivityIndicator, Text} from 'react-native';

export const Loading = () => {
  return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size={"large"} />
        <Text
          style={{
            marginTop: 10,
          }}
        >
          Loading...
        </Text>
      </SafeAreaView>
  );
};