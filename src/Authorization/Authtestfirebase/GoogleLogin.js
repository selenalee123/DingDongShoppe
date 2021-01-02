import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';

import { Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth'
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';




GoogleSignin.configure({
  // webClientId:"116692850963-6qdlmm7n8mi1jdfjt9aa9s3lfqh49c6m.apps.googleusercontent.com",
  webClientId: '116692850963-6qdlmm7n8mi1jdfjt9aa9s3lfqh49c6m.apps.googleusercontent.com',
  // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  // hostedDomain: '', // specifies a hosted domain restriction
  // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  // accountName: '', // [Android] specifies an account name on the device that should be used
  // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
});





class GoogleLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setloggedIn:false,
      loggedIn:false
    };
  }




//   onGoogleButtonPress = async () => {
//     // Get the users ID token
//   const { idToken } = await GoogleSignin.signIn();

//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(googleCredential);
// }
signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    this.setState({ userInfo });
    console.log("you are signed in")
  } catch (error) {
    console.log({error});
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};


signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const {accessToken, idToken} = await GoogleSignin.signIn();
    this.setState({ setloggedIn:true })

    const credential = auth.GoogleAuthProvider.credential(
      idToken,
      accessToken,
    );
    await auth().signInWithCredential(credential).then(Actions.Home());
  } catch (error) {
    console.error(error);
  }
};

getCurrentUserInfo = async () => {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    this.setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      // user has not signed in yet
    } else {
      console.error(error);
  // some other error
    }
  }
};

isSignedIn = async () => {
  const isSignedIn = await GoogleSignin.isSignedIn();
  this.setState({ isLoginScreenPresented: !isSignedIn });
};

getCurrentUser = async () => {
  const currentUser = await GoogleSignin.getCurrentUser();
  this.setState({ currentUser });
};

signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    this.setState({ user: null });
    console.log("signout") // Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
};




  render() {
    return (
      <View>
        <Text> GoogleLogin </Text>
        <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={this.signIn}
    disabled={this.state.isSigninInProgress} />



<Button
   title="Google Sign Out"
    onPress={this.signOut}
     />
{/* <Button
      title="Google Sign-In"
      onPress={() => this.onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    /> */}
      </View>
    );
  }
}

export default GoogleLogin;



