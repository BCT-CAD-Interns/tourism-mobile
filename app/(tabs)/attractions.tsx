import React, { useState, useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Container } from '~/components/Container';
import { AttractionsCard } from '~/components/AttractionsCard';
import { loadAttractions } from '~/assets/data/loadAttractions';
import { router } from 'expo-router';
import CategoryDropdown from '~/components/CategoryDropdown';

export default function Attractions() {
  const [sortMethod, setSortMethod] = useState<'default' | 'alphabetical'>('default');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Load attractions data
  const allAttractions = loadAttractions();

  // Sort and filter attractions based on selected method and category
  const attractions = useMemo(() => {
    let filteredAttractions = [...allAttractions];

    // First apply category filtering
    if (selectedCategory !== 'All') {
      if (selectedCategory === 'A-Z') {
        // Special case for A-Z, just sort alphabetically
        filteredAttractions.sort((a, b) => a.title.localeCompare(b.title));
      } else {
        // Filter by category
        filteredAttractions = filteredAttractions.filter(
          (attraction) => attraction.category === selectedCategory
        );
      }
    }

    // Then apply sorting if needed
    if (sortMethod === 'alphabetical') {
      filteredAttractions.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filteredAttractions;
  }, [allAttractions, sortMethod, selectedCategory]);

  const handleAttractionPress = (id: string) => {
    router.push(`/attraction-details?id=${id}`);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <View className="h-full gap-2 px-4">
        <View className="flex-row items-center justify-between">
          <Text className="font-gotham-black text-4xl">Attractions</Text>
          <View className="my-4 self-end">
            <CategoryDropdown
              onSelectCategory={handleCategorySelect}
              selectedCategory={selectedCategory}
            />
          </View>
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
                onPress={() => handleAttractionPress(item.id)}
                style={{ marginBottom: 16 }}
              />
            )}
          />
        )}
      </View>
    </Container>
  );
}
