import {getSelectedRootItems} from './selection';

const lockItems = function (onUpdateImage) {
    const items = getSelectedRootItems();
    for (const item of items) {
        item.locked = true;
    }
    onUpdateImage();
};

const unlockItems = function (onUpdateImage) {
    const items = getSelectedRootItems();
    for (const item of items) {
        item.locked = false;
    }
    onUpdateImage();
};

const shouldShowLock = function () {
    const items = getSelectedRootItems();
    if (items.length === 0) return false;
    return items.some(item => !item.locked);
};

const shouldShowUnlock = function () {
    const items = getSelectedRootItems();
    if (items.length === 0) return false;
    return items.some(item => item.locked);
};

export {
    lockItems,
    unlockItems,
    shouldShowLock,
    shouldShowUnlock
}