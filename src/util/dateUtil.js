import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import { LANG_EN } from '../common/constants';

const initTimeAgo = date => {
  TimeAgo.addLocale(en);
  return new TimeAgo(LANG_EN).format(Date.now() - new Date(date).getTime());
};

export { initTimeAgo };
