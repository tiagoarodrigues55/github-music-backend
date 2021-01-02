import express from 'express'
import cors from 'cors'

import routes from './routes'
//A importação deve vir com a definição de tipos da dependencia

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
//Query Params: Parametros que vem na própria rota, geralmente opcionais para filtros, paginação... 



app.listen(3333)

