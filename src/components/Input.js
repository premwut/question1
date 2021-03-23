import React from 'react';
import { connect } from 'react-redux';

import { onInputChange, onOptionChange } from '../actions'
import '../styles/Input.css';


class Input extends React.Component {
    renderedOptions() {
        const renderedOptions = this.props.dropdownOptions.map(option => {
            return <option key={option.value}> {option.value} </option>
        });
        return renderedOptions;
    }

    onInputChange(e) {
        const payload = {
            number: e.target.value,
            option: this.props.currentInput.option
        }
        this.props.onInputChange(payload);
    }

    selectedIndexValue(event) {
        const index = event.target.selectedIndex;
        return { number: this.props.currentInput.number, option:event.target[index].value };
    }

    render() {
        return (
            <>
                <div className="input item">
                    <input value={this.props.currentInput.number}  onChange={(e) => this.onInputChange(e)} type="text" />
                </div>
                <div className="dropdown item">
                    <select onChange={(e) => this.props.onOptionChange(this.selectedIndexValue(e))}>
                        {this.renderedOptions()}
                    </select>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        dropdownOptions: state.dropdownOptions,
        currentInput: state.currentInput
    };
}

export default connect(mapStateToProps, {
    onInputChange,
    onOptionChange,
})(Input);