import React, { useState, useEffect } from 'react';
import { fetchData } from './API/api.js';
import Card from './COMPONENTS/card.jsx';
import Header from './COMPONENTS/Header.jsx';
import Footer from './COMPONENTS/Footer.jsx';
import './STYLES/global.css';

const App = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDataFromApi = async function() {
            try {
                const result = await fetchData('movies');
                setData(result.data || []);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchDataFromApi();
    }, []);

    const handleSearch = function(searchTerm) {
        const movieIndex = data.findIndex( function(item) { 
            item.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
            }
        );

        if (movieIndex !== -1) {
            document.getElementById(`card-${movieIndex}`).scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>Erro ao carregar os dados: {error.message}</p>;
    }

    return (
        <div>
            <Header onSearch={handleSearch} />
            <main>
                <div className="container">
                    {data.length > 0 ? (
                        data.map((item, index) => (
                            <div key={item.id} id={`card-${index}`}>
                                <Card data={item} />
                            </div>
                        ))
                    ) : (
                        <p>Nenhum dado disponível.</p>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
