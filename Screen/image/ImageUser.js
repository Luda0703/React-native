// import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { AntDesign } from '@expo/vector-icons';
// import { removeUserAvatar } from '../../Redax/auth/authOperations';
// import { useAuth } from '../../Screen/hooks/useAuth';

// export const ImageUser = ({ state, onPress, onDelete }) => {
//   const dispatch = useDispatch();

//   const { authState: { photoURL } } = useAuth();

//   const handleRemoveAvatar = () => {
//     dispatch(removeUserAvatar(null));
//   };

//   const imageSource = state.photoURL !== null ? { uri: state.photoURL } : null;

//   return (
//     <View style={styles.imagePhotoContainer}>
//       <Image style={styles.imagePhoto} source={imageSource} />
//       {!imageSource ? (
//         <TouchableOpacity style={styles.loadPhoto} onPress={onPress}>
//           <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
//         </TouchableOpacity>
//       ) : (
//         <TouchableOpacity
//           style={styles.loadPhoto}
//           onPress={
//             photoURL
//               ? handleRemoveAvatar
//               : () => onDelete((prev) => ({ ...prev, photoURL: null }))
//           }
//         >
//           <AntDesign name="closecircleo" size={25} color="#FF6C00" />
//         </TouchableOpacity>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   imagePhotoContainer: {
//     position: 'absolute',
//     top: -60,
//     left: '50%',
//     transform: [{ translateX: -55 }],
//   },
//   imagePhoto: {
//     width: 120,
//     height: 120,
//     borderRadius: 16,
//     backgroundColor: '#F6F6F6',
//   },

//   loadPhoto: {
//     position: 'absolute',
//     right: -12,
//     bottom: 14,
//   },
//   imagePhotoContainer: {
    
//   }
// });

import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"
 export const ImageUser = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <Circle cx={12.5} cy={12.5} r={12} fill="#fff" stroke="#FF6C00" />
    <Path
      fill="#FF6C00"
      fillRule="evenodd"
      d="M13 6h-1v6H6v1h6v6h1v-6h6v-1h-6V6Z"
      clipRule="evenodd"
    />
  </Svg>
)
