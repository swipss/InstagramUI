import { View, Text } from "react-native";
import React, { useState } from "react";
import SwiperFlatList from "react-native-swiper-flatlist";
import { videoData } from "./Database";
import SingleReel from "./SingleReel";

export default function ReelsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeIndex = ({ index }) => {
    setCurrentIndex(index);
  };

  return (
    <SwiperFlatList
      data={videoData}
      vertical={true}
      onChangeIndex={handleChangeIndex}
      renderItem={({ item, index }) => (
        <SingleReel item={item} index={currentIndex} />
      )}
      keyExtractor={(item, index) => index}
    />
  );
}
