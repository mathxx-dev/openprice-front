import React, {useEffect, useState} from 'react';
// , useContext, useCallback, useReducer,

import FeedItem from './components/feed-item';
import PriceGraph from './components/graph';




export default function Homepage () {
    const [items, setItems] = useState([]);
    const [graphHistory, setGraphHistory] = useState({
        ready : false,
        title: "",
        origin : "",
        graph : {
            values : [],
            labels : []
        }
    });

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(process.env.REACT_APP_FEED_ENDPONT, { 
                method: 'get', 
                headers: new Headers({
                  'Authorization': `Token ${process.env.REACT_APP_API_KEY}`, 
                }), 
            });

            const data = await response.json();


            setItems(data.content);
        }
        fetchData();
    }, []);

    function ShowHistory (item_name, item_origin, history) {
        
        let values_boleto = [...history].map(c => c.preco_boleto);
        let values_card = [...history].map(c => c.preco_card);

        let labels = [...history].map(c => c.date);


        setGraphHistory({
            ready: true,
            title: item_name,
            origin : item_origin,
            series_boleto : values_boleto.reverse(),
            series_cartao : values_card.reverse(),
            series_labels : labels.reverse()
        });
    }


    return(
        <div>
            <div className="feed">
                <aside className="feed__widgets">
                    <div className="widget1"></div>
                    <div className="widget1"></div>
                </aside>
                <main className="feed__products">
                    {
                        graphHistory.ready && (
                            <PriceGraph 
                                title={graphHistory.title} 
                                origin={graphHistory.origin} 
                                seriesBoleto={graphHistory.series_boleto}
                                seriesCartao={graphHistory.series_cartao}
                                seriesLabel={graphHistory.series_labels}
                            />
                        )
                    }
                    
                    <div className="product-list">
                        {
                            items.map(item => (
                                <div key={item.id} className="product-option" onClick={() => ShowHistory(item.name,item.seller.name,item.history)}>
                                    <FeedItem
                                        image={item.img}
                                        title={item.name}
                                        origin={item.seller.name}
                                        price_card={item.history[0].preco_card}
                                        price_discount={item.history[0].preco_boleto}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </main>
            </div>
        </div>
    );
}