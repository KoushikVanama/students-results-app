import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'

import * as studentResActions from '../actions/students';
import SelectBox from '../components/FormControls/SelectBox';

class SearchBar extends React.Component{
    componentDidMount() {
        const { getSubjects } = this.props;
        getSubjects();
    }

    onSubjectChange = (option) => {
        const { saveSubject } = this.props;
        saveSubject(option);
    }

    render() {
        const { studentResInfo } = this.props;
        const { subjects } = studentResInfo;
        return (
            <div className="search-bar full-width">
                <div className="search-bar-header">
                    <p>Filter Search</p>
                </div>
                <div className="search-bar-content">
                    <Field
                        name="subject"
                        component={SelectBox}
                        options={subjects}
                        placeholder="Choose a subject"
                        onChange={v => this.onSubjectChange(v)}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    studentResInfo: state.students
});

const mapDispatchToProps = (dispatch) => ({
    getSubjects: () => dispatch(studentResActions.getSubjects()),
    saveSubject: (selectedOption) => dispatch(studentResActions.saveSubject(selectedOption))
});

export default reduxForm({
    form: 'SearchBarForm'
})(connect(mapStateToProps, mapDispatchToProps)(SearchBar));
