const initialStatus = { totalNumber: 0 }

const totalNumberReducer = (state = initialStatus, action) => {
  switch (action.type) {
    case "TOTAL_NUMBER_INCREASE":
      return {
        totalNumber: state.totalNumber + 1
      };
    case "TOTAL_NUMBER_DECREASE":
      return {
        totalNumber: state.totalNumber - 1
      };
    case "TOTAL_NUMBER_RESET":
      return {
        totalNumber: state.totalNumber - action.number
      };
    default:
      return state;
  }
}

export default totalNumberReducer