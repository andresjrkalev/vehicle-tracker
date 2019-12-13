import React from 'react';
import { CLASS_TABLE_PRIMARY, KEY_ID, STRING_EMPTY } from '../constants';
import { createMessage } from '../../util/messageUtil';

const Table = ({ headers, body, onClick, selected, prop }) => (
  <table className="table table-bordered table-striped">
    {headers && (
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index} scope="col">
              {header}
            </th>
          ))}
        </tr>
      </thead>
    )}
    {body && (
      <tbody>
        {body.map((item, index) => (
          <tr
            key={index}
            onClick={onClick ? () => onClick(item) : () => {}}
            className={
              selected && selected[prop] === item[prop] ? CLASS_TABLE_PRIMARY : STRING_EMPTY
            }
          >
            {Object.keys(item).map(key => {
              const keyLowercase = key.toLowerCase();
              return (
                !keyLowercase.includes(KEY_ID) && (
                  <td key={key}>{createMessage(keyLowercase, item[key])}</td>
                )
              );
            })}
          </tr>
        ))}
      </tbody>
    )}
  </table>
);

export default Table;
