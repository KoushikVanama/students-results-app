import React from 'react';
import { connect } from 'react-redux';

class SearchResults extends React.Component{

    renderResults = () => {
        const { studentResInfo } = this.props;
        const { results } = studentResInfo;
        const searchResults = results.length > 0 && results.map((item) => {
            return (
                <div className="results-wrapper" key={item._id}>
                    <span>{item.name}</span> scored <span>{item.marks}</span> in {item.subject}
                    <br />
                </div>
            );
        });
        return searchResults;
    }

    render() {
        const { studentResInfo } = this.props;
        const { results } = studentResInfo;
        return (
            <div className="results-details full-width">
                <div className="results-details-header">
                    <p>Show Results</p>
                </div>
                <div className="results-details-content">
                    { (results && results.length > 0) ? this.renderResults() : <p className="no-results">No Results</p> }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    studentResInfo: state.students
});

export default connect(mapStateToProps)(SearchResults);
