import app from './app.js'
import { connectToDB } from './utils/mongoose.js'

async function main() {
  await connectToDB()
  app.listen(3000)
  console.log('Funcionando en ', 3000)
}

main()