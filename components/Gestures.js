import React, { useRef } from "react";
import { Animated, Text, useWindowDimensions, View } from "react-native";

const CURSOR_SIDE_SIZE = 20;
const CURSOR_HALF_SIDE_SIZE = CURSOR_SIDE_SIZE / 2;

const Gestures = () => {
  const touch = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const dimensions = useWindowDimensions();

  //   console.log(dimensions);

  return (
    <View
      style={{
        width: dimensions.width,
        height: dimensions.height,
      }}
      onStartShouldSetResponder={() => true}
      onResponderMove={(event) => {
        touch.setValue({
          x: event.nativeEvent.locationX,
          y: event.nativeEvent.locationY,
        });
      }}
      onResponderRelease={() => {
        Animated.spring(touch, {
          toValue: {
            x: dimensions.width / 2 - CURSOR_HALF_SIDE_SIZE,
            y: dimensions.height / 2 - CURSOR_HALF_SIDE_SIZE,
          },
          useNativeDriver: false,
        }).start();
      }}
    >
      <Animated.View
        style={{
          position: "absolute",
          left: Animated.subtract(touch.x, CURSOR_HALF_SIDE_SIZE),
          top: Animated.subtract(touch.y, CURSOR_HALF_SIDE_SIZE),
          height: CURSOR_SIDE_SIZE,
          width: CURSOR_SIDE_SIZE,
          borderRadius: CURSOR_HALF_SIDE_SIZE,
          backgroundColor: "orange",
        }}
      />
    </View>
  );
};

export default Gestures;
