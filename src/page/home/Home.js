import React from 'react';
import InputGroup from '../../common/component/InputGroup';
import Table from '../../common/component/Table';
import {
  INPUT_TYPE_DATE,
  INPUT_TYPE_TEXT,
  LABEL_NO_STOPS,
  LABEL_SHORTEST_DISTANCE,
  LABEL_TOTAL_DISTANCE,
  TABLE_HEADER_LAST_UPDATED,
  TABLE_HEADER_NAME,
  TABLE_HEADER_SPEED,
} from '../../common/constants';
import CustomMap from '../../common/component/Map';

const Home = function ({
  apiKey,
  vehicles,
  locations,
  vehicle,
  date,
  info,
  position,
  error,
  loading,
  viewport,
  setApiKey,
  findVehicles,
  setVehicle,
  setDate,
  findInfoById,
  setPosition,
  setViewport,
}) {
  const {
    distance: { total, shortest },
    stopsCount,
    points,
  } = info;
  return (
    <div className="row m-1">
      <div className="col">
        <InputGroup
          label="API key"
          type={INPUT_TYPE_TEXT}
          placeholder="(api key goes here)"
          value={apiKey}
          error={error.apiKey}
          loading={loading.vehicles}
          onChange={(value) => setApiKey(value)}
          onClick={() => findVehicles(apiKey)}
        />
        <hr />
        <div className="row">
          <div className="col-6">
            <Table
              headers={[TABLE_HEADER_NAME, TABLE_HEADER_SPEED, TABLE_HEADER_LAST_UPDATED]}
              body={vehicles}
              selected={vehicle}
              prop="objectId"
              onClick={(item) => setVehicle(item)}
            />
            <InputGroup
              label="Date:"
              type={INPUT_TYPE_DATE}
              value={date}
              error={error.date}
              loading={loading.info}
              onChange={(value) => setDate(value)}
              onClick={() => findInfoById(vehicle ? vehicle.objectId : undefined, date)}
            />
            <Table
              body={[
                { label: LABEL_TOTAL_DISTANCE, total: Math.round(total) },
                { label: LABEL_NO_STOPS, stopsCount },
                { label: LABEL_SHORTEST_DISTANCE, shortest },
              ]}
            />
          </div>
          <div className="col-6">
            <CustomMap
              position={position}
              setPosition={setPosition}
              locations={locations}
              viewport={viewport}
              setViewport={setViewport}
              points={points}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
