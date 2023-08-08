import { io } from 'socket.io-client';

//configure application url
const productionUrl = process.env.REACT_APP_BASE_REQUEST_URL;
const developmentUrl = process.env.REACT_APP_BASE_DEV_URL;

const environment = process.env.NODE_ENV;

export function getUrl() {
  if (environment === 'production') {
    return productionUrl;
  } else {
    return developmentUrl;
  }
}

//socket io real time communication
const socketUrl = getUrl();

const socketConfig = {
  //
};

export const socketIo = io(socketUrl, socketConfig);
