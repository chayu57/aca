
const SensorData = require("../models/sensordata");


const sensordataHandler = async (req, res, next) => {
  
  const { v1,v2,v3,i1,i2,i3 } = req.body;


  
  

  let exists = false;
  let sensordata;
  try {
    sensordata = await SensorData.find();
    if (sensordata.length == 1) {
      exists = true;
    }

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Updating Data Failed",
    });
  }

  if (exists) {
    const result = await SensorData.findOneAndUpdate(
      { _id: sensordata[0]._id },
      {
        v1: v1,
        v2: v2,
        v3: v3,
        i1: i1,
        i2: i2,
        i3: i3,
      }
    );
  } else {
    try {
      const newSensorData = new SensorData({
        v1: v1,
        v2: v2,
        v3: v3,
        i1: i1,
        i2: i2,
        i3: i3,



      });
      await newSensorData.save();
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Updating Data Failed",
      });
    }
  }

  return res.status(200).json({
    message: "Data updated successfully",
  });
};

const addHours = (numOfHours, date = new Date()) => {
  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

  return date;
}

const getdataHandler = async (req, res, next) => {
  let sensordata, updatedAtnew;
  try {
    sensordata = await SensorData.find();
    //console.log(sensordata);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Getting Data Failed",
    });
  }
  if (sensordata.length == 1) {
    const updatedAtold = new Date(sensordata[0].updatedAt);
    updatedAtnew = addHours(5.511, updatedAtold);
    
  }

  const data = {
    v1: sensordata[0].v1,
    v2: sensordata[0].v2,
    v3: sensordata[0].v3,
    i1: sensordata[0].i1,
    i2: sensordata[0].i2,
    i3: sensordata[0].i3,
    
  }
  
  return res.status(200).json(data);
}

exports.sensordataHandler = sensordataHandler;
exports.getdataHandler = getdataHandler;
