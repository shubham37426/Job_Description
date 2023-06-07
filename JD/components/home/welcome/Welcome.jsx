import React, { useState } from 'react'
import { View, Text, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'
import { icons, SIZES } from '../../../constants'
import styles from './welcome.style'
const jobTypes = ["Full-time", "Part-time", "Contractor",'internship',]
const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter()
  const [activejobType, setactivejobType] = useState('Full-time')
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Shubham</Text>
        <Text style={styles.welcomeMessage}>Find your dream jobs</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>


      <View style={styles.tabsContainer}>

        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activejobType, item)}
              onPress={() => {
                setactivejobType(item)
                router.push(`/search/${item}`)
              }} >
              <Text style={styles.tabText(activejobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{columnGap:SIZES.small}}
          horizontal />

      </View>
    </View>
  )
}

export default Welcome