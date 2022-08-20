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
    type: Number,
    trim: true
  },
  image: {
    pubic_id: String,
    secure_url: String
  },
  velocidad: {
    type: Number,
    trim: true
  },
  duracion: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
})

export default mongoose.model('Carta', cartaSchema)