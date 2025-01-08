import { ReactElement } from 'react';
import { FeatureFlags } from '../../types/featureFlags';
import { getFeatureFlag } from './setGetFeatures';

interface ToggleFeaturesComponentProps {
    feature: keyof FeatureFlags;
    on: ReactElement;
    off: ReactElement;
}

export const ToggleFeaturesComponent = (props: ToggleFeaturesComponentProps) => {
    const {
        feature,
        on,
        off,
    } = props;

    if (getFeatureFlag(feature)) {
        return on;
    }

    return off;
};
