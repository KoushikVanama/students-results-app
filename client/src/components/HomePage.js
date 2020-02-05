import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import FiltersSelection from '../components/FiltersSelection';
import FilterDetails from '../components/FilterDetails';
import SearchResults from './SearchResults';

class HomePage extends React.Component {
    render() {
        const { userInfo } = this.props;
        return (
            <div className="main-content">
                <h1>Hi {userInfo.user.firstName}!</h1>
                <div className="home-wrapper">
                    <SearchBar />
                    <FiltersSelection />
                    <FilterDetails />
                    <SearchResults />
                </div>
                <p className="logout-link">
                    <Link to="/logout">Logout</Link>
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userInfo: state.user
});

export default connect(mapStateToProps)(HomePage);
