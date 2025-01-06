export { UserRole } from './model/consts/consts';

export type {
    User,
    UserSchema,
} from './model/types/user';

export {
    userReducer,
    userActions,
} from './model/slice/userSlice';

export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelectors';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export {
    useJsonSettings,
} from './model/selectors/jsonSettings';
export type { JsonSettings } from './model/types/jsonSettings';
export { saveJsonSettings } from './model/services/saveJsonSettings';
export { initAuthData } from './model/services/initAuthData';
