import React from "react";
import { View, Text, ScrollView } from "react-native";
import { COLORS, FONTS, SIZES, icons, dummyData } from "../../constants";
import { CardItem, Header, IconButton, TextButton } from "../../components";

const MyCard = ({ navigation }) => {
  const [selectedCard, setSelectedCard] = React.useState(null);

  function renderHeader() {
    return (
      <Header
        title="MY CARDS"
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 20,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 30,
              height: 30,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 18,
              height: 18,
              tintColor: COLORS.gray2,
            }}
            onPress={() => navigation.goBack()}
          />
        }
      />
    );
  }

  function renderMyCard() {
    return (
      <View>
        {dummyData.myCards.map((item, idx) => (
          <CardItem
            key={`MyCard-${item.id}`}
            item={item}
            onPress={() => setSelectedCard({ ...item, key: "MyCard" })}
            isSelected={
              `${selectedCard?.key}-${selectedCard?.id}` == `MyCard-${item.id}`
            }
          />
        ))}
      </View>
    );
  }

  function renderAddNewCard() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text style={{ ...FONTS.h3 }}>Add new card</Text>
        {dummyData.allCards.map((item, idx) => (
          <CardItem
            key={`NewCard-${item.id}`}
            item={item}
            onPress={() => setSelectedCard({ ...item, key: "NewCard" })}
            isSelected={
              `${selectedCard?.key}-${selectedCard?.id}` == `NewCard-${item.id}`
            }
          />
        ))}
      </View>
    );
  }

  function renderFooter() {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding,
        }}
      >
        <TextButton
          buttonContainerStyle={{
            height: 50,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedCard === null ? COLORS.gray : COLORS.primary,
          }}
          label={selectedCard?.key == "NewCard" ? "Add" : "Place your Order"}
          labelStyle={{ paddingTop: 12 }}
          disabled={selectedCard === null}
          onPress={() => {
            if (selectedCard?.key === "NewCard") {
              navigation.navigate("AddCard", { selectedCard });
            } else {
              navigation.navigate("Checkout", { selectedCard });
            }
          }}
        />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {renderHeader()}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        {renderMyCard()}
        {renderAddNewCard()}
      </ScrollView>
      {renderFooter()}
    </View>
  );
};

export default MyCard;
