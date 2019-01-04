import React, { Component } from "react";
import "./Search.css";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";


class Search extends Component {
    state = {
        
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
                                    name="topic"
                                />
                                <Input
                                    label="Start Year"
                                    name="startYear"
                                />
                                <Input
                                    label="End Year"
                                    name="endYear"
                                />
                                <button type="submit" class="btn btn-primary">Search</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Search;