import React from 'react';
import { connect } from 'react-redux';

import * as studentResActions from '../actions/students';

class Logout extends React.Component {
    componentDidMount() {
        const { getQueriedResults } = this.props;
        getQueriedResults();
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
    }

    renderQueries = () => {
        const { studentResInfo } = this.props;
        const { queries } = studentResInfo;
        const queryResults = (
            <div className="queries-wrapper">
                <table className="table table-striped">
                    <tbody>
                        {
                            queries.map(item => {
                                return (
                                    <tr>
                                        <div key={item._id}>{item.subject} {item.operation === 'gt' ? 'greater than' : 'less than'} {item.marks}</div>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
        return queryResults;        
    }

    render() {
        const { studentResInfo } = this.props;
        const { queries } = studentResInfo;
        return (
            <div className="logout-wrapper">
                <p>You logged out successfully.</p>
                { (queries && queries.length > 0) ? (
                    <>
                        <p className="query-results">Your queried results..</p>
                        {this.renderQueries()}
                    </>
                ) : <p className="no-results">No Search Queries Found</p> }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    studentResInfo: state.students
});

const mapDispatchToProps = (dispatch) => ({
    getQueriedResults: () => dispatch(studentResActions.getQueriedResults())
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
