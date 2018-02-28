const CalculationService = {
  fetchData: () => {
    return fetch('/calculations')
      .then(response => response.json())
  }
}

export default CalculationService;