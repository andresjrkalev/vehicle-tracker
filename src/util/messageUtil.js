import {
  KEY_SPEED,
  KEY_LAST_UPDATE,
  STRING_EMPTY,
  SYMBOL_KM,
  SYMBOL_SPEED,
  KEY_TOTAL,
  KEY_SHORTEST
} from '../common/constants';
import { initTimeAgo } from './dateUtil';

const createMessage = (key, value) => {
  switch (key) {
    case KEY_LAST_UPDATE:
      return initTimeAgo(value);
    case KEY_TOTAL:
    case KEY_SHORTEST:
      return `${value && value > -1 ? value : 0} ${SYMBOL_KM}`;
    case KEY_SPEED:
      return `${value} ${SYMBOL_SPEED}`;
    default:
      return value || STRING_EMPTY;
  }
};

export { createMessage };
