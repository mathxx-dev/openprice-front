import React from 'react';

import PriceHistoryChart from './components/graph';


class Homepage extends React.Component {
    render() {
        return(
            <div>
                <div className="feed">
                    <aside className="feed__widgets">
                        <div className="widget1"></div>
                        <div className="widget1"></div>
                    </aside>
                    <main className="feed__products">
                        <PriceHistoryChart />
                        <div className="product-list">
                            <div className="widget"></div>
                            <div className="widget"></div>
                            <div className="widget"></div>
                            <div className="widget"></div>
                            <div className="widget"></div>
                            <div className="widget"></div>
                            <div className="widget"></div>
                            <div className="widget"></div>
                            <div className="widget"></div>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}
export default Homepage;