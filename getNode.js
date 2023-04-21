/*
This file uses the axios library to send an HTTP GET request 
to a specific URL concatenated with the taskId parameter to 
retrieve a list of nodes. If the request is successful, 
it logs the response data to the console, selects a random node
from the list, and returns its URL.
*/


import axios from "axios";

async function getNode(url, taskId) {
    try {
        const res = await axios.get(`${url}/nodes/${taskId}`);
        console.log('RESPOSNE FROM GET NODES', res.data);
        const randomIndex = Math.floor(Math.random() * res.data.length);
        const randomObject = res.data[randomIndex];
        const selectnode = randomObject.data.url
        return selectnode;
      } catch (_e) {
        return [];
      }
}

export default getNode;