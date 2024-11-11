'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { TabsProvider } from './TabsContext';
export const Tabs = ({ children, defaultActive, className, ...rest }) => {
    const [activeTab, setActiveTab] = useState(defaultActive);
    return (_jsx(TabsProvider, { value: { activeTab, setActiveTab }, children: _jsx("div", { className: className, ...rest, children: children }) }));
};
