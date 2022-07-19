export const makeAPIRequest = ({
  url,
  data,
  method,
  params,
  //   headers,
  //   onUploadProgress,
}) =>
  new Promise(async (resolve, reject) => {
    const options = {
      url: url,
      data: data,
      method: method,
      params: params,
      //   headers: headers,
      // baseURL: apiConst.baseURL,
    };

    axios({...options})
      .then(response => {
        console.log('axiosn response', response);
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(error => {
        reject(error);
      });
  });

// Action

// export const getUser = (request) => async (dispatch) => {
//     const headers = {
//         accesstoken: await getFirebaseToken(),
//     };
//     if (headers.accesstoken !== false) {
//         return makeAPIRequest({
//             method: method.get,
//             url: apiConst.getUser,
//             headers: headers,
//         })
//             .then((response) => {
//                 console.log("response :: ", response);
//                 dispatch({ type: GET_USER_PAGE_DETAILS, payload: response?.data });
//                 if (request.onSuccess) request.onSuccess(response?.data);
//             })
//             .catch((err) => {
//                 console.log("Error :: ", err.response);
//                 if (request.onFail) request.onFail(err);
//             });
//     }
//     else {
//         request.onFail()
//     }
// };
