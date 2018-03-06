// const API_URL = process.env.REACT_APP_API_URL;
// console.log(API_URL);


const CalculationsService = {
  fetchData: () => {
    return fetch('http://localhost:3001/calculations')
      .then(response => response.json())
  }
}

export default CalculationsService;