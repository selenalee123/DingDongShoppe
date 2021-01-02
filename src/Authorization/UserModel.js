
import firestore from '@react-native-firebase/firestore';
///import Commons from '../utils/Commons';
//import Constants from '../utils/Constants';
const usersCollection = firestore().collection('Users');
//const users1Collection = firestore().collection("data");

////import Logger from '../utils/Logger';
//import NotificationModel from './NotificationModel';

class UserModel {

  constructor(user) {
    if (user) {
      return {
        id: user.id,
        userId: user.userId,
        email: user.email,
        fullName: user.fullName,
        firstName: user.firstName,
        lastName: user.lastName,
        numOfLikes: user.numOfLikes || [],
        numOfRubys: user.numOfRubys || 0,
        numOfClass: user.numOfClass || [],
        numOfPosts: user.numOfPosts || [],
        photoUri: user.photoUri,
        loginProvider: user.loginProvider,
        rating: user.rating || 0,
        phoneNumber: user.phoneNumber,
        gender: user.gender,
        address: user.address,
        rawAddress: user.rawAddress,
        dob: user.address,
        jobTitle: user.jobTitle || 'Nghề tự do',
        isValid: user.isValid || false,
        isActive: user.isActive || true,
        description: user.description,
        type: user.type,
        skills: user.skills || [],
        registeredArticles: user.registeredArticles || [],
        notifications: user.notifications || [] // {type: 'rubyIn | rubyOut | info', title: '', description: '', createdAt: ''}
      }
        
    }
  }

  instance(user) {
    return new UserModel(user)
  }

  getUsers = async (ids) => {
        return await usersCollection.get()
  }

  //getMentors = async (lastDoc, limit = Constants.ROW_PER_PAGE) => {
  //  let instance = usersCollection.orderBy('createdAt', 'desc').where('isActive', '==', true).where('isValid', '==', true).where('type', '==', Constants.USER_TYPE_TEACHER).limit(limit)
   // if (lastDoc) instance = instance.startAfter(lastDoc)
   
  getUserById = async (id) => {
    return await await usersCollection.doc(id).get()
  }

  getUserByProviderId = async (username,password) => {
    return await usersCollection.where('username', '==', username).get().where('password', '==', password).get()
  }

  updateUser = async (id, user = {}) => {
    user.updatedAt = firestore.FieldValue.serverTimestamp()
    Logger.log('UserModal updateUser', id, user)
    return await usersCollection.doc(id).update(user)
  }

  // updateAvatar = async (id, base64) => {
  //   const image = firestore.Blob.fromBase64String(base64)
  //   const user = {photoUri: image}
  //   await this.updateUser(id, user)
  //   return image
  // }

  // updateRuby = async (id, ruby) => {
  //   const user = {}
  //   const increment = firestore.FieldValue.increment(ruby)
  //   user.numOfRubys = increment
  //   return await this.updateUser(id, user)
  // }

  // addNotification = async (id, type, {ruby, aId, aType, aTitle}) => {
  //   let notify = null
  //   const user = {}
  //   if (type === Constants.NOTIFY_TYPE_RUBY_GET_IN) notify = NotificationModel.newGetRubyNotify(ruby)
  //   if (type === Constants.NOTIFY_TYPE_RUBY_RECEIVE_IN) notify = NotificationModel.newReceiveRubyNotify(ruby)
  //   if (type === Constants.NOTIFY_TYPE_NEW_POST) notify = NotificationModel.newPostNotifys(aId, aType, aTitle, ruby)
  //   if (type === Constants.NOTIFY_TYPE_JOIN_POST) notify = NotificationModel.newJoinPostNotifys(aId, aType, aTitle, ruby)
  //   if (notify instanceof Array) {
  //     for (let i = 0; i < notify.length; i++) {
  //       console.log('kkkkk userModel addNotification[i]', notify[i])
  //       user.notifications = firestore.FieldValue.arrayUnion(notify[i])
  //       await this.updateUser(id, user)
  //     }
  //   } else {
  //     console.log('kkkkk userModel addNotification')
  //     user.notifications = firestore.FieldValue.arrayUnion(notify)
  //     await this.updateUser(id, user)
  //   }
  //   return notify
  // }

  // increasePost = async (id, articleId) => {
  //   const user = {
  //     numOfPosts: firestore.FieldValue.arrayUnion(articleId)
  //   }
  //   return await this.updateUser(id, user)
  // }

  // increaseLike = async (id) => {
  //   const user = {}
  //   const increment = firestore.FieldValue.increment(1)
  //   user.numOfLikes = increment
  //   return await this.updateUser(id, user)
  // }

  // increaseClass = async (id) => {
  //   const user = {}
  //   const increment = firestore.FieldValue.increment(1)
  //   user.numOfClass = increment
  //   return await this.updateUser(id, user)
  // }

  // joinArticle = async (id, articleId) => {
  //   const user = {
  //     registeredArticles: firestore.FieldValue.arrayUnion(articleId)
  //   }
  //   return await this.updateUser(id, user)
  // }

  
  signUp = async (user) => {
    //encrypter password before sign up
    return await usersCollection.add({...user, createdAt: firestore.FieldValue.serverTimestamp(), updatedAt: firestore.FieldValue.serverTimestamp()})
  }

    
  // signUp1 = async (user) => {
  //   //encrypter password before sign up
  //   return await users1Collection.add({...user, createdAt: firestore.FieldValue.serverTimestamp(), updatedAt: firestore.FieldValue.serverTimestamp()})
  // }
  

  //don't use on prod, just to test
  addTempUsers = async () => {
    for (let index = 0; index < 5; index++) {
      const data = {username :`user${index+1}`, password:1234}
      await await usersCollection.doc(id).set({...data, id, fullName: `User ${index+1}`, createdAt: firestore.FieldValue.serverTimestamp(), updatedAt: firestore.FieldValue.serverTimestamp()})
    }
  }

}

export default new UserModel()

