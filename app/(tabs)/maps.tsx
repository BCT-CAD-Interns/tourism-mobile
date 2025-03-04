import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { WebView } from 'react-native-webview';
import { Container } from '~/components/Container';
import { loadAttractions } from '~/assets/data/loadAttractions';
import { CarouselItem } from '~/assets/data/loadAttractions';
import { router } from 'expo-router';

// Define categories for filtering
const categories = [
  { id: 'all', name: 'All' },
  { id: 'adventure', name: 'Adventure & Eco Tourism' },
  { id: 'culture', name: 'Culture & Heritage Landmarks' },
  { id: 'food', name: 'Food & Culinary Traditions' },
  { id: 'farm', name: 'Farm Tourism' },
  { id: 'unexplored', name: 'Unexplored Places' },
];

// Group headings for the details panel
const groupHeadings: Record<string, string> = {
  adventure: 'Natural Landscapes',
  culture: 'Culture & Heritage',
  food: 'Food & Dining',
  farm: 'Farm Destinations',
  unexplored: 'Unexplored Places',
  other: 'Other Places',
};

export default function Maps() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedAttraction, setSelectedAttraction] = useState<CarouselItem | null>(null);
  const attractions = loadAttractions();
  const webViewRef = useRef<WebView>(null);
  const [isRightPanelVisible, setIsRightPanelVisible] = useState(false);

  // Filter attractions based on selected category
  const filteredAttractions =
    selectedCategory === 'all'
      ? attractions
      : attractions.filter((attraction) => attraction.category === selectedCategory);

  // Group attractions by category for the right panel
  const groupedAttractions: Record<string, CarouselItem[]> = attractions.reduce(
    (acc: Record<string, CarouselItem[]>, attraction) => {
      const category = attraction.category || 'other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(attraction);
      return acc;
    },
    {}
  );

  // Handle marker click
  const handleMarkerPress = (id: string) => {
    const attraction = attractions.find((a) => a.id === id);
    if (attraction) {
      setSelectedAttraction(attraction);
      setIsRightPanelVisible(true);
    }
  };

  // Update markers when category changes
  useEffect(() => {
    if (webViewRef.current) {
      const data = {
        type: 'updateMarkers',
        category: selectedCategory,
      };
      webViewRef.current.postMessage(JSON.stringify(data));
    }
  }, [selectedCategory]);

  // Prepare the HTML content for the WebView with Leaflet
  const generateMapHTML = () => {
    // Convert attractions data to JSON string for the WebView
    const markersData = JSON.stringify(
      attractions.map((a) => ({
        id: a.id,
        lat: parseFloat(a.latitude || '8.9475'),
        lng: parseFloat(a.longitude || '125.5406'),
        title: a.title,
        category: a.category || 'other',
        imageUrl: a.imageSource ? a.imageSource.toString() : null,
      }))
    );

    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
          <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
          <style>
            body, html, #map { height: 100%; margin: 0; padding: 0; }
            .custom-marker-icon {
              background-color: #080852;
              border-radius: 50%;
              border: 2px solid white;
              width: 20px;
              height: 20px;
              display: flex;
              justify-content: center;
              align-items: center;
              color: white;
              font-weight: bold;
            }
            .marker-adventure { background-color: #FEC107; }
            .marker-culture { background-color: #080852; }
            .marker-food { background-color: #E57373; }
            .marker-farm { background-color: #81C784; }
            .marker-unexplored { background-color: #7986CB; }
            .leaflet-popup-content { 
              width: 200px; 
              padding: 5px;
            }
            .popup-title {
              font-weight: bold;
              margin-bottom: 5px;
            }
          </style>
        </head>
        <body>
          <div id="map"></div>
          <script>
            // Initialize the map centered on Butuan City
            const map = L.map('map').setView([8.9475, 125.5406], 13);
            
            // Add OpenStreetMap tile layer
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; OpenStreetMap contributors'
            }).addTo(map);
            
            // Parse the markers data
            const allMarkers = ${markersData};
            const markers = {};
            let activeCategory = 'all';
            
            // Create and add markers to the map
            allMarkers.forEach(markerData => {
              const marker = L.marker([markerData.lat, markerData.lng], {
                title: markerData.title,
                alt: markerData.id
              });
              
              marker.bindPopup(
                '<div class="popup-title">' + markerData.title + '</div>' +
                '<div>' + markerData.category + '</div>'
              );
              
              marker.on('click', () => {
                window.ReactNativeWebView.postMessage(JSON.stringify({
                  type: 'markerClick',
                  id: markerData.id
                }));
              });
              
              markers[markerData.id] = {
                marker,
                data: markerData
              };
            });
            
            // Function to update markers based on category
            function updateMarkers(category) {
              // Remove all existing markers
              Object.values(markers).forEach(m => {
                if (map.hasLayer(m.marker)) {
                  map.removeLayer(m.marker);
                }
              });
              
              // Add markers that match the selected category
              Object.values(markers).forEach(m => {
                if (category === 'all' || m.data.category === category) {
                  m.marker.addTo(map);
                }
              });
            }
            
            // Initialize with all markers
            updateMarkers('all');
            
            // Listen for messages from React Native
            window.addEventListener('message', function(event) {
              const data = JSON.parse(event.data);
              if (data.type === 'updateMarkers') {
                activeCategory = data.category;
                updateMarkers(data.category);
              }
            });
          </script>
        </body>
      </html>
    `;
  };

  return (
    <Container>
      <View className="flex-1 flex-row">
        {/* Left Panel - Map */}
        <View className={`${isRightPanelVisible ? 'w-1/2' : 'w-full'} flex-1 flex-col`}>
          {/* Category Filter */}
          <View className="absolute bottom-0 left-0 right-0 z-10 py-2">
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 8 }}>
              {categories.map((category) => (
                <TouchableOpacity
                  key={category.id}
                  className={`mr-2.5 rounded-full border border-gray-200 bg-white px-4 py-2 ${
                    selectedCategory === category.id ? 'bg-vividSkyBlue' : ''
                  }`}
                  onPress={() => setSelectedCategory(category.id)}>
                  <Text
                    className={`font-poppins text-sm ${
                      selectedCategory === category.id ? 'text-white' : 'text-gray-700'
                    }`}>
                    {category.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* OpenStreetMap View */}
          <View className=" flex-1">
            <WebView
              ref={webViewRef}
              originWhitelist={['*']}
              source={{ html: generateMapHTML() }}
              style={{ flex: 1 }}
              onMessage={(event) => {
                try {
                  const data = JSON.parse(event.nativeEvent.data);
                  if (data.type === 'markerClick') {
                    handleMarkerPress(data.id);
                  }
                } catch (error) {
                  console.error('Error parsing message from WebView:', error);
                }
              }}
            />
          </View>
        </View>

        {/* Right Panel - Attraction Details */}
        {isRightPanelVisible && (
          <View className="w-full bg-indigo-900 p-4">
            <View className="mb-4 flex-row items-center justify-between">
              <Text className="font-poppins text-xl font-bold text-white">Places to go</Text>
              <TouchableOpacity onPress={() => setIsRightPanelVisible(false)} className="p-2">
                <Text className="text-white">✕</Text>
              </TouchableOpacity>
            </View>

            {/* Category tabs */}
            <View className="mb-4 flex-row">
              <TouchableOpacity className="mr-2 rounded-full bg-yellow-500 px-4 py-2">
                <Text className="text-sm text-white">Places to go</Text>
              </TouchableOpacity>
              <TouchableOpacity className="mr-2 rounded-full bg-white/20 px-4 py-2">
                <Text className="text-sm text-white">Places to stay</Text>
              </TouchableOpacity>
              <TouchableOpacity className="rounded-full bg-white/20 px-4 py-2">
                <Text className="text-sm text-white">Places to buy</Text>
              </TouchableOpacity>
            </View>

            <ScrollView className="flex-1">
              {selectedAttraction ? (
                <View className="mb-4 rounded-xl bg-white p-4">
                  <Text className="mb-2 font-poppins text-2xl font-bold">
                    {selectedAttraction.title}
                  </Text>
                  <Text className="mb-4 text-gray-600">{selectedAttraction.description}</Text>
                  <View className="flex-row gap-2">
                    {selectedAttraction.imageSource && (
                      <Image
                        source={selectedAttraction.imageSource}
                        className="h-20 w-32 rounded-lg"
                        resizeMode="cover"
                      />
                    )}
                    {selectedAttraction.imageSource && (
                      <Image
                        source={selectedAttraction.imageSource}
                        className="h-20 w-32 rounded-lg"
                        resizeMode="cover"
                      />
                    )}
                  </View>
                </View>
              ) : (
                /* If no attraction is selected, show categorized list */
                Object.entries(groupedAttractions).map(([category, attractions]) => (
                  <View key={category} className="mb-6">
                    <Text className="mb-4 font-poppins text-xl font-bold text-white">
                      {groupHeadings[category] || category}
                    </Text>
                    {attractions.slice(0, 2).map((attraction) => (
                      <View key={attraction.id} className="mb-4 rounded-xl bg-white p-4">
                        <Text className="mb-2 font-poppins text-xl font-bold">
                          {attraction.title}
                        </Text>
                        <Text className="mb-4 text-gray-600">{attraction.description}</Text>
                        <View className="flex-row gap-2">
                          {attraction.imageSource && (
                            <Image
                              source={attraction.imageSource}
                              className="h-20 w-32 rounded-lg"
                              resizeMode="cover"
                            />
                          )}
                          {attraction.imageSource && (
                            <Image
                              source={attraction.imageSource}
                              className="h-20 w-32 rounded-lg"
                              resizeMode="cover"
                            />
                          )}
                        </View>
                      </View>
                    ))}
                  </View>
                ))
              )}
            </ScrollView>
          </View>
        )}
      </View>
    </Container>
  );
}
