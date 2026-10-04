import React from 'react';
import { Tabs } from './components/Tabs';

export const App = () => {
  const tabs = [
    {
      id: 'tab-1',
      title: 'Tab 1',
      content: 'Content 1',
    },
    {
      id: 'tab-2',
      title: 'Tab 2',
      content: 'Content 2',
    },
    {
      id: 'tab-3',
      title: 'Tab 3',
      content: 'Content 3',
    },
  ];

  const activeTabId = 'tab-1';

  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <>
      <h1>Selected tab is {activeTab.title}</h1>

      <Tabs tabs={tabs} activeTabId={activeTabId} />
    </>
  );
};
