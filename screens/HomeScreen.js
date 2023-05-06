import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={{ marginTop: 15 }}>
      <Image
        style={{ height: 370, width: "100%", resizeMode: "contain" }}
        source={{
          uri: "https://ichef.bbci.co.uk/news/976/cpsprodpb/15E07/production/_112970698_qt.jpg",
        }}
      />

      <View style={{ padding: 10 }}>
        <Text
          style={{
            textAlign: "center",
            color: "#1CAF57",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Sharciga Su'aalaha
        </Text>

        <View
          style={{
            padding: 10,
            backgroundColor: "#1CAF57",
            borderRadius: 6,
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#fff",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Su'alaha waxey ka koobanyihiin 5 Shu'aalood
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#fff",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              15 sec kadib su'aasha wey isbadali doonta
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 5,
            }}
          >
            <Text style={{ color: "white" }}>•</Text>
            <Text
              style={{
                marginLeft: 4,
                color: "#fff",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Su'aalaha waa waajib in aad kajawabtaa dhamaantood
            </Text>
          </View>
        </View>
      </View>

      <Pressable
      onPress={() => navigation.navigate("Quiz")}
        style={{
          backgroundColor: "#1CAF57",
          padding: 14,
          width:120,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}
      >
        <Text style={{color:"white",fontWeight:"600",textAlign:"center"}}>Start Quiz</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
