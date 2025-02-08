import { createAsyncThunk } from '@reduxjs/toolkit';
import { FeatureFlags } from '@/shared/types/featureFlags';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { updateFeatureFlagsMutation } from '../api/featureFlagsApi';
import { getAllFeatureFlag } from '../lib/setGetFeatures';

interface UpdateFeatureFlagsOptions {
    userId: string;
    newFeatures: Partial<FeatureFlags>;
}

export const updateFeatureFlags = createAsyncThunk<
    void,
    UpdateFeatureFlagsOptions,
    ThunkConfig<string>
>(
    'user/saveJsonSettings',
    async ({ userId, newFeatures }, thunkApi) => {
        const { dispatch, rejectWithValue } = thunkApi;

        try {
            await dispatch(updateFeatureFlagsMutation({
                userId,
                features: {
                    ...getAllFeatureFlag(),
                    ...newFeatures,
                },
            }));
            window.location.reload();

            return undefined;
        } catch (e) {
            console.log(e);
            return rejectWithValue('');
        }
    },
);
