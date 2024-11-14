import type { StateSchema, ThunkConfig } from './config/StateSchema';
import { AppDispatch, createReduxStore } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export {
    createReduxStore,
    StoreProvider,
};

export type {
    AppDispatch,
    StateSchema,
    ThunkConfig,
};
