import React from "react"
import { withRouter } from "../hoc/withRouter"
import Onchain from "./Onchain"
import Data from "./Data"
import axios from 'axios';
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

class Metrics extends React.Component {
  state = {
    data: {},
  }

  componentDidMount() {
    console.log(this.props)
    axios.get(`https://data.messari.io/api/v1/assets/${this.props.params.coinId}/metrics`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
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
    if (!this.state.data.data) return null;

    return (

      <div id="capture" className="container mb-3">
        <div className="row mt-2">
          <div className="d-flex justify-content-center col-6 "><h2>On-Chain Metrics</h2></div>
          <div className="d-flex justify-content-center col-6"><h2>Developer Stats</h2></div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <Data title="Price (In USD)" data={this.state.data.data.market_data.price_usd} />
            <Data title="count_of_active_addresses" data={this.state.data.data.blockchain_stats_24_hours.count_of_active_addresses} />
            <Data title="count_of_blocks_added (24 hrs)" data={this.state.data.data.blockchain_stats_24_hours.count_of_blocks_added} />
            <Data title="median_tx_fee" data={this.state.data.data.blockchain_stats_24_hours.median_tx_fee} />
            <Data title="count_of_tx" data={this.state.data.data.blockchain_stats_24_hours.count_of_tx} />
            <Data title="average_block_gas_limit" data={this.state.data.data.on_chain_data.average_block_gas_limit} />
            <Data title="average_block_interval" data={this.state.data.data.on_chain_data.average_block_interval} />
            <Data title="blocks_added_last_24_hours" data={this.state.data.data.on_chain_data.blocks_added_last_24_hours} />
            <Data title="total_fees_last_24_hours_usd" data={this.state.data.data.on_chain_data.total_fees_last_24_hours_usd} />
            <Data title="hash_rate" data={this.state.data.data.on_chain_data.hash_rate} />
            <Data title="txn_count_last_24_hours" data={this.state.data.data.on_chain_data.txn_count_last_24_hours} />

            <Data title="average_fee_usd" data={this.state.data.data.on_chain_data.average_fee_usd} />
            <Data title="average_txn_gas_used" data={this.state.data.data.on_chain_data.average_txn_gas_used} />
            <Data title="issuance_rate" data={this.state.data.data.on_chain_data.issuance_rate} />
          </div>
          <div className="col-6">
            <div className="mt5 pt5 text-center">
              <div id="accordion">
                <div className="card mt5 pt5">
                  <div className="card-header" id="headingOne">
                    <h5 className="mb-0">
                      <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <img src="https://img.icons8.com/ios/50/000000/star.png" />
                        <span> Stars on Github</span>
                      </button>
                    </h5>
                  </div>

                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                    <div className="card-body">
                      {this.state.data.data.developer_activity.stars}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingTwo">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <img src="https://img.icons8.com/ios/50/000000/view-file.png" />
                        <span>Watchers On Github</span>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                    <div className="card-body">
                      {this.state.data.data.developer_activity.watchers}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <img src="https://img.icons8.com/ios/50/000000/reddit--v1.png" />
                        <span ><span>&nbsp;Active Users on reddit</span></span>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                    <div className="card-body">
                      {this.state.data.data.reddit.active_user_count}
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingFour">
                    <h5 className="mb-0">
                      <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-user-medical-kiranshastry-lineal-kiranshastry.png" />
                        <span>  Subscribers on reddit</span>
                      </button>
                    </h5>
                  </div>
                  <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                    <div className="card-body">
                      {this.state.data.data.reddit.subscribers}
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={this.handleClick} type="button" className="my-5 py-2 btn btn-dark">Download Report for {this.state.data.data.name}</button>
            </div>



          </div>



        </div>
      </div>

    )
  }
}



// <Data title="Price (In USD)" data={this.state.data.data.market_data.price_usd} />
//                         <Data title="count_of_active_addresses" data={this.state.data.data.blockchain_stats_24_hours.count_of_active_addresses} />
//                         <Data title="count_of_blocks_added (24 hrs)" data={this.state.data.data.blockchain_stats_24_hours.count_of_blocks_added} />
//                         <Data title="median_tx_fee" data={this.state.data.data.blockchain_stats_24_hours.median_tx_fee} />
//                         <Data title="count_of_tx" data={this.state.data.data.blockchain_stats_24_hours.count_of_tx} />
//                         <Data title="average_block_gas_limit" data={this.state.data.data.on_chain_data.average_block_gas_limit} />
//                         <Data title="average_block_interval" data={this.state.data.data.on_chain_data.average_block_interval} />
//                         <Data title="blocks_added_last_24_hours" data={this.state.data.data.on_chain_data.blocks_added_last_24_hours} />
//                         <Data title="total_fees_last_24_hours_usd" data={this.state.data.data.on_chain_data.total_fees_last_24_hours_usd} />
//                         <Data title="hash_rate" data={this.state.data.data.on_chain_data.hash_rate} />
//                         <Data title="txn_count_last_24_hours" data={this.state.data.data.on_chain_data.txn_count_last_24_hours} />

//                         <Data title="average_fee_usd" data={this.state.data.data.on_chain_data.average_fee_usd} />
//                         <Data title="average_txn_gas_used" data={this.state.data.data.on_chain_data.average_txn_gas_used} />
//                         <Data title="issuance_rate" data={this.state.data.data.on_chain_data.issuance_rate} />



export default withRouter(Metrics)