import React from 'react';
import PropertyList from './components/PropertyList';
import AIAssistant from './components/AIAssistant';
import AccountSearch from './components/AccountSearch';
import './index.css';

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-2/3 p-4">
        <h1 className="text-2xl font-bold mb-4">PropStream Lite</h1>
        <AccountSearch />
        <PropertyList />
      </div>
      <div className="w-full md:w-1/3 p-4 bg-gray-100">
        <AIAssistant />
      </div>
    </div>
  );
}

export default App;
