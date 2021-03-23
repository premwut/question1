import { combineReducers } from 'redux';

import dropdownOptions from './dropdownOptions';
import currentInput from './currentInput';
import result from './result';

export default combineReducers({
    dropdownOptions,
    currentInput,
    result
})