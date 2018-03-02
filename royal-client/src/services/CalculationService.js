// const API_URL = process.env.REACT_APP_API_URL;
// console.log(API_URL);


const CalculationService = {
  fetchData: () => {
    return fetch('http://localhost:3001/calculations')
      .then(response => console.log(response.json()))
  }
}

export default CalculationService;