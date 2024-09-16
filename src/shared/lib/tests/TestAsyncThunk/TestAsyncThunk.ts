import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

type ActionCreatorType<Return, Arg, RejectedValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispath: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator;
        this.dispath = jest.fn();
        this.getState = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(this.dispath, this.getState, undefined);

        return result;
    }
}
