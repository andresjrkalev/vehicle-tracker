export const ACTION_EMPTY_API_KEY = 'ACTION_EMPTY_API_KEY';
export const ACTION_EMPTY_ID = 'ACTION_EMPTY_ID';
export const ACTION_GET_POINTS = 'ACTION_GET_POINTS';
export const ACTION_GET_POINTS_ERROR = 'ACTION_GET_POINTS_ERROR';
export const ACTION_GET_VEHICLES = 'ACTION_GET_VEHICLES';
export const ACTION_GET_VEHICLES_ERROR = 'ACTION_GET_VEHICLES_ERROR';
export const ACTION_TOGGLE_LOADING = 'ACTION_TOGGLE_LOADING';
export const ACTION_SELECT_VEHICLE = 'ACTION_SELECT_VEHICLE';
export const ACTION_SET_API_KEY = 'ACTION_SET_API_KEY';
export const ACTION_SET_DATE = 'ACTION_SET_DATE';
export const ACTION_SET_POSITION = 'ACTION_SET_POSITION';
export const ACTION_SET_VIEWPORT = 'ACTION_SET_VIEWPORT';

export const CLASS_TABLE_PRIMARY = 'table-primary';

export const ENDPOINT_POINTS = id =>
  `/Vehicles/getRawData?objectId=${id}&begTimestamp=2019-09-30&endTimestamp=2019-10-01&key=home.assignment-699172&json`;
export const ENDPOINT_VEHICLES = apiKey => `/Vehicles/getLastData?key=${apiKey}&json`;
const ERROR = 'Something went wrong.';
export const ERROR_EMPTY_API_KEY = 'Field is empty!';
export const ERROR_EMPTY_VEHICLE = 'Vehicle is not selected!';
export const ERROR_FAULTY_API_KEY = `${ERROR} Please check API key!`;
export const ERROR_FAULTY_DATE = `${ERROR} Please check date!`;
export const ERROR_NOT_FOUND_INFO = 'Info not found!';

export const FORMAT_DATE_SLASH = 'dd/MM/yyyy';

export const INPUT_TYPE_DATE = 'date';
export const INPUT_TYPE_TEXT = 'text';

export const KEY_ID = 'id';
export const KEY_LOADING_INFO = 'info';
export const KEY_LAST_UPDATE = 'lastupdated';
export const KEY_LOADING_VEHICLES = 'vehicles';
export const KEY_SHORTEST = 'shortest';
export const KEY_SPEED = 'speed';
export const KEY_STORE = 'storeState';
export const KEY_TOTAL = 'total';

export const LABEL_NO_STOPS = 'Number of stops';
export const LABEL_SHORTEST_DISTANCE = 'Shortest possible distance';
export const LABEL_TOTAL_DISTANCE = 'Total distance';
export const LANG_EN = 'en-US';

export const STRING_EMPTY = '';
export const SYMBOL_KM = 'km';
export const SYMBOL_SPEED = 'km/h';

export const TABLE_HEADER_LAST_UPDATED = 'Last update';
export const TABLE_HEADER_NAME = 'Name';
export const TABLE_HEADER_SPEED = 'Speed';
