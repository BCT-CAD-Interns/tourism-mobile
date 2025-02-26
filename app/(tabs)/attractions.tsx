import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, Alert, TouchableOpacity } from 'react-native';
import { Container } from '~/components/Container';
import { AttractionsCard } from '~/components/AttractionsCard';
import { loadAttractions } from '~/assets/data/loadAttractions';
import { CarouselItem } from '~/assets/data/loadAttractions';

export default function Attractions() {
  const [sortMethod, setSortMethod] = useState<'default' | 'alphabetical'>('default');
  const [showSortMenu, setShowSortMenu] = useState(false);

  // Load attractions data
  const allAttractions = loadAttractions();

  // Sort attractions based on selected method
  const attractions = useMemo(() => {
    if (sortMethod === 'alphabetical') {
      return [...allAttractions].sort((a, b) => a.title.localeCompare(b.title));
    }
    return allAttractions;
  }, [allAttractions, sortMethod]);

  const handleAttractionPress = (id: string, title: string) => {
    // You can replace this with navigation to a detail page in the future
    Alert.alert(`Selected: ${title}`, 'View details for this attraction');
  };

  const toggleSortMenu = () => {
    setShowSortMenu(!showSortMenu);
  };

  const applySorting = (method: 'default' | 'alphabetical') => {
    setSortMethod(method);
    setShowSortMenu(false);
  };

  return (
    <Container>
      <View className="h-full px-4 py-6">
        <Text className="mb-6 font-poppins text-4xl font-bold">Attractions</Text>

        {/* Sorting Menu */}
        <View className="mb-4">
          <TouchableOpacity
            onPress={toggleSortMenu}
            className="flex-row items-center justify-between rounded-lg bg-gray-100 px-4 py-2">
            <Text className="font-poppins font-medium">
              Sort by: {sortMethod === 'alphabetical' ? 'A-Z Category' : 'Default'}
            </Text>
            <Text>▼</Text>
          </TouchableOpacity>

          {/* Dropdown Menu */}
          {showSortMenu && (
            <View className="absolute top-12 z-10 w-full rounded-lg bg-white shadow-md">
              <TouchableOpacity
                onPress={() => applySorting('default')}
                className={`border-b border-gray-200 px-4 py-3 ${sortMethod === 'default' ? 'bg-gray-100' : ''}`}>
                <Text className="font-poppins">Default</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => applySorting('alphabetical')}
                className={`px-4 py-3 ${sortMethod === 'alphabetical' ? 'bg-gray-100' : ''}`}>
                <Text className="font-poppins">A-Z Category</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        {attractions.length === 0 ? (
          <Text className="mt-4 text-center text-gray-500">No attractions found</Text>
        ) : (
          <FlatList
            data={attractions}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <AttractionsCard
                imageSource={item.imageSource}
                title={item.title}
                location={item.location}
                description={item.description}
                onPress={() => handleAttractionPress(item.id, item.title)}
                style={{ marginBottom: 16 }}
              />
            )}
          />
        )}
      </View>
    </Container>
  );
}
