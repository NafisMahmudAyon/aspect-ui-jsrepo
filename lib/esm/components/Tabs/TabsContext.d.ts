import React from 'react';
interface TabsContextType {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}
export declare const TabsProvider: React.FC<{
    children: React.ReactNode;
    value: TabsContextType;
}>;
export declare const useTabs: () => TabsContextType;
export {};
