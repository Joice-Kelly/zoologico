import { openDB } from './config/db.js'
import {
  SELECT_ESPECIES_BY_HABITAT,
  SELECT_ESPECIE_BY_NOME_CIENTIFICO,
  SELECT_ESPECIME_BY_ID_ESPECIE,
} from './config/queries.js'
;(async () => {
  const db = await openDB()

  let results = await db.all(SELECT_ESPECIES_BY_HABITAT, '%cerra%')
  console.log(results)

  results = await db.all(
    SELECT_ESPECIE_BY_NOME_CIENTIFICO,
    'chrysocyon brachyurus'
  )
  console.log(results)

  results = await db.all(SELECT_ESPECIME_BY_ID_ESPECIE, 1)
  console.log(results)
})()