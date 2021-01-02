// import React, { Component, Fragment } from 'react';
// import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, Image, } from 'react-native';
// import { LoginButton, AccessToken,LoginManager } from 'react-native-fbsdk';
// import { firebase } from '@react-native-firebase/auth'
// import { ShareDialog } from 'react-native-fbsdk';
// import auth from '@react-native-firebase/auth';
// import { Actions } from 'react-native-router-flux';




// //Attempt a login using the Facebook login dialog asking for default permissions.
// LoginManager.logInWithPermissions(["public_profile"]).then(
//   function(result) {
//     if (result.isCancelled) {
//       console.log("Login cancelled");
//     } else {
//       console.log(
//         "Login success with permissions: " +
//           result.grantedPermissions.toString()
//       );
//     }
//   },
//   function(error) {
//     console.log("Login fail with error: " + error);
//   }
// );



// // facebookLogin = async () => {
// //     // try {
// //         const result = await LoginManager.logInWithPermissions(['public_profile', 'email'])
// //         .then(alert("what"));

// //   if (result.isCancelled) {
// //     throw 'User cancelled the login process';
// //   }

// //   // Once signed in, get the users AccesToken
// //   const data = await AccessToken.getCurrentAccessToken();

// //   if (!data) {
// //     throw 'Something went wrong obtaining access token';
// //   }

// //   // Create a Firebase credential with the AccessToken
// //   const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

// //   // Sign-in the user with the credential
// //   return auth().signInWithCredential(facebookCredential).catch(error => {
// //     console.log(error);
// // });
// // };

// const FBSDK = require('react-native-fbsdk');

// // ...



//     //     const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email'])
//     //     ;

//     //     if (result.isCancelled) {
//     //       // handle this however suites the flow of your app
//     //       throw new Error('User cancelled request');
//     //     }

//     //     console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);

//     //     // get the access token
//     //     const data = await AccessToken.getCurrentAccessToken();

//     //     if (!data) {
//     //       // handle this however suites the flow of your app
//     //       throw new Error('Something went wrong obtaining the users access token');
//     //     }

//     //     // create a new firebase credential with the token
//     //     const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);

//     //     // login with credential
//     //     const firebaseUserCredential = await firebase.auth().signInWithCredential(credential);

//     //     console.warn(JSON.stringify(firebaseUserCredential.user.toJSON()))
//     //   } catch (e) {
//     //     console.error(e);
//     //   }
//     // }


// export default class Facebooklogin extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             pushData: [],
//             loggedIn: false
//         }
//       }

//       componentDidMount() {

//     }


//   render() {
//     return (
//         <Fragment>
//                 <StatusBar barStyle="dark-content" />
//                 <SafeAreaView>
//                     <ScrollView
//                         contentInsetAdjustmentBehavior="automatic"
//                         style={styles.scrollView}>
//                         {global.HermesInternal == null ? null : (
//                             <View style={styles.engine}>
//                                 <Text style={styles.footer}>Engine: Hermes</Text>
//                             </View>
//                         )}
//                         <View style={styles.body}>
//                             <View style={styles.sectionContainer}>
//                                 <LoginButton
//                                     onLoginFinished={
//                                         (error, result) => {
//                                             if (error) {
//                                                 console.log("login has error: " + result.error);
//                                             } else if (result.isCancelled) {
//                                                 console.log("login is cancelled.");
//                                             } else {

//                                                 console.log(result);
//                                                 AccessToken.getCurrentAccessToken()
//                                                 .then((data) => {
//                                                         this.setState({
//                                                             loggedIn: true,
//                                                             userID: data.userID
//                                                         })
//                                                         console.log(data, data.accessToken.toString())
//                                                     }
//                                                 )
//                                             }
//                                         }
//                                     }
//                                     onLogoutFinished={() =>
//                                         this.setState({
//                                             loggedIn: false,
//                                             userID: ''
//                                         })
//                                     } />
//                             </View>
//                             <View style={styles.buttonContainer}>
//                                 {!this.state.loggedIn && <Text>You are currently logged out</Text>}
//                             </View>
//                             {this.state.loggedIn && <View>
//                                 <View style={styles.listHeader}>
//                                     <Text>User Info</Text>
//                                 </View>
//                                 <View style={styles.detailContainer}>
//                                     <Text style={styles.title}>ID</Text>
//                                     <Text style={styles.message}>{this.state.userID}</Text>
//                                 </View>
//                             </View>}
//                         </View>
//                     </ScrollView>
//                 </SafeAreaView>
//             </Fragment>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     scrollView: {
//         backgroundColor: 'white',
//     },
//     listHeader: {
//         backgroundColor: '#eee',
//         color: "#222",
//         height: 44,
//         padding: 12
//     },
//     detailContainer: {
//         paddingHorizontal: 20
//     },
//     title: {
//         fontSize: 18,
//         fontWeight: 'bold',
//         paddingTop: 10
//     },
//     message: {
//         fontSize: 14,
//         paddingBottom: 15,
//         borderBottomColor: "#ccc",
//         borderBottomWidth: 1
//     },
//     dp: {
//         marginTop: 32,
//         paddingHorizontal: 24,
//         flexDirection: 'row',
//         justifyContent: 'center'
//     },
//     engine: {
//         position: 'absolute',
//         right: 0,
//     },
//     body: {
//         backgroundColor: 'white',
//     },
//     sectionContainer: {
//         marginTop: 32,
//         paddingHorizontal: 24,
//         flexDirection: 'row',
//         justifyContent: 'center'
//     },
//     buttonContainer: {
//         marginTop: 32,
//         paddingHorizontal: 24,
//         flexDirection: 'row',
//         justifyContent: 'center'
//     },
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: '600',
//         color: 'black',
//     },
//     sectionDescription: {
//         marginTop: 8,
//         fontSize: 18,
//         fontWeight: '400',
//         color: 'black',
//     },
//     highlight: {
//         fontWeight: '700',
//     },
//     footer: {
//         color: 'black',
//         fontSize: 12,
//         fontWeight: '600',
//         padding: 4,
//         paddingRight: 12,
//         textAlign: 'right',
//     },

// });