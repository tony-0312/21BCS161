const NumberService = require('../services/numberService');
const responseView = require('../views/responseView');

const getNumbers = async (req, res) => {
  const numberId = req.params.numberid;
  const windowSize = 10;

  try {
    const result = await NumberService.fetchAndStoreNumbers(numberId, windowSize);
    const response = responseView(result);
    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getNumbers };
