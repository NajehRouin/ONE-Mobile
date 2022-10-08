import { StyleSheet, Text, View,Dimensions, Alert } from 'react-native'
import React ,{useState}from 'react';
import MapView,{Marker} from 'react-native-maps';
import { Url } from '../api';
export default function MapOne() {
  const [point, setPoint] = useState();
const [lengthdata,setlengthData]=useState();
const [NameRegin,setNameRegion]=useState('')

  const pressMarker = (i) => {
    console.log(i.name);
    getNameville();
    setPoint(i.name);
  
  };


  const getNameville=async()=>{
     
    try {
      const response = await fetch(Url+"api/getByVille/"+point);
      const json = await response.json();
      console.log("length",json.membersOne);
        if (json.membersOne>0){
         // Alert.alert("nombre enregistre est ",String(json.membersOne));
         
          setlengthData(json.membersOne)
        }
        else{
          setlengthData(0)
        }
  
     

  }catch(e){
    console.log(e)
  }
}

  const ville=[
                {id:0,
                  latitude: 35.7772439,
                  longitude: 10.8017938,
                  latitudeDelta: 0.1990,
                  longitudeDelta: 0.550,
                  name:"monastir"
                },
                {id:1,
                  latitude:35.8284534,
                  longitude: 10.6880951,
                  latitudeDelta:2,
                  longitudeDelta: 0.9999,
                  name:"sousse"
                },
                {id:2,
                  latitude: 36.7949998,
                  longitude:10.0730655,
                  latitudeDelta:2,
                  longitudeDelta: 0.9999,
                  name:"tunis"
                },
                {id:3,
                  latitude:  34.7755566,
                  longitude:10.7829999,
                  latitudeDelta:2,
                  longitudeDelta: 0.9999,
                  name:"sfax"
                },
                {id:4,
                  latitude:33.899999999,
                  longitude:9.99999999,
                  latitudeDelta:2,
                  longitudeDelta: 0.999999,
                  name:"gabes"
                },
                {id:5,
                  latitude:34.44,
                  longitude:8.999999,
                  latitudeDelta:2,
                  longitudeDelta: 0.9999,
                  name:"gafsa"
                },
                {id:6,
                  latitude:37.2811363,
                  longitude:9.826398,
                  latitudeDelta:3,
                  longitudeDelta: 0.9999,
                  name:"bizerte"
                }
                
               
             

  ]


  const [mapRegion, setmapRegion] = useState({
                  latitude:35.8284534,
                  longitude: 10.6880951,
                  latitudeDelta:6,
                  longitudeDelta: 0.9999,
                  name:"sousse"
  });
 

  return (
    <View style={styles.container}>
    <MapView 
    
    region={mapRegion}
  

    style={styles.map} >
          {ville.map((i, index) => (
          <Marker
            key={index}
            onPress = {() => pressMarker(i)}
            coordinate={{
              latitude: i.latitude,
              longitude: i.longitude,
            }}
            title={i.name +' ('+lengthdata+')'}
            
          />
       
          
        ))
        
        }
          </MapView>

  </View>
  )
}

const styles = StyleSheet.create({
    container: {
  
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: 350,
      height: 370,
    },
  });