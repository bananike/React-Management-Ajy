import React from 'react';
import './App.css';

// components
import Customer from './components/Customer';

const App = () => {

    const customers = [
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': 'Totti',
            'title': 'lorem ipsum dolor sit amet',
            'date': '2020-10-07',
            'content': 'aaa bbb cc dd wow'
        }
        , {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': 'Bibob',
            'title': 'consol.log',
            'date': '2020-10-07',
            'content': 'sdfdjsfksj asdfopaefk wej alf'
        }
        , {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': 'Kerrigan',
            'title': 'go jim go',
            'date': '2020-10-07',
            'content': 'whos order your open mouse?'
        }
        , {
            'id': 4,
            'image': 'https://placeimg.com/64/64/4',
            'name': 'Eevee',
            'title': 'say eevee',
            'date': '2020-10-07',
            'content': 'eeeeeeevvveeee? eh'
        }
    ]

    return (
        <div className="App">
            {
                customers.map(c => {
                    return (
                        <Customer 
                            id={c.id}
                            key={c.id}
                            image={c.image}
                            name={c.name}
                            title={c.title}
                            date={c.date}
                            content={c.content}
                        />
                    )
                })
            }
            
        </div>
    );
}

export default App;
