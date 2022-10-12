import mongoose from 'mongoose'

const deckSchema = mongoose.Schema({
  jugador: {
    type: String,
    unique: true,
   // required: true,
    trim: true
  },
  habilidad: {
    type: String,
  //  required: true,
    trim: true
  },
  arquetipo: {
    type: String,
   // required: true,
    trim: true
  },
  arquetipo_image: {
    type: String,
   // required: true,
    trim: true
  },
  engine: {
    type: String,
    trim: true
  },
  top: {
    type: String,
  //  required: true,
    trim: true
  },
  puesto:{
    type: String,
    trim: true
  },
  date: {
    type: String,
    trim: true
  },
  cartauno: {
    type: String,
    trim: true
},
cartados: {
  type: String,
  trim:true
}
  /*nivel_rango_ico:{
    type: String,
    trim:true
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
  },
  atk: {
    type: String,
    trim: true
  },
  atk_ico:{
    type: String,
    trim: true
  },
  def: {
    type: String,
    trim: true
  },
  def_ico:{
    type: String,
    trim:true
  },
  materiales: {
    type: String,
    trim:true
  },
  descripcion: {
    type: String
    
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
  fecha_lanzamiento: {
    type: String,
    trim: true
  }
  */
}, {
  timestamps: true
})

export default mongoose.model('Deck', deckSchema)