import {StyleSheet, Text, View, Button, Image} from 'react-native';
import React, {useState, useCallback} from 'react';
import DocumentPicker from 'react-native-document-picker';
var RNFS = require('react-native-fs');

const DocumentPickerExp = () => {
  const [fileResponse, setFileResponse] = useState([]);
  const [imageUri, setImageUri] = useState('');

  const handleDocumentSelection = async () => {
    try {
      const response = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      console.log('..........1', response);
      setFileResponse(response);
    } catch (error) {
      console.log('Error in selecting document..', error);
    }
  };

  const getOriginalUri = async url => {
    // if (url.startsWith('content://')) {
    //   const urlComponents = url.split('/');
    //   const fileNameAndExtension = urlComponents[urlComponents.length - 1];
    //   const destPath = `${RNFS.TemporaryDirectoryPath}/${fileNameAndExtension}`;
    //   RNFS.copyFile(url, destPath).then(() => {
    //     setImageUri('file://' + destPath);
    //     console.log('======', url, '\n=====', imageUri);
    //   });
    // }
    try {
      const {path} = await RNFS.stat(url);
      setImageUri('file://' + path);
      console.log('======', path, '\n=====', imageUri);
    } catch (error) {
      console.log('aaaaaa', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Select document" onPress={handleDocumentSelection} />
      {fileResponse.map((file, index) => (
        <View>
          <Text
            key={index.toString()}
            style={styles.text}
            numberOfLines={1}
            ellipsizeMode={'middle'}>
            {getOriginalUri(file?.uri)}
          </Text>
          <Image source={{uri: imageUri}} />
        </View>
      ))}
    </View>
  );
};

export default DocumentPickerExp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
});

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   TextInput,
// } from 'react-native';
// import React, {useState} from 'react';
// import DocumentPicker from 'react-native-document-picker';

// const DocumentPickerExp = () => {
//   const [list, setList] = useState([]);
//   console.log(list);
//   const selectDocuments = async () => {
//     try {
//       const doc = await DocumentPicker.pick({
//         type: [DocumentPicker.types.doc],
//       });
//       // console.log(doc)
//       setList(doc);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log('User calcelled the upload');
//       } else {
//         console.log(err);
//       }
//     }
//   };

//   return (
//     <View>
//       <TextInput defaultValue={list[0]?.name} style={style.input} />
//       <TextInput defaultValue={list[0]?.size.toString()} style={style.input} />
//       <TouchableOpacity onPress={() => selectDocuments()} style={style.button}>
//         <Text style={{color: '#fff'}}>Choose Documents</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const style = StyleSheet.create({
//   input: {
//     borderWidth: 2,
//     marginLeft: 20,
//     marginRight: 20,
//     marginTop: 20,
//     height: 50,
//     paddingLeft: 10,
//   },
//   button: {
//     borderWidth: 2,
//     marginLeft: 20,
//     marginTop: 20,
//     marginRight: 20,
//     height: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#000000',
//   },
// });
// export default DocumentPickerExp;
