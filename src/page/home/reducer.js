import {
  ACTION_EMPTY_API_KEY,
  ACTION_EMPTY_ID,
  ACTION_GET_POINTS,
  ACTION_GET_POINTS_ERROR,
  ACTION_GET_VEHICLES,
  ACTION_GET_VEHICLES_ERROR,
  ACTION_SELECT_VEHICLE,
  ACTION_SET_API_KEY,
  ACTION_SET_DATE,
  ACTION_SET_POSITION,
  ACTION_SET_VIEWPORT,
  ACTION_TOGGLE_LOADING,
  ERROR_EMPTY_API_KEY,
  ERROR_EMPTY_VEHICLE,
  ERROR_FAULTY_API_KEY,
  ERROR_FAULTY_DATE,
  ERROR_NOT_FOUND_INFO,
} from '../../common/constants';

const initialState = {
  apiKey: undefined,
  vehicles: [],
  locations: [],
  vehicle: undefined,
  date: new Date(),
  info: {
    distance: {
      total: undefined,
      shortest: undefined,
    },
    stopsCount: undefined,
    points: [],
  },
  position: undefined,
  error: {
    apiKey: undefined,
    date: undefined,
  },
  loading: {
    vehicles: false,
    info: false,
  },
  viewport: {
    latitude: 58,
    longitude: 25,
    zoom: 5.5,
    width: 500,
    height: 500,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_SET_API_KEY:
      return { ...state, apiKey: action.value };
    case ACTION_GET_VEHICLES: {
      const { response } = action;
      const vehicles = response.map(({
        objectId, objectName, speed, timestamp,
      }) => ({
        objectId,
        objectName,
        speed,
        lastUpdated: timestamp,
      }));
      const locations = response.map(({ objectName, latitude, longitude }) => ({
        objectName,
        latitude,
        longitude,
      }));
      const locationsCount = locations.length;
      const position = {
        latitude:
          locations.map(({ latitude }) => latitude).reduce((prev, next) => prev + next)
          / locationsCount,
        longitude:
          locations.map(({ longitude }) => longitude).reduce((prev, next) => prev + next)
          / locationsCount,
      };
      return {
        ...state, vehicles, locations, position, error: initialState.error,
      };
    }
    case ACTION_GET_VEHICLES_ERROR:
      return { ...state, error: { apiKey: ERROR_FAULTY_API_KEY } };
    case ACTION_EMPTY_API_KEY:
      return { ...state, error: { apiKey: ERROR_EMPTY_API_KEY } };
    case ACTION_SELECT_VEHICLE:
      return { ...state, vehicle: action.value };
    case ACTION_SET_DATE:
      return { ...state, date: action.value };
    case ACTION_GET_POINTS: {
      const { response, date } = action;
      const info = response.filter(
        ({ timestamp }) => new Date(timestamp).toDateString() === new Date(date).toDateString(),
      );
      if (info.length) {
        const distances = info.map(({ Distance }) => Distance);
        const total = distances.reduce((prev, next) => prev + next);
        const shortest = Math.min(...distances);
        const stopsCount = info.filter(({ EngineStatus }) => !EngineStatus).length;
        const points = info.map(({ Latitude, Longitude }) => [Latitude, Longitude]);
        return {
          ...state,
          info: { distance: { total, shortest }, stopsCount, points },
          error: initialState.error,
        };
      }
      return { ...state, error: { date: ERROR_NOT_FOUND_INFO } };
    }
    case ACTION_GET_POINTS_ERROR:
      return { ...state, error: { date: ERROR_FAULTY_DATE } };
    case ACTION_SET_POSITION: {
      const { value } = action;
      const { latitude, longitude } = value;
      return { ...state, position: value, viewport: { ...state.viewport, latitude, longitude } };
    }
    case ACTION_TOGGLE_LOADING: {
      const { key } = action;
      return { ...state, loading: { [key]: !state.loading[key] } };
    }
    case ACTION_EMPTY_ID:
      return { ...state, error: { date: ERROR_EMPTY_VEHICLE } };
    case ACTION_SET_VIEWPORT:
      return { ...state, viewport: action.value };
    default:
      return state;
  }
};
