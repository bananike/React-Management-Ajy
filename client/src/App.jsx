import React, { useState, useEffect } from 'react';
import './App.css';

// components
import ContentList from './components/ContentList';
import ContentDetail from './components/ContentDetail';

// library

function App(props) {

    const [contentlist, setContentlist] = useState([]);

    // useEffect(async () => {
    //     const response = await fetch('/api/contentList');
    //     const body = await response.json();
    //     setContentList(body)
    // },[setContentList]);

    useEffect(() => {
        async function fetchData(){
            const response = await fetch('/api/contentlist');
            const body = await response.json();
            setContentlist(body);
        }
        fetchData();
    }, [setContentlist]);

    return (
        <div className="App">
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contentlist.map(c => {
                            return (
                                <ContentList 
                                    id={c._id}
                                    key={c._id}
                                    image={c._image}
                                    name={c._name}
                                    title={c._title}
                                    date={c._date}
                                    content={c._content}
                                />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default App;
