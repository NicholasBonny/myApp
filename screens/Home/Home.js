import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { FilterModal } from "../";
import {
  FormInput,
  HorizontalFoodCard,
  TextButton,
  VerticalFoodCard,
} from "../../components";
import {
  SIZES,
  FONTS,
  icons,
  dummyData,
  COLORS,
  images,
} from "../../constants";
import LinearGradient from "react-native-linear-gradient";

const Section = ({ title, onPress, children }) => (
  <View>
    <View
      style={{
        flexDirection: "row",
        marginHorizontal: SIZES.padding,
        marginTop: 30,
        marginBotton: 20,
      }}
    >
      <Text style={{ flex: 1, ...FONTS.h3 }}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.body3,
          }}
        >
          Show all
        </Text>
      </TouchableOpacity>
    </View>
    {children}
  </View>
);

const Home = ({ navigation }) => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
  const [selectedMenuType, setSelectedMenuType] = React.useState(1);
  const [recommends, setRecommends] = React.useState([]);
  const [popular, setPopular] = React.useState([]);
  const [menuList, setMenuList] = React.useState([]);
  const [showFilterModal, setShowFilterModal] = React.useState(false);

  React.useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  const handleChangeCategory = (categoryId, menuTypeId) => {
    //   Retrieve Popular Items
    let selectedPopular = dummyData.menu.find((a) => a.name == "Popular");

    // set Popular menu based on the categoryid
    setPopular(
      selectedPopular?.list.filter((a) => a.categories.includes(categoryId))
    );

    //   Retrive recommends
    let selectedRecommended = dummyData.menu.find(
      (a) => a.name == "Recommended"
    );
    // Set the recommended menu based on the category Id

    setRecommends(
      selectedRecommended?.list.filter((a) => a.categories.includes(categoryId))
    );

    // Find the menu based on the menuType
    let selectedMenu = dummyData.menu.find((a) => a.id == menuTypeId);

    // set the menu list dased on the category Id
    setMenuList(
      selectedMenu?.list.filter((a) => a.categories.includes(categoryId))
    );
  };
  const renderBookBanner = () => (
    <View
      style={{
        height: 150,
        position: "relative",
        marginHorizontal: SIZES.base * 2,
        marginTop: SIZES.base * 2,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          padding: SIZES.padding,
          flexDirection: "row",
          alignItems: "center",
          zIndex: 999,
        }}
      >
        <View style={{ marginRight: 80 }}>
          <Text style={{ ...FONTS.h3 }}>Service at your</Text>
          <Text style={{ ...FONTS.h3 }}>Door Step</Text>
          <TextButton
            onPress={() => navigation.push("MechanicsList")}
            label="Book Now"
            buttonContainerStyle={{
              backgroundColor: COLORS.red2,
              paddingVertical: 10,
              borderRadius: 5,
              marginTop: 10,
            }}
          />
        </View>
        <Image source={images.onboard_2} style={{ height: 120, width: 100 }} />
      </View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 2 }}
        colors={[COLORS.transparentPrimary, COLORS.primary]}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 150,
          borderRadius: 15,
        }}
      />
    </View>
  );
  const renderMenuTypes = () => (
    <FlatList
      horizontal
      keyExtractor={(item) => `${item.id}`}
      data={dummyData.menu}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        marginTop: 30,
        marginBottom: 30,
      }}
      renderItem={({ item, idx }) => (
        <TouchableOpacity
          style={{
            marginLeft: SIZES.padding,
            marginRight: idx == dummyData.menu.length - 1 ? SIZES.padding : 0,
          }}
          onPress={() => {
            setSelectedMenuType(item.id);
            handleChangeCategory(selectedMenuType, item.id);
          }}
        >
          <Text
            style={{
              color:
                selectedMenuType == item.id ? COLORS.primary : COLORS.black,
              ...FONTS.h3,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );

  const renderRecommandedSection = () => (
    <Section title="Recommended" onPress={() => console.log("Recommended")}>
      <FlatList
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={recommends}
        renderItem={({ item, idx }) => (
          <HorizontalFoodCard
            constainerStyle={{
              height: 180,
              width: SIZES.width * 0.85,
              marginLeft: idx == 0 ? SIZES.padding : 18,
              marginRight: idx == recommends.length - 1 ? SIZES.padding : 0,
              paddingRight: SIZES.padding,
              alignItems: "center",
            }}
            imageStyle={{
              marginTop: 35,
              height: 150,
              width: 150,
            }}
            item={item}
            onPress={() => navigation.navigate("FoodDetail")}
          />
        )}
      />
    </Section>
  );

  const renderPopularSection = () => (
    <Section
      title="Popular Near You"
      onPress={() => console.log("handlePopular clicked")}
    >
      <FlatList
        data={popular}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, idx }) => (
          <VerticalFoodCard
            constainerStyle={{
              marginLeft: idx == 0 ? SIZES.padding : 18,
              marginRight: idx == popular.length - 1 ? SIZES.padding : 0,
            }}
            item={item}
            onPress={() => navigation.navigate("FoodDetail")}
          />
        )}
      />
    </Section>
  );

  const renderPreferredService = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {dummyData.categories.map((item, idx) => (
        <TouchableOpacity
          key={idx}
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: SIZES.base + 5,
            marginTop: SIZES.padding,
            marginLeft: idx === 0 ? SIZES.padding : SIZES.radius,
            marginRight:
              idx === dummyData.categories.length - 1 ? SIZES.padding : 0,
            paddingHorizontal: 8,
            borderRadius: SIZES.radius,
            backgroundColor:
              selectedCategoryId === item.id
                ? COLORS.transparentPrimary
                : COLORS.lightGray2,
          }}
          onPress={() => {
            setSelectedCategoryId(item.id);
            handleChangeCategory(item.id, selectedMenuType);
          }}
        >
          <Image
            source={item.icon}
            style={{
              marginTop: 5,
              height: 40,
              width: 40,
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              paddingTop: SIZES.base,
              marginRight: SIZES.base,
              ...FONTS.h4,
            }}
          >
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderService = () => (
    <View
      style={{
        marginVertical: SIZES.padding,
        marginHorizontal: SIZES.padding,
      }}
    >
      <Text
        style={{
          ...FONTS.h3,
        }}
      >
        Emergancy Service
      </Text>
      <FormInput
        onChange={(value) => {
          // utils.validateEmail(value, setEmailError);
          // setEmail(value);
        }}
        placeholder="Car Model"
        prependComponent={
          <View style={{ justifyContent: "center", marginRight: 10 }}>
            <Image
              source={icons.car}
              style={{
                height: 25,
                width: 25,
                tintColor: COLORS.darkGray,
              }}
            />
          </View>
        }
      />
      <FormInput
        onChange={(value) => {
          // utils.validateEmail(value, setEmailError);
          // setEmail(value);
        }}
        placeholder="Location"
        prependComponent={
          <View style={{ justifyContent: "center", marginRight: 10 }}>
            <Image
              source={icons.location1}
              style={{
                height: 25,
                width: 25,
                tintColor: COLORS.darkGray,
              }}
            />
          </View>
        }
      />
    </View>
  );

  const renderSearch = () => (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: SIZES.padding,
        marginVertical: SIZES.base,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          height: 40,
          flex: 1,
          alignItems: "center",
          marginRight: 20,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
        }}
      >
        <Image
          source={icons.location_pin}
          style={{ height: 20, width: 20, tintColor: COLORS.black }}
        />
        <TextInput
          placeholder="Use Current location"
          style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body4 }}
        />
      </View>
      <TouchableOpacity onPress={() => setShowFilterModal(true)}>
        <Image
          source={icons.notification}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.black,
          }}
        />
      </TouchableOpacity>
    </View>
  );
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Search Component */}
      {renderSearch()}

      {/* Filter Modal */}
      <FilterModal
        isVisible={showFilterModal}
        onClose={() => setShowFilterModal(false)}
      />
      <ScrollView style={{ flex: 1 }}>
        {/* List Component */}
        <View>
          {renderBookBanner()}
          {renderService()}
          {renderPreferredService()}
          <TextButton
            buttonContainerStyle={{
              marginHorizontal: SIZES.padding,
              borderRadius: 6,
              marginTop: SIZES.padding,
              paddingTop: 12,
              height: 50,
            }}
            label="Proceed"
            onPress={() => navigation.push("EmergancyList")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
