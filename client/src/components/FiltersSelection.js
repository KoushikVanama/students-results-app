import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues } from 'redux-form';

import SelectBox from '../components/FormControls/SelectBox';
import * as studentResActions from '../actions/students';

const operationOptions = [
    { label: 'Greater than (>)', value: 'gt' },
    { label: 'Lesser than (<)', value: 'lt' }
];

const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const checkLimit = value => value && value <= 100 && value >= 1 ? undefined : `Marks should be between 1 to 100`;

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => {
    return(
        <div className="form-group">
            <input {...input} className="form-control" placeholder={label} type={type} />
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    );
}

class FiltersSelection extends React.Component{
    componentDidUpdate(prevProps) {
        const { formValues, saveFitleredResults } = this.props;
        if (formValues !== prevProps.formValues) {
            if(formValues.marks >=1 && formValues.marks <= 100 && formValues.operation) {
                saveFitleredResults(formValues.operation, formValues.marks);
            }
        }
    }

    render() {
        const { studentResInfo } = this.props;
        const { subjects, chosenSubject } = studentResInfo;
        return (
            <div className="filters-selection full-width">
                <div className="filters-selection-header">
                    <p>Filter value selection</p>
                </div>
                <div className="filters-selection-content">
                    {chosenSubject ? (
                        <form>
                            <div className="filters-dropdown">
                                <Field
                                    name="subject"
                                    component={SelectBox}
                                    options={subjects}
                                    placeholder="Choose an operation"
                                    defaultValue={chosenSubject}
                                    disabled
                                />
                            </div>
                            <div className="filters-dropdown">
                                <Field
                                    name="operation"
                                    component={SelectBox}
                                    options={operationOptions}
                                    placeholder="Choose an operation"
                                />
                            </div>
                            <Field
                                name="marks"
                                type="text"
                                component={renderField}
                                label="Marks(1-100)"
                                validate={[number, checkLimit]}
                            />
                        </form>
                    ) : <p className="no-results">No Filters Selected</p>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    studentResInfo: state.students,
    formValues: getFormValues('FiltersSelectionForm')(state)
});

const mapDispatchToProps = (dispatch) => ({
    saveFitleredResults: (operation, marks) => dispatch(studentResActions.saveFitleredResults(operation, marks))
});

export default reduxForm({
    form: 'FiltersSelectionForm'
})(connect(mapStateToProps, mapDispatchToProps)(FiltersSelection));
