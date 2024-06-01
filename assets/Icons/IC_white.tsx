import React from "react";
import { View } from "react-native";
import Svg, { Rect } from "react-native-svg";

const IC_white = () => {
  return (
    <View>
      <Svg height="100" width="500">
        <Rect width="500" height="100" fill="black" />
      </Svg>
    </View>
  );
};

export default IC_white;
