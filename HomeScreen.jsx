import * as React from 'react';
import {data, image,images} from './Carousel';
import axios from 'node_modules/axios';
import {
  Text,
  View,
  Dimensions,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import mehul from "./blackbg.jpg"
export const SLIDER_WIDTH = Dimensions.get('window').width + 1;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.99);




function HomeScreen({navigation}) {
  // const [images] = React.useState("");
  
  React.useEffect(() => {
    // fetch('https://gwapi.zee5.com/content/tvshow/?season_id=0-2-3337&type=episode&translation=en&country=IN&on_air=true&asset_subtype=tvshow&page=0&limit=10', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     firstParam: 'yourValue'
    //   })
    // });
    axios.get('https://gwapi.zee5.com/content/tvshow/?season_id=0-2-3337&type=episode&translation=en&country=IN&on_air=true&asset_subtype=tvshow&page=0&limit=10',).then((data)=>{
      console.log(JSON.stringify(data))
    });
  }, [])
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          borderWidth: 0.1,
          padding: 0.5,
          borderRadius: 20,
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Image source={{uri: item.url}} style={[styles.image]} />
      </View>
    );
  };
  const ref = React.useRef(null);
  return (
    <>
    <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={mehul} style={[styles.imgbackground]} >
        <View style={{marginTop:5}}>
          <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
          />
        </View>
        <View>
          <View style={[styles.scroll]}>
            <View style={{margin: 5, marginTop: 0}}>
                        <Text style={{marginBottom:7,fontWeight:"bold",color:"white",fontSize:25}}>HollyWood</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {image?.map(image1 => {
                  return (
                    <>
                    <View>
                      <TouchableOpacity
                        onPress={() => alert(image1.name)}
                        style={{paddingHorizontal: 2, paddingVertical: 2}}>
                        <View key={image1.name}>
                          <Image
                            source={{
                              uri: image1.url,
                            }}
                            style={{width: 105, height: 145, borderRadius: 5}}
                          />
                        </View>
                      </TouchableOpacity>
                          <Text style={[styles.imgname]}>{image1.name}</Text>
                      </View>
                    </>
                  );
                })}
              </ScrollView>
            </View>
            
          </View>
          <View style={[styles.scroll]}>
            <View style={{margin: 5, marginTop: 0}}>
            <Text style={{marginBottom:7,fontWeight:"bold",color:"white",fontSize:25}}>BollyWood</Text>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {images?.map(image2 => {
                  return (
                    <>
                      <TouchableOpacity
                        onPress={() => alert(image2.name)}
                        style={{paddingHorizontal: 2, paddingVertical: 2}}>
                        <View key={image2.name}>
                          <Image
                            source={{
                              uri: image2.url,
                            }}
                            style={{width: 105, height: 145, borderRadius: 5}}
                          />
                          <Text style={[styles.imgname]}>{image2.name}</Text>
                        </View>
                      </TouchableOpacity>
                    </>
                  );
                })}
              </ScrollView>
            </View>
          </View>
          
        </View>
        <View style={[styles.button]}>
          <Button
            onPress={() => navigation.navigate('Notifications')}
            title="Go to notifications"
          />
        </View>
        </ImageBackground>


        
      {/* </View> */}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 20,
    height: 250,
    width: '100%',
  },
  button: {
    // marginTop: 10,
    padding: 20,
  },
  scroll: {
    marginTop: 15,
  },
  imgname: {
    fontWeight: 'bold',
    // marginLeft:10
    // textAlign:"center",
    color:"white"
  },
  imgbackground:{
    height:"100%"
  }
});

export default HomeScreen;
