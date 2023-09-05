import {makeAutoObservable} from "mobx";

export default class DeviceStore {
    constructor() {
        this._devices = []
        this._serviceInfos = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._totalCount = 0
       // this._limit = 3 лимит пагинации 
        makeAutoObservable(this)
    }

 
    setDevices(serviceInfos) {
        this._serviceInfos = serviceInfos
    }

    setDevices(devices) {
        this._devices = devices
    }

    setSelectedType(service) {
        this.setPage(1)
        this._selectedType = service
    }
    setSelectedBrand(brand) {
        this.setPage(1)
        this._selectedBrand = brand
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get devices() {
        return this._devices
    }

    get serviceInfos() {
        return this._serviceInfos
    }

    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
