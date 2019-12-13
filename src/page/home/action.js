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
  ENDPOINT_POINTS,
  ENDPOINT_VEHICLES,
  KEY_LOADING_INFO,
  KEY_LOADING_VEHICLES
} from '../../common/constants';
import httpClient from '../../service/httpClient';

export const setApiKey = value => ({
  type: ACTION_SET_API_KEY,
  value
});

const toggleLoading = key => ({
  type: ACTION_TOGGLE_LOADING,
  key
});

export const findVehicles = (apiKey, dispatch) => {
  if (apiKey) {
    dispatch(toggleLoading(KEY_LOADING_VEHICLES));

    httpClient
      .get(ENDPOINT_VEHICLES(apiKey))
      .then(({ data: { response } }) => {
        dispatch({ type: ACTION_GET_VEHICLES, response });
        dispatch(toggleLoading(KEY_LOADING_VEHICLES));
      })
      .catch(() => {
        dispatch({ type: ACTION_GET_VEHICLES_ERROR });
        dispatch(toggleLoading(KEY_LOADING_VEHICLES));
      });
  } else {
    dispatch({ type: ACTION_EMPTY_API_KEY });
  }
};

export const setVehicle = value => ({
  type: ACTION_SELECT_VEHICLE,
  value
});

export const setDate = value => ({
  type: ACTION_SET_DATE,
  value
});

export const findInfoById = (id, date, dispatch) => {
  if (id) {
    dispatch(toggleLoading(KEY_LOADING_INFO));

    httpClient
      .get(ENDPOINT_POINTS(id))
      .then(({ data: { response } }) => {
        dispatch({ type: ACTION_GET_POINTS, response, date });
        dispatch(toggleLoading(KEY_LOADING_INFO));
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: ACTION_GET_POINTS_ERROR });
        dispatch(toggleLoading(KEY_LOADING_INFO));
      });
  } else {
    dispatch({ type: ACTION_EMPTY_ID });
  }
};

export const setPosition = value => ({
  type: ACTION_SET_POSITION,
  value
});

export const setViewport = value => ({
  type: ACTION_SET_VIEWPORT,
  value
});
