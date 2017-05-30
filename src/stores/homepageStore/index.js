import { observable, action } from 'mobx';

class HomepageStore {
    @observable username;
    @observable password;

    constructor() {
        this.username = '';
        this.password = '';
    }

    @action changeUsername = (value) => {
        this.username = value;
    }
    @action changePassword = (value) => {
        this.password = value;
    }
}

const homepageStore = new LoginHomepageStoreStore();

export default homepageStore;
export { HomepageStore };

