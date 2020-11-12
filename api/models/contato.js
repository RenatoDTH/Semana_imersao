import mongoose from 'mongoose';

const { Schema } = mongoose;

const contato = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    subject: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model('Contato', contato);
