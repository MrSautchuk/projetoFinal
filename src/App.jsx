//importando bibliotecas, componentes, api e estilo
import React, { useState, useEffect } from 'react';
import { fetchData } from './API/api.js';
import Card from './COMPONENTS/card.jsx';
import Header from './COMPONENTS/Header.jsx';
import Footer from './COMPONENTS/Footer.jsx';
import './STYLES/global.css';

//função principal que armazena a junção de tudo dentro da constante App
const App = function() {
    //definindo estados para ermazenar dados, carregamento e erros
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect para buscar dados da API ao carregar o componente
    useEffect(function() {
        // Função assíncrona para buscar dados da API
        const fetchDataFromApi = async function() {
            try {
                // Chama a função fetchData e armazena o resultado em result
                const result = await fetchData('movies');
                //atualiza o estado data com os dados recebidos
                setData(result.data || []);
            } catch (error) {
                //atualiza o estado error se ocorrer um erro
                setError(error);
            } finally {
                //define loading como false após a tentativa de buscar os dados, seja sucesso ou falha
                setLoading(false);
            }
        };

        //chama a função
        fetchDataFromApi();
    }, []);//array de dependências vazio pra useEffect ser chamado só uma vez

    //função para lidar com a busca de filmes
    const handleSearch = function(searchTerm)  {
        //encontra o índice do filme caso bata com o termo de busca
        const movieIndex = data.findIndex( function(item) {
                return item.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
        }
        );

        // Se o filme for encontrado, rola a página até o card dele
        if (movieIndex !== -1) {
            document.getElementById(`card-${movieIndex}`).scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Renderiza a mensagem de carregamento enquanto os dados estão sendo buscados
    if (loading) {
        return <p>Carregando...</p>;
    }

    // Renderiza uma mensagem de erro se houver falha ao carregar os dados
    if (error) {
        return <p>Erro ao carregar os dados: {error.message}</p>;
    }

    // Retorna uma div contendo o conteudo principal da aplicação
    return (
        <div>
            <Header onSearch={handleSearch} /> {/* Passa a função handleSearch como prop para o Header */}
            <main>
                <div className="container-card">
                    {data.length > 0 ? (
                        // Mapeia os dados recebidos e renderiza um componente Card para cada item 
                        data.map( function(item, index) {
                            return (
                            <div key={item.id} id={`card-${index}`} className='cardCompletar'>
                                <Card data={item} />
                            </div>
                            );
                        })
                    ) : (
                        // Renderiza uma mensagem se não houver dados disponíveis
                        <p>Nenhum dado disponível.</p>
                    )}
                </div>
            </main>
            <Footer /> {/* Renderiza o componente Footer */}
        </div>
    );
};

// Exporta o componente App
export default App;
