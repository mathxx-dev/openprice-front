import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

import PriceHistoryChart from './components/graph';


class Homepage extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <div className="feed">
                    <aside className="feed__widgets">
                        <div className="widget1" style={{background: 'yellow'}}></div>
                        <div className="widget1" style={{background: 'yellow'}}></div>
                    </aside>
                    <main className="feed__products">
                        <PriceHistoryChart />
                        <div className="product-list">
                            <div className="widget" style={{background: 'yellow'}}></div>
                            <div className="widget" style={{background: 'yellow'}}></div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}
export default Homepage;