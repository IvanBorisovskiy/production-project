import { DeepPartial } from '@reduxjs/toolkit';
import { loginReducer, loginActions } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('counterSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '' };

        expect(
            loginReducer(state as LoginSchema, loginActions.setUsername('123')),
        ).toEqual({ username: '123' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '' };

        expect(
            loginReducer(state as LoginSchema, loginActions.setPassword('abc')),
        ).toEqual({ password: 'abc' });
    });
});
