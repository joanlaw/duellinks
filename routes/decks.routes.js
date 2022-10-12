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
import { getDecks } from '../controllers/decks.controllers'

routerdecks.get('/decks', getDecks)
routerdecks.post('/decks', createDecks)
routerdecks.put('/cartas/:id', updateDecks)
routerdecks.delete('/cartas/:id', deleteDecks)
routerdecks.get('/cartas/:id', getDeck)

export default routerdecks