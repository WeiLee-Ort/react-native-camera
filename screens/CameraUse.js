import React, {useEffect, useState, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity}  from 'react-native';
import { Camera } from 'expo-camera';
import {Feather as Icon} from "@expo/vector-icons";

const CameraUse = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
  
    const cam = useRef.current;
    const takePicture = async() =>{
      console.log("Holaaaaaaaaaaaaa")
      if(cam.current){
        const options = {quality: 0.5, base64: true, skipProcessing: false}
        const picture = await cam.current.takePictureAsync(options)
        console.log(cam.current.getSupportedRatiosAsync())
        if(picture.source){
          console.log("picture source", source)
        }

      }
  
    }

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    if (hasPermission === null) {
      return <View />;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }


    const goToGallery = () => {
      
      
    }

    return (
      <View style={styles.container}>
        <Camera ref={cam} style={styles.camera} type={type}>
          <View style={styles.buttonContainer}>
            <View style={{ flexDireccion: "row", justifyContent : "center", alignItem: "flex-end"}}>
            <View>
                <TouchableOpacity
                  // style={styles.button}
                  onPress={takePicture}>
                  <Icon name ="aperture" size={50} color="white"/>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                  // style={styles.button}
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                      );
                    }}>
                  <Icon name ="refresh-ccw" size={50} color="white"/>
                  {/* <Text style={styles.text}> Turn </Text> */}
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                  // style={styles.button}
                  onPress={goToGallery}>
                  <Icon name ="folder" size={50} color="white"/>
                </TouchableOpacity>
            </View>

          </View>
           
          </View>
        </Camera>
      </View>




 






    );
}

const styles = StyleSheet.create({
  container: {flex:1},
  camera: {flex:1},
  buttonContainer: {flex:1, backgroundColor: 'transparent', flexDirection: 'row'},
  button: { flex: 0.1, alignSelf: 'flex-end', alignItems: 'center'},
  text: { fontSize:18, marginBottom:10, color: 'white'}

 }); 

export default CameraUse