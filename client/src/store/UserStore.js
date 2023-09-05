import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        this._isAuth = true
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = true
    }
    setUser(user) {
        this._user = true
    }

    get isAuth() {
        return this._isAuth
    }
    get user() {
        return this._user
    }
}
