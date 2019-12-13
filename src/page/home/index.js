import Home from './Home';
import { connect } from 'react-redux';
import {
  findInfoById,
  findVehicles,
  setApiKey,
  setDate,
  setPosition,
  setVehicle,
  setViewport
} from './action';

const mapStateToProps = state => ({
  apiKey: state.home.apiKey,
  vehicles: state.home.vehicles,
  locations: state.home.locations,
  vehicle: state.home.vehicle,
  date: state.home.date,
  info: state.home.info,
  position: state.home.position,
  error: state.home.error,
  loading: state.home.loading,
  viewport: state.home.viewport
});

const mapDispatchToProps = dispatch => ({
  setApiKey: value => dispatch(setApiKey(value)),
  findVehicles: apiKey => findVehicles(apiKey, dispatch),
  setVehicle: value => dispatch(setVehicle(value)),
  setDate: value => dispatch(setDate(value)),
  findInfoById: (id, date) => findInfoById(id, date, dispatch),
  setPosition: value => dispatch(setPosition(value)),
  setViewport: value => dispatch(setViewport(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
