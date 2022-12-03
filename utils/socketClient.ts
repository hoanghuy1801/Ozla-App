import io from 'socket.io-client';

import { BASE_URL } from '@env';

export let socket : any;    

export function init() {
    if (!socket) {
    socket = io( "http://172.20.10.5:4000/", {
        transports: ['websocket'],
    });
}
}


  export function disconnect() {
    if (socket) {
      socket.disconnect();
      socket.close();
    }
    socket = null;
  }