import React from 'react';
import { connect } from 'react-redux';
import '../styles/Result.css';

class Result extends React.Component {
    render() {
        return (
            <div className="result item">
                {this.props.result.toString()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        result: state.result
    }
}

export default connect(mapStateToProps, {})(Result);