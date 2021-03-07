import React from 'react';
import TodoList from './views/TodoList';
import NameCard from './views/Biodata';

function App() {

    return (
        <div className="App">
            <main className="container">



                <div className="divider"></div>

                {/* /views/Biodata.js */}
                <NameCard/>

                <div className="divider"></div>

                {/* /views/TodoList.js */}
                <TodoList/>
            </main>
        </div>
    );
}

export default App;
