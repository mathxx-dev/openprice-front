import React from 'react';

import PriceHistoryChart from './components/graph';
import FeedAPI from '../api/feed';

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            valores : [5085, 5085, 5443, 5443, 1008, 5384, 5384, 5384, 5384, 5993],
            labels : ["1/07", "2/07", "3/07", "4/07", "5/07", "6/07", "7/07", "8/07", "9/07", "10/07"]
        }
    }

    componentDidMount () 
    {

        
    }

    render() {
        return(
            <div>
                <button onClick={() => this.state.feed_controller.call()}>teste</button>
                <div className="feed">
                    <aside className="feed__widgets">
                        <div className="widget1"></div>
                        <div className="widget1"></div>
                    </aside>
                    <main className="feed__products">
                        <PriceHistoryChart 
                            valores={this.state.valores} 
                            labels={this.state.labels}
                        />
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