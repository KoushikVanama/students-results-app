import React from 'react';
import { connect } from 'react-redux';

import * as studentResActions from '../actions/students';

class FilterDetails extends React.Component{

    getResults = () => {
        const { getResults, studentResInfo, postQuery } = this.props;
        const { chosenSubject, chosenOperation, chosenMarks } = studentResInfo;
        getResults(chosenSubject, chosenOperation, chosenMarks);
        postQuery(chosenSubject, chosenOperation, chosenMarks);
    }

    render() {
        const { studentResInfo } = this.props;
        const { chosenSubject, chosenOperation, chosenMarks } = studentResInfo;
        return (
            <div className="filters-details full-width">
                <div className="filters-details-header">
                    <p>Selected Filters</p>
                </div>
                <div className="filters-details-content">
                    <React.Fragment>
                        {
                            (!chosenSubject || !chosenOperation || !chosenMarks) ? (
                                <p className="no-results">None Selected</p>
                            ) : (
                                <p className="no-results">{`${chosenSubject.value} ${chosenOperation.label} ${chosenMarks}`}</p>
                            )
                        }
                        <button className="no-results continue" onClick={this.getResults} disabled={!chosenSubject || !chosenOperation || !chosenMarks}>Continue</button>
                    </React.Fragment>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    studentResInfo: state.students
});

const mapDispatchToProps = (dispatch) => ({
    getResults: (subject, operation, marks) => dispatch(studentResActions.getResults(subject, operation, marks)),
    postQuery: (subject, operation, marks) => dispatch(studentResActions.postQuery(subject, operation, marks))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterDetails);
