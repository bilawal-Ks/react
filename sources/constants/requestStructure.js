export const post = async (endpoint, data) => {
    return (
      fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(json => {
          return json;
        })
   
    );
  };
  export const get = async (endpoint) => {
    return (
      fetch(endpoint, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
        .then(response => response.json())
        .then(json => {
          return json;
        })
    );
  };