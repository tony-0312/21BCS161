const NumberService = require('../services/numberService');
const responseView = require('../views/responseView');
const Number = require('../model/numberModel')

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

const insertNumbers = async(req, res)=>{

    const number = new Number(req.body)
    try{
        const n1 = await number.save()
        res.status(200).json(n1)
    }catch(err){
      res.status(403).send('Error'+err)
    }
};

module.exports = { getNumbers : getNumbers,
  insertNumbers : insertNumbers
 };