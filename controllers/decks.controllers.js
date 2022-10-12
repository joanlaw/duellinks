import { truncateSync } from 'fs';
import Deck from '../models/deck.model.js'
import { uploadImage, deleteImage } from '../utils/cloudinary.js'
import fs from 'fs-extra'


//METODO GET 
export const getDecks = async (req, res) => {
  try {
    const decks = await Deck.find();
    res.json(decks)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

//METODO POST
export const createDecks = async (req, res) => {

  try {

    const { nombre, habilidad, arquetipo, main_deck, extra_deck, side_deck  } = req.body

    const decks = new Deck({
      nombre,
      habilidad,
      arquetipo,
      main_deck,
      extra_deck,
      side_deck
    })

 //   if (req.files?.image) {
 //     const result = await uploadImage(req.files.image.tempFilePath)
 //     cartas.image = {
 //       public_id: result.public_id,
 //       secure_url: result.secure_url
//      }
//      await fs.unlink(req.files.image.tempFilePath)

  //  }
    await decks.save()
    res.json(decks)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }


}

//METODO DELETE
export const deleteDecks = async (req, res) => {


  try {

    const decks = await
      Deck.findByIdAndDelete(req.params.id)

    if (!decks) return res.status(404).json({
      message: 'La carta no existe'
    })

  //  if (decks.image?.public_id) {
  //    await deleteImage(product.image.public_id)
  //  }

    return res.json(decks)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}


//METODO GET UNA CARTA
export const getDeck = async (req, res) => {


  try {

    const decks = await
      Deck.findById(req.params.id)

    if (!decks) return res.status(404).json({
      message: 'La carta no existe'
    })

    return res.json(decks)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}



//METODO UPDATE
export const updateDecks = async (req, res) => {

  try {

    const { id } = req.params;
    const decksUpdate = await
      Deck.findByIdAndUpdate(id, req.body, {
        new: true
      })

    return res.json(decksUpdate)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}