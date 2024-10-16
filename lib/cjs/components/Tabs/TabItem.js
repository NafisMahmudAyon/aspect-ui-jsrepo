'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { useTabs } from './TabsContext';
export const TabItem = ({ children, value }) => {
    const { activeTab, setActiveTab } = useTabs();
    return (_jsx("button", { className: `px-4 py-2 rounded ${activeTab === value
            ? 'bg-blue-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`, onClick: () => setActiveTab(value), children: children }));
};
