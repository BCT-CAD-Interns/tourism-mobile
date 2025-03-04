import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView, Animated, Easing } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Hamburger from '~/assets/images/Multimedia/Vector-4.svg';

interface CategoryDropdownProps {
  onSelectCategory?: (category: string) => void;
  selectedCategory?: string;
}

export default function CategoryDropdown({
  onSelectCategory,
  selectedCategory,
}: CategoryDropdownProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const rotateAnim = useRef(new Animated.Value(0)).current;

  const categories = ['All', 'A-Z'];

  // Animate icon rotation
  const toggleMenu = () => {
    Animated.timing(rotateAnim, {
      toValue: modalVisible ? 0 : 1,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
    setModalVisible(!modalVisible);
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'], // Smooth rotation animation
  });

  return (
    <>
      {/* Dropdown Button */}
      <TouchableOpacity
        className="h-12 w-12 flex-row items-center justify-center rounded-lg border border-gray-200"
        onPress={toggleMenu}>
        <Animated.View style={{ transform: [{ rotate: rotation }] }}>
          {modalVisible ? (
            <Ionicons name="close" size={24} color="#5F2E84" />
          ) : (
            <Hamburger width={24} height={24} />
          )}
        </Animated.View>
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={toggleMenu}>
        <TouchableOpacity className="flex-1 pt-16 " activeOpacity={1} onPress={toggleMenu}>
          <View className="mx-5 w-1/3 self-end overflow-hidden rounded-lg bg-white shadow-lg">
            <ScrollView className="max-h-[300px]">
              {categories.map((category, index) => (
                <TouchableOpacity
                  key={index}
                  className={`border-b border-gray-100 px-4 py-3 active:bg-gray-50
                    ${selectedCategory === category ? 'bg-purple-100' : ''}`}
                  onPress={() => {
                    onSelectCategory?.(category);
                    toggleMenu();
                  }}>
                  <Text
                    className={`font-gotham-book text-base
                    ${selectedCategory === category ? 'text-purple-800' : ''}`}>
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}
