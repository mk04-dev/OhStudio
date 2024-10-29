import React from 'react';
import AppStore from './appStore';

class RootStore {
    appStore: AppStore;
    constructor() {
        this.appStore = new AppStore();
    }
}

const StoresContext = React.createContext(new RootStore());

// đây là function có sẵn để app kết nối tới các stores
export const useStores = () => React.useContext(StoresContext);
export const stores = new RootStore();