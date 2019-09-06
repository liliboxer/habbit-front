let token = null;

export const setToken = newToken => {
  token = newToken;
};

export const postHabbit = (habbit, description) => {
  return fetch(`${process.env.API_URL}/api/v1/habbits`, {
    method: 'POST',
    body: JSON.stringify({ habbit, description }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => {
      if(!res.ok) throw 'Could not create habbit';
      return res.json();
    });
};
