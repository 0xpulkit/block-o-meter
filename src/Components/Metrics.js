import React from "react"
import { withRouter } from "../hoc/withRouter"
import Onchain from "./Onchain"
import Data from "./Data"
import axios from 'axios';
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import MyChart from "./MyChart";

class Metrics extends React.Component {
    state = {
        data: null,
        chartData: null
    }

    componentDidMount() {
        console.log(this.props)
        axios.get(`https://data.messari.io/api/v1/assets/${this.props.params.coinId}/metrics`)
            .then(res => {
                const data = res.data;
                this.setState({ ...this.state, data: data });
            })

        const url = `https://api.coingecko.com/api/v3/coins/${this.props.params.coinId}/market_chart?vs_currency=usd&days=100&interval=daily`
        axios.get(url).then(res => {
            const data = res.data;
            this.setState({ ...this.state, chartData: data })
        })

    }
    handleClick = () => {
        const doc = new jsPDF("p", "pt", "a4")
        doc.html(document.querySelector("#capture"), {

            callback: function (pdf) {
                const date = new Date();
                pdf.save(`${date}.pdf`)
            }
        })
    }



    render() {
        // if (!this.state.data.data && !this.state.data.chartData) return null;
        // console.log(this.state)
        return (this.state.data && this.state.chartData) ? (

            <div id="capture">
                <div className="row">
                    <div className="col-12 text-center mt-3">
                        <h3>{(this.props.params.coinId).toUpperCase()}</h3>
                    </div>

                </div>
                <div className="row mt-2 mx-2">
                    <div className="col-lg-3 col-sm-12">
                        <Data title="Price (In USD)" data={this.state.data.data.market_data.price_usd} />
                        <Data title="count_of_active_addresses" data={this.state.data.data.blockchain_stats_24_hours.count_of_active_addresses} />
                        <Data title="count_of_blocks_added (24 hrs)" data={this.state.data.data.blockchain_stats_24_hours.count_of_blocks_added} />
                        <Data title="median_tx_fee" data={this.state.data.data.blockchain_stats_24_hours.median_tx_fee} />
                        <Data title="count_of_tx" data={this.state.data.data.blockchain_stats_24_hours.count_of_tx} />
                        <Data title="average_block_gas_limit" data={this.state.data.data.on_chain_data.average_block_gas_limit} />
                        <Data title="issuance_rate" data={this.state.data.data.on_chain_data.issuance_rate} />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <MyChart chartData={this.state.chartData.prices} label="Price/day (last 3 months)" colour="red" />
                        <br></br>
                        <MyChart chartData={this.state.chartData.total_volumes} label="24 hr Trading Volume (last 3 months)" colour="pink"/>
                    </div>
                    <div className="col-lg-3 col-sm-12">
                        <Data title="average_block_interval" data={this.state.data.data.on_chain_data.average_block_interval} />
                        <Data title="blocks_added_last_24_hours" data={this.state.data.data.on_chain_data.blocks_added_last_24_hours} />
                        <Data title="total_fees_last_24_hours_usd" data={this.state.data.data.on_chain_data.total_fees_last_24_hours_usd} />
                        <Data title="hash_rate" data={this.state.data.data.on_chain_data.hash_rate} />
                        <Data title="txn_count_last_24_hours" data={this.state.data.data.on_chain_data.txn_count_last_24_hours} />

                        <Data title="average_fee_usd" data={this.state.data.data.on_chain_data.average_fee_usd} />
                        <Data title="average_txn_gas_used" data={this.state.data.data.on_chain_data.average_txn_gas_used} />

                    </div>
                </div>
            </div>

        ) : (
            <div>
                <div class="text-center mt-5">
                    <span >Loading...</span>
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Metrics)