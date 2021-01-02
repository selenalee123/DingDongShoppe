import { makeObservable, observable, computed, action } from "mobx"
import { observerBatching } from "mobx-react"

class UserStore {
    name ="" 
    friend = 0
    comment = 0
    likes = 0


    constructor() {
        makeObservable(this, {
            name:observable,
            friend: observable,
            comment: observable,
            likes: observable,
            addlike: action 
        })
    }




    addlike() {
        this.like++
        console.log("addlike",this.like)
    }

}

export default UserStore