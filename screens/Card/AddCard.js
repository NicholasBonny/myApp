import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  Header,
  IconButton,
  TextButton,
  FormInput,
  RadioButton,
} from "../../components";
import { utils } from "../../utils";
import { COLORS, FONTS, SIZES, icons, images } from "../../constants";

const AddCard = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardNumberError, setCardNumberError] = React.useState("");
  const [cardName, setCardName] = React.useState("");
  const [cardNameError, setCardNameError] = React.useState("");
  const [expiryDate, setExpiryDate] = React.useState("");
  const [expiryDateError, setExpiryDateError] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [cvvError, setCvvError] = React.useState("");
  const [isRemember, setIsRemember] = React.useState(false);

  React.useEffect(() => {
    const { selectedCard } = route.params;
    setSelectedCard(selectedCard);
  }, []);

  function isEnableButton() {
    return (
      cardName !== "" &&
      cardNameError === "" &&
      cardNumber !== "" &&
      cardNumberError === "" &&
      expiryDate !== "" &&
      expiryDateError === "" &&
      cvv !== "" &&
      cvvError === ""
    );
  }

  function renderHeader() {
    return (
      <Header
        title="Add CARD"
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

  function renderCard() {
    return (
      <ImageBackground
        style={{
          width: "100%",
          height: 180,
          marginTop: SIZES.radius,
          borderRadius: SIZES.radius,
          overflow: "hidden",
        }}
        source={images.card}
      >
        <Image
          source={selectedCard?.icon}
          resizeMode="contain"
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            height: 30,
            width: 75,
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 10,
            left: 0,
            right: 0,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text style={{ ...FONTS.h3, color: COLORS.white }}>{cardName}</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
              {cardNumber}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
              {expiryDate}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }

  function renderForm() {
    return (
      <View style={{ marginTop: SIZES.padding * 2 }}>
        <FormInput
          label="Card Number"
          keyboardType="number-pad"
          onChange={(value) => {
            utils.validateInput(value, 19, setCardNumberError);
            setCardNumber(
              value
                .replace(/\s/g, "")
                .replace(/(\d{4})/g, "$1 ")
                .trim()
            );
          }}
          errorMsg={cardNumberError}
          maxLength={19}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                source={
                  cardNumber === "" ||
                  (cardNumber !== " " && cardNumberError === "")
                    ? icons.correct
                    : icons.cross
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    cardNumber === ""
                      ? COLORS.gray
                      : cardNumber !== "" && cardNumberError === ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
        <FormInput
          label="Card Name"
          onChange={(value) => {
            utils.validateInput(value, 1, setCardNameError);
            setCardName(value);
          }}
          containerStyle={{ marginTop: SIZES.base }}
          errorMsg={cardNameError}
          appendComponent={
            <View style={{ justifyContent: "center" }}>
              <Image
                source={
                  cardName === "" || (cardName !== " " && cardNameError === "")
                    ? icons.correct
                    : icons.cross
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    cardName === ""
                      ? COLORS.gray
                      : cardName !== "" && cardNameError === ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />
        <View style={{ flexDirection: "row", marginTop: SIZES.radius }}>
          <FormInput
            label="Expiry Date"
            placeholder="MM/YY"
            maxLength={5}
            containerStyle={{ flex: 1 }}
            onChange={(value) => {
              utils.validateInput(value, 5, setExpiryDateError);
              setExpiryDate(value);
            }}
            // maxLength={19}
            appendComponent={
              <View style={{ justifyContent: "center" }}>
                <Image
                  source={
                    expiryDate === "" ||
                    (expiryDate !== " " && expiryDateError === "")
                      ? icons.correct
                      : icons.cross
                  }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor:
                      expiryDate === ""
                        ? COLORS.gray
                        : expiryDate !== "" && expiryDateError === ""
                        ? COLORS.green
                        : COLORS.red,
                  }}
                />
              </View>
            }
          />
          <FormInput
            label="CVV"
            keyboardType="number-pad"
            onChange={(value) => {
              utils.validateInput(value, 3, setCvvError);
              setCvv(value);
            }}
            maxLength={3}
            containerStyle={{ flex: 1, marginLeft: SIZES.radius }}
            // errorMsg={cardNameError}
            appendComponent={
              <View style={{ justifyContent: "center" }}>
                <Image
                  source={
                    cvv === "" || (cvv !== " " && cvvError === "")
                      ? icons.correct
                      : icons.cross
                  }
                  style={{
                    height: 20,
                    width: 20,
                    tintColor:
                      cvv === ""
                        ? COLORS.gray
                        : cvv !== "" && cvvError === ""
                        ? COLORS.green
                        : COLORS.red,
                  }}
                />
              </View>
            }
          />
        </View>
        <View style={{ alignItems: "flex-start", marginTop: SIZES.padding }}>
          <RadioButton
            label="Remember this card"
            isSelected={isRemember}
            onPress={() => setIsRemember(!isRemember)}
          />
        </View>
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
          label="Add Card"
          labelStyle={{ paddingTop: 12 }}
          onPress={() => navigation.goBack()}
          buttonContainerStyle={{
            height: 50,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableButton()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          disabled={!isEnableButton()}
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
      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {renderCard()}
        {renderForm()}
      </KeyboardAwareScrollView>
      {renderFooter()}
    </View>
  );
};

export default AddCard;
