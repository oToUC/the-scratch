import React, {Component} from 'react';
import {Link} from 'react-router';

import DocumentMeta from 'react-document-meta';

export default class Intro extends Component {
    render() {
        return (
            <div className="container" style={{paddingTop: '30px'}}>
                <DocumentMeta title="React Redux Example: Intro"/>

                <div className="jumbotron">
                    <div className="container">
                        <h1>The Scratch</h1>
                        <p>Modern SPA template.</p>
                        <p>
                            <Link to="/auth" className="btn btn-primary btn-lg" href="#" role="button">Login or Sign-up &raquo;</Link>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <h2>Factbook</h2>
                        <p>The World Factbook provides information on the history, people, government, economy, geography, communications, transportation, military, and transnational issues for 267 world entities. Our Reference tab includes: maps of the major world regions, as well as Flags of the World, a Physical Map of the World, a Political Map of the World, a World Oceans map, and a Standard Time Zones of the World map.</p>

                        <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                    </div>

                    <div className="col-md-4">
                        <h2>Commodity Markets</h2>
                        <p>A commodity market is a market that trades in primary rather than manufactured products. Soft commodities are agricultural products such as wheat, coffee, cocoa and sugar. Hard commodities are mined, such as gold, rubber and oil.</p>

                        <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                    </div>

                    <div className="col-md-4">
                        <h2>Forex</h2>
                        <p>The foreign exchange market (forex, FX, or currency market) is a global decentralized market for the trading of currencies. In terms of volume of trading, it is by far the largest market in the world. The foreign exchange market assists international trade and investments by enabling currency conversion.</p>

                        <p><a className="btn btn-default" href="#" role="button">View details &raquo;</a></p>
                    </div>
                </div>

            </div>
        );
    }
}
