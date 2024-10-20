import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getScroll = (state: StateSchema) => state.scrollSave;

export const getScrollByUrl = createSelector(
    getScroll,
    (state: StateSchema, url: string) => url,
    (scroll, url) => scroll[url] || 0,
);
