// api.js
const API_URL = 'http://localhost:8081';
const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Credentials': true,
};

const getAuthorizationHeader = () => {
  // Lấy mã JWT từ nơi bạn lưu trữ nó (localStorage, cookie, etc.)
  const jwtToken = localStorage.getItem('accessToken');
  return jwtToken
    ? { Authorization: `Bearer ${jwtToken}` }
    : {};
};
const api = {
  get: async (endpoint) => {
    try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        ...defaultHeaders,
        ...getAuthorizationHeader(),
      },
    });

    if (!response.ok) { // if HTTP-status is 401-599
        const responseData = {status: response.status};
        return responseData;
    }
    const dataRes = await response.json();
    const responseData = {status: response.status, dataRes: dataRes};
    return responseData;
  } 
  catch(error) {
    console.log(error); // Logs any network error.
  }
  },

  post: async (endpoint, data) => {
    try{
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          ...defaultHeaders,
          ...getAuthorizationHeader(),
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) { // if HTTP-status is 401-599
        const responseData = {status: response.status};
        return responseData;
      }
      const dataRes = await response.json();
      const responseData = {status: response.status, dataRes: dataRes}
      return responseData;
    }
    catch(e)
    {
      console.log(e);
    }
  },

  put: async (endpoint, data) => {
    try{
      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'PUT',
        credentials: 'include',
        headers: {
          ...defaultHeaders,
          ...getAuthorizationHeader(),
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) { // if HTTP-status is 401-599
        const responseData = {status: response.status};
        return responseData;
      }
    const dataRes = await response.json();
    const responseData = {status: response.status, dataRes: dataRes};
    return responseData;
    }
   catch(e)
   {
    console.log(e);
   }
  },

  delete: async (endpoint) => {
    try{    
      const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        ...defaultHeaders,
        ...getAuthorizationHeader(),
      },
    });
    if (!response.ok) { // if HTTP-status is 401-599
      const responseData = {status: response.status};
      return responseData;
    }
    const dataRes = await response.json();
    const responseData = {status: response.status, dataRes: dataRes}
    return responseData;
  }
    catch(e)
    {
      console.log(e);
    }
  },
};

export default api;
