'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useTabs } from './TabsContext';
export const TabContent = ({ children, value }) => {
    const { activeTab } = useTabs();
    if (activeTab !== value)
        return null;
    return _jsx("div", { children: children });
};
