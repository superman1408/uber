import { Text, View, StatusBar } from 'react-native';


export default function HomeScreen() {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-red-500'>Home Screen</Text>
      <StatusBar />
    </View>
  );
}
