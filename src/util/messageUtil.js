import {
  KEY_LAST_UPDATE,
  KEY_SHORTEST,
  KEY_SPEED,
  KEY_TOTAL,
  STRING_EMPTY,
  SYMBOL_KM,
  SYMBOL_SPEED,
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
