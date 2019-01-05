import React, { Component } from "react";
import axios from "axios";
import "./Search.css";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Results from "../Results/Results";


class Search extends Component {
    state = {
        results: []
    }

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value })
    }

    createQueryUrl = () => {
        const baseUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=78e3af72563444cb91c22cdda58e3eef"

        const q = this.state.q

        const start = this.state.begin_date
        let begin_date;
        if (parseInt(start)) {
            begin_date = start + "0101"
        }

        const end = this.state.end_date
        let end_date;
        if(parseInt(end)) {
            end_date = end + "0101"
        }
        const queryUrl = baseUrl + "&q=" + q + "&begin_date=" + begin_date + "&end_date=" + end_date;
        console.log(queryUrl)
        return queryUrl;
    }

    renderArticles = () => {
        return this.state.results.map(result => (
            <Results
            key={result.web_url}
            title={result.headline.main}
            date={result.pub_date}
            url={result.web_url}
            handleSave={this.handleSave}
            viewSavedArticles={this.viewSavedArticles}
            />
        ))
    }

    handleSearch = event => {
        event.preventDefault();
        const url = this.createQueryUrl();
        console.log(url);

        axios.get(url)
            .then(res => this.setState({ results: res.data.response.docs }))
    }

    render() {
        return (
            <Container>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <Header>Search</Header>
                            <div className="card-body">
                            <form>
                                <Input
                                    label="Topic"
                                    name="q"
                                    onChange={this.handleInputChange}
                                />
                                <Input
                                    label="Start Year"
                                    name="begin_date"
                                    onChange={this.handleInputChange}
                                />
                                <Input
                                    label="End Year"
                                    name="end_date"
                                    onChange={this.handleInputChange}
                                />
                                <button type="submit" className="btn btn-primary" onClick={this.handleSearch}>Search</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <Header>Results</Header>
                        <div className="card-body">
                        <ul className="list-group list-group-flush">
                            {this.renderArticles()}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            </Container>
        )
    }
}

export default Search;