import { join as resolvePath } from 'path'
import dotenv from 'dotenv'

const path = resolvePath(__dirname, '..', '.env')
dotenv.config({ path })

export default {
  path
}
