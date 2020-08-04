const initialStatus = { sum: 0 }

const counterReducer = (state = initialStatus, action) => {
  switch (action.type) {
    case "TOTAL_NUMBER_INCREASE":
      return {
        sum: state.sum + 1
      };
    case "TOTAL_NUMBER_DECREASE":
      return {
        sum: state.sum - 1
      };
    case "TOTAL_NUMBER_RESET":
      return {
        sum: state.sum - action.number
      };
    default:
      return state;
  }
}

export default counterReducer