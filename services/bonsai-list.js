import {Invoker} from '../utils';

async function getBonsaiList(page) {
  let baseUrl = 'http://127.0.0.1:3000';
  let endPoint = 'bonsaiList';
  let params = {
    _page: page,
    _limit: 15,
  };
  let response = await Invoker.callService(baseUrl, endPoint, params);

  return response;
}

export {getBonsaiList};
