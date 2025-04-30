import React from 'react';
import Header from './components/Header';
import ToolList from './components/ToolList';
import CommandExamples from './components/CommandExamples';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
    return (
        <div className="app-container">
            <Header />
            <main>
                <ToolList />
                <CommandExamples />
            </main>
            <Footer />
        </div>
    );
};

export default App;