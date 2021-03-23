import { isFibonacci, isPrime } from './helpers';

export default (state=false, action) => {
    switch(action.type) {
        case 'CHECK_ISFIBONACCI':
            return isFibonacci(parseInt(action.payload));
        case 'CHECK_ISPRIME':
            return isPrime(action.payload);
        default:
            return state;
    }
}