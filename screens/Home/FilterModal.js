import {
  View,
  Text,
  Animated,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import React from "react";
import { constants, icons, COLORS, SIZES, FONTS } from "../../constants";
import {
  IconButton,
  TowPointSlider,
  TextButton,
  TextIconButton,
} from "../../components";

const Section = ({ title, children, constainerStyle }) => (
  <View
    style={{
      marginTop: SIZES.padding,
      ...constainerStyle,
    }}
  >
    <Text style={{ ...FONTS.h3 }}>{title}</Text>
    {children}
  </View>
);

const FilterModal = ({ isVisible, onClose }) => {
  const [showFilterModal, setShowFilterModal] = React.useState(false);
  const modalAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const [deliveryTime, setDeliveryTime] = React.useState("");
  const [ratings, setRatings] = React.useState("");
  const [tags, setTags] = React.useState("");

  React.useEffect(() => setShowFilterModal(isVisible), [isVisible]);
  React.useEffect(() => {
    if (showFilterModal) {
      Animated.timing(modalAnimatedValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(modalAnimatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => onClose());
    }
  }, [showFilterModal]);

  const modalY = modalAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [SIZES.height, SIZES.height - 520],
  });

  const renderDistance = () => {
    return (
      <Section title="Distance">
        <View style={{ alignItem: "center" }}>
          <TowPointSlider
            values={[3, 10]}
            min={1}
            max={20}
            postfix="km"
            onValuesChange={(values) => console.log(values)}
          />
        </View>
      </Section>
    );
  };

  const renderDeliveryTime = () => (
    <Section title="Delivery Time" containerStyle={{ marginTop: 40 }}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: SIZES.radius,
        }}
      >
        {constants.delivery_time.map((item, idx) => (
          <TextButton
            key={`delivery_time-${idx}`}
            label={item.label}
            labelStyle={{
              color: item.id === deliveryTime ? COLORS.white : COLORS.gray,
              ...FONTS.body3,
            }}
            buttonContainerStyle={{
              width: "30%",
              height: 50,
              margin: 5,
              alignItems: "center",
              borderRadius: SIZES.base,
              backgroundColor:
                item.id === deliveryTime ? COLORS.primary : COLORS.lightGray2,
            }}
            onPress={() => setDeliveryTime(item.id)}
          />
        ))}
      </View>
    </Section>
  );

  const renderPricingRange = () => (
    <Section title="Pricing Range">
      <View style={{ alignItems: "center" }}>
        <TowPointSlider
          values={[10, 50]}
          min={1}
          max={100}
          prefix="$"
          onValuesChange={(values) => console.log(values)}
        />
      </View>
    </Section>
  );

  const renderRating = () => (
    <Section
      title="Rating"
      containerStyle={{
        marginTop: 40,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {constants.ratings.map((item, idx) => (
          <TextIconButton
            key={`rating-${idx}`}
            containerStyle={{
              flex: 1,
              height: 50,
              margin: 5,
              alignItems: "center",
              borderRadius: SIZES.base,
              backgroundColor:
                item.id === ratings ? COLORS.primary : COLORS.lightGray2,
            }}
            label={item.label}
            labelStyle={{
              color: item.id === ratings ? COLORS.white : COLORS.gray,
            }}
            icon={icons.star}
            iconStyle={{
              tintColor: item.id === ratings ? COLORS.white : COLORS.gray,
            }}
            onPress={() => setRatings(item.id)}
          />
        ))}
      </View>
    </Section>
  );

  const renderTags = () => (
    <Section title="Tags">
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {constants.tags.map((item, idx) => (
          <TextButton
            key={`Tag-${idx}`}
            label={item.label}
            labelStyle={{
              color: item.id === tags ? COLORS.white : COLORS.gray,
              ...FONTS.body3,
            }}
            buttonContainerStyle={{
              height: 50,
              margin: 5,
              paddingHorizontal: SIZES.padding,
              alignItems: "center",
              borderRadius: SIZES.base,
              backgroundColor:
                item.id === tags ? COLORS.primary : COLORS.lightGray2,
            }}
            onPress={() => setTags(item.id)}
          />
        ))}
      </View>
    </Section>
  );

  return (
    <Modal animationType="fade" visible={isVisible} transparent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.transparentBlack7,
        }}
      >
        <TouchableWithoutFeedback onPress={() => setShowFilterModal(false)}>
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
            }}
          />
        </TouchableWithoutFeedback>
        <Animated.View
          style={{
            position: "absolute",
            left: 0,
            top: modalY,
            width: "100%",
            height: "100%",
            padding: SIZES.padding,
            borderTopRightRadius: SIZES.padding,
            borderTopLeftRadius: SIZES.padding,
            backgroundColor: COLORS.white,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ flex: 1, ...FONTS.h3, fontSize: 18 }}>
              Filter your search
            </Text>
            <IconButton
              containerStyle={{
                borderWidth: 2,
                borderRadius: 10,
                borderColor: COLORS.gray2,
              }}
              icon={icons.cross}
              iconStyle={{ tintColor: COLORS.gray2 }}
              onPress={() => setShowFilterModal(false)}
            />
          </View>
          <ScrollView
            showHorizontalScrollIndicator={false}
            constentContainerStyle={{ paddingBottom: 280 }}
          >
            {renderDistance()}
            {renderDeliveryTime()}
            {renderPricingRange()}
            {renderRating()}
            {renderTags()}
          </ScrollView>
          <View
            style={{
              position: "absolute",
              bottom: 90,
              left: 0,
              right: 0,
              height: 50,
              paddingHorizontal: SIZES.padding,
              paddingVertical: SIZES.radius,
              backgroundColor: COLORS.white,
            }}
          >
            <TextButton
              label="Apply Filter"
              buttonContainerStyle={{
                height: 50,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.primary,
              }}
              onPress={() => console.log("Apply Filter")}
            />
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default FilterModal;
