import { Router } from 'express'
import {
  getDecks,
  createDecks,
  updateDecks,
  deleteDecks,
  getDeck
} from '../controllers/decks.controllers.js'

const routerdecks = Router()

//import fileUpload from 'express-fileupload'
import { getCards } from '../controllers/cards.controllers.js'

routerdecks.get('/decks', getCards)
//router.post('/decks', fileUpload({
//  useTempFiles: true, tempFileDir: './uploads'
//}), createCards)
routerdecks.put('/cartas/:id', updateDecks)
routerdecks.delete('/cartas/:id', deleteDecks)
routerdecks.get('/cartas/:id', getDeck)

export default routerdecks