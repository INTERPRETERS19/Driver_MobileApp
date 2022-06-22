import React, {useState, createContext} from 'react';
import client from 'api/client';

export const dashboardContext = createContext();

export const DashboardProvider = function (props) {
  const [allShipments, setAllShipments] = useState();

  const getAll = async () => {
    await client
      .get('/machines')
      .then(response => {
        setAllMachines(response.data);
      })
      .catch(err => {
        console.log('Unable to get all machines');
      });
  };

  return (
    <GetMachinesContext.Provider
      value={{
        allMachines,
        getAllMachines,
      }}>
      {props.children}
    </GetMachinesContext.Provider>
  );
};
