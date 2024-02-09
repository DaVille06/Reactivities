import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";

interface Store {
    activityStore: ActivityStore
}

export const store: Store = {
    activityStore: new ActivityStore()
}

// creares an instance of the 'store'
export const StoreContext = createContext(store);

// react hook - allows us to use store inside components
// added to main.tsx
export function useStore() {
    return useContext(StoreContext);
}