import { 
    ImageBackground,
 } from "react-native"

export const PostsScreen = () => {
    return (
      
            <ImageBackground
        source={require("./image/photoApp.png")}
        style={{
            flex: 1,
            // width: 430, 
            // height: 932, 
            width: '100%',
            height: '100%',
            position: 'absolute', 
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0,
            padding: 0,
        }} 
        resizeMode="cover"
        
        />
       
    )
}