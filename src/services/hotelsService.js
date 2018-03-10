module.exports = {
  getHotelsData: (data) => {
    return fetch('/search', {
        body: JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST',
      })
      .then(response => {
        return response.json();
      })
      .catch((err) => {
        console.log(err)
      });
  }
}