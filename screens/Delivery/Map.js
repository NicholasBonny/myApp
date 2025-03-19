import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import LinearGradient from "react-native-linear-gradient";
import { IconButton } from "../../components";
import {
  FONTS,
  COLORS,
  SIZES,
  icons,
  constants,
  images,
  dummyData,
} from "../../constants";
import { utils } from "../../utils";

const Map = ({ navigation }) => {
  const mapView = React.useRef();
  const [region, setRegion] = React.useState(null);
  const [toLoc, setToLoc] = React.useState(null);
  const [fromLoc, setFromLoc] = React.useState(null);
  const [angle, setAngle] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);
  const [duration, setDuration] = React.useState("20");

  React.useEffect(() => {
    let initialRegion = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };

    let destination = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    };
    setToLoc(destination);
    setFromLoc(dummyData.fromLocs[1]);
    setRegion(initialRegion);
  }, []);

  function renderMap() {
    return (
      <MapView
        ref={mapView}
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
      >
        {fromLoc && (
          <Marker
            key={"FromLoc"}
            coordinate={fromLoc}
            tracksViewChanges={false}
            icon={icons.navigator1}
            rotation={angle}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        )}
        {toLoc && (
          <MapView
            key={"ToLoc"}
            coordinate={toLoc}
            tracksViewChanges={false}
            icon={icons.location_pin}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        )}
        <MapViewDirections
          origin={fromLoc}
          destination={toLoc}
          apikey={constants.GOOGLE_MAP_API_KEY}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWayPoints={true}
          onReady={(result) => {
            setDuration(Math.ceil(result.duration));
            if (!isReady) {
              //   Fit the map based on the route
              mapView.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: SIZES.width * 0.1,
                  bottom: 400,
                  left: SIZES.width * 0.1,
                  top: SIZES.height * 0.1,
                },
              });

              //   Reposition the navigator
              if (result.coordinate.length >= 2) {
                let angle = utils.calculateAngle(result.coordinates);
                setAngle(angle);
              }
              setIsReady(true);
            }
          }}
        />
      </MapView>
    );
  }

  function renderHeader() {
    return (
      <>
        <IconButton
          containerStyle={{
            position: "absolute",
            top: SIZES.padding * 1.5,
            left: SIZES.padding,
            ...styles.buttonStyle,
          }}
          icon={icons.back}
          iconStyle={{
            width: 18,
            height: 18,
            tintColor: COLORS.gray2,
          }}
          onPress={() => navigation.goBack()}
        />
        <View
          style={{
            position: "absolute",
            top: SIZES.padding * 1.5,
            right: SIZES.padding,
          }}
        >
          <IconButton
            icon={icons.globe}
            iconStyle={{
              width: 18,
              height: 18,
              tintColor: COLORS.gray,
            }}
            containerStyle={{ ...styles.buttonStyle }}
          />
          <IconButton
            icon={icons.focus}
            iconStyle={{
              width: 18,
              height: 18,
              tintColor: COLORS.gray,
            }}
            containerStyle={{ ...styles.buttonStyle, marginTop: SIZES.radius }}
          />
        </View>
      </>
    );
  }

  function renderInfo() {
    return (
      <View style={{ position: "absolute", width: "100%", bottom: 0 }}>
        {/* Linear gradient */}
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.lightGray1]}
          style={{
            position: "absolute",
            top: -20,
            left: 0,
            right: 0,
            height: Platform.OS === "ios" ? 200 : 50,
          }}
        />
        {/* info container */}
        <View
          style={{
            padding: SIZES.padding,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            backgroundColor: COLORS.white,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={icons.clock}
              style={{ width: 30, height: 30, tintColor: COLORS.black }}
            />
            <View style={{ marginLeft: SIZES.padding }}>
              <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
                Your delivery time
              </Text>
              <Text style={{ ...FONTS.h3 }}>{duration} minutes</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: SIZES.padding,
            }}
          >
            <Image
              source={icons.focus}
              style={{
                width: 30,
                height: 30,
                tintColor: COLORS.black,
              }}
            />
            <View style={{ marginLeft: SIZES.padding }}>
              <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
                Your Address
              </Text>
              <Text style={{ ...FONTS.h3 }}>88, jin Kuching</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 60,
              marginTop: SIZES.padding,
              borderRadius: SIZES.radius,
              paddingHorizontal: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
            }}
          >
            <Image
              source={images.profile}
              style={{
                height: 35,
                width: 35,
                borderRadius: 5,
              }}
            />
            <View style={{ marginLeft: SIZES.padding, flex: 1 }}>
              <Text style={{ ...FONTS.h3, color: COLORS.white }}>
                By Programmers
              </Text>
              <Text style={{ ...FONTS.body4, color: COLORS.white }}>
                Delivery Man
              </Text>
            </View>
            <View
              style={{
                height: 35,
                width: 35,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: COLORS.white,
                backgroundColor: COLORS.transparentWhite1,
              }}
            >
              <Image
                source={icons.call}
                style={{
                  height: 28,
                  width: 28,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {renderMap()}
      {renderHeader()}
      {renderInfo()}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 30,
    height: 30,
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.white,
  },
});

export default Map;
