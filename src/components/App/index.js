import {connect} from 'react-redux';

import App from './App';
import {setBikes} from '../../store/actions'
import {getBikes, getFilters} from '../../store/selectors'

function mapStateToProps(state, ownProps){ 
    return {
        bikes: getBikes(state),
        bikesFilter: getFilters(state),
    };
}
// function mapDispatchToProps(dispatch, ownProps){
//     return {
//         loadBikes: bikes => dispatch(setBikes(bikes)),
//     };
// }

const mapDispatchToProps = {
    loadBikes:setBikes,
};

const connected = connect(mapStateToProps, mapDispatchToProps);
const AppConnected = connected(App);

export default AppConnected;

