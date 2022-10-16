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
  tipo_magica_trampa:{
    type: String,
    trim: true
  },
  nivel_rango_link: {
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
  atk: {
    type: Number,
    trim: true
  },
  def: {
    type: Number,
    trim: true
  },
  materiales: {
    type: String,
    trim:true
  },
  descripcion: {
    type: String
    
  },
  efecto_pendulo: {
    type: String,
    trim: true
  },
  caja: {
    type: String,
    trim: true
  },
  estructura: {
    type: String,
    trim: true
  },
  selection_box: {
    type: String,
    trim: true
  },
  lote: {
    type: String,
    trim: true
  },
  adicional: {
    type: String,
    trim: true
  },
  fecha_lanzamiento: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
})

export default mongoose.model('Carta', cartaSchema)