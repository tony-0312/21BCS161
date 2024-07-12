const responseView = (result) => {
    return {
      numbers: result.fetchedNumbers,
      windowPrevState: result.windowPrevState,
      windowCurrState: result.windowCurrState,
      avg: result.avg,
    };
  };
  
  module.exports = responseView;
  