import React from "react"
import { withRouter } from "../hoc/withRouter"
import axios from "axios"
import Data from "./Data"
import { Bar } from "react-chartjs-2"
import Mybar from "./Mybar"


class Developer extends React.Component {
    state ={
        data : null
    }

    componentDidMount() {

        const url = `https://api.coingecko.com/api/v3/coins/${this.props.params.coinId}`
        axios.get(url).then(res => {
            const data = res.data;
            this.setState({ data: data })
        })

    }






    render(){
        return (this.state.data) ? (

            <div id="capture">
                <div className="row">
                    <div className="col-12 text-center mt-3">
                        <h3>{(this.props.params.coinId).toUpperCase()}</h3>
                    </div>

                </div>
                <div className="row mx-2">
                    <div className="col-lg-3 col-sm-12 text-center">
                        <h4>Developer's Activity(Github)</h4>
                        <Data title="forks" data={this.state.data.developer_data.forks} />
                        <Data title="stars" data={this.state.data.developer_data.stars} />
                        <Data title="subscribers" data={this.state.data.developer_data.subscribers} />
                        <Data title="total_issues" data={this.state.data.developer_data.total_issues} />
                        <Data title="closed_issues" data={this.state.data.developer_data.closed_issues} />
                        <Data title="pull_requests_merged" data={this.state.data.developer_data.pull_requests_merged} />
                        <Data title="pull_request_contributors" data={this.state.data.developer_data.pull_request_contributors} />
                    </div>
                    <div className="col-lg-6 col-sm-12 align-items-center" style={{
                        marginTop: "165px"
                    }} > 
                        <Mybar barData={this.state.data.developer_data.last_4_weeks_commit_activity_series} label="Commit Activity of last 4 weeks(-28 to -1)" colour="red" />
                        <br></br>
                        {/* <MyChart barData={this.state.chartData.total_volumes} label="Trading Volume (24 hr)" colour="pink"/> */}
                    </div>
                    <div className="col-lg-3 col-sm-12 text-center">
                    <h4>User's Activity</h4>
                        <Data title="facebook_likes" data={this.state.data.community_data.facebook_likes} />
                        <Data title="twitter_followers" data={this.state.data.community_data.twitter_followers} />
                        <Data title="reddit_average_posts_48h" data={this.state.data.community_data.reddit_average_posts_48h} />
                        <Data title="reddit_average_comments_48h" data={this.state.data.community_data.reddit_average_comments_48h} />
                        <Data title="reddit_subscribers" data={this.state.data.community_data.reddit_subscribers} />

                        <Data title="reddit_accounts_active_48h" data={this.state.data.community_data.reddit_accounts_active_48h} />
                        <Data title="telegram_channel_user_count" data={this.state.data.community_data.telegram_channel_user_count} />

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

export default withRouter(Developer)