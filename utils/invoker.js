import {ToastAndroid, Platform, AlertIOS} from 'react-native';

// async function callService(baseUrl, endPoint = '', params = {}, options = {}) {
//   let ok = false;

//   let result = fetch(
//     `${baseUrl}/${endPoint}?${new URLSearchParams(params).toString()}`,
//     options,
//   )
//     .then(
//       (response = async () => {
//         ok = reponse.ok;
//         let r = response.json();

//         return r;
//       }),
//     )
//     .then(response => response)
//     .catch(err => notifyMessage(err));

//   return {result, ok};
// }

async function callService(baseUrl, endPoint = '', params = {}, options = {}) {
  let ok;
  let result;

  try {
    let response = await fetch(
      `${baseUrl}/${endPoint}?${new URLSearchParams(params).toString()}`,
      options,
    );
    let result = await response.json();

    return {result};
  } catch (error) {
    notifyMessage(error);

    return {error};
  }
}

function notifyMessage(err) {
  const message = `Ann error has occured: ${err}`;

  if (Platform.OS === 'android') {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    AlertIOS.alert(message);
  }

  return err;
}

export {callService};
