const mongoose = require("mongoose");

const Schema = mongoose.Schema;


 
const sensordataSchema = new Schema(
    {
      v1: {
        type: Schema.Types.Number,
        required: true,
      },
      v2: {
        type: Schema.Types.Number,
        required: true,
      },
      v3: {
        type: Schema.Types.Number,
        required: true,
      },
      i1: {
        type: Schema.Types.Number,
        required: true,
      },
      i2: {
        type: Schema.Types.Number,
        required: true,
      },
      i3: {
        type: Schema.Types.Number,
        required: true,
      },
     
    },
    {
      timestamps: true,
    }
  );
  

module.exports = mongoose.model("sensordata", sensordataSchema);
