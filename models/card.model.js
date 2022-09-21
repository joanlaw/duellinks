import mongoose from 'mongoose'

const cartaSchema = mongoose.Schema({
  nombre: {
    type: String,
    unique: true,
   // required: true,
    trim: true
  },
  tipo_de_carta: {
    type: String,
  //  required: true,
    trim: true
  },
  atributo: {
    type: String,
   // required: true,
    trim: true
  },
  tipo: {
    type: String,
  //  required: true,
    trim: true
  },
  nivel_rango: {
    type: Number,
  //  required: true,
    trim: true
  },
  escala: {
    type: Number,
    trim: true
  },
  rareza: {
    type: String,
    trim: true
  },
  limitacion: {
    type: String,
    trim: true
  },
  image: {
    pubic_id: String,
    secure_url: String
  }
}, {
  timestamps: true
})

export default mongoose.model('Carta', cartaSchema)