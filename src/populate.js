import { openDB } from './config/db.js'
import {
  CREATE_TABLE_SPECIE,
  CREATE_TABLE_SPECIME,
  INSERT_SPECIE,
  INSERT_SPECIME,
  TRUNCATE_SPECIE,
  TRUNCATE_SPECIME,
} from './config/queries.js'

const species = [
  {
    id: 1,
    nomeCientifico: 'Panthera onca',
    nomePopular: 'Onça-Pintada',
    habitat: 'florestas tropicais, pantanal, cerrado',
    familia: 'Felídeos',
    ordem: 'Carnivora',
  },
  {
    id: 2,
    nomeCientifico: 'Chrysocyon brachyurus',
    nomePopular: 'Lobo-Guará',
    habitat: 'pantanal, cerrado',
    familia: 'Canídeos',
    ordem: 'Carnivora',
  },
  {
    id: 3,
    nomeCientifico: 'Hydrochoerus hydrochaeris',
    nomePopular: 'Capivara',
    habitat: 'rios, lagos e pântanos',
    familia: 'Caviidae',
    ordem: 'Rodentia',
  },
]

const specimes = [
  {
    id: 1,
    numeroSerie: 'SN001-1',
    apelido: 'Pintadinha',
    idEspecie: 1,
  },
  {
    id: 2,
    numeroSerie: 'SN002-1',
    apelido: 'Gatão',
    idEspecie: 1,
  },
  {
    id: 3,
    numeroSerie: 'SN001-2',
    apelido: 'Preguiça',
    idEspecie: 2,
  },
  {
    id: 4,
    numeroSerie: 'EPC002-2',
    apelido: 'Dorminhoca',
    idEspecie: 2,
  },
  {
    id: 5,
    numeroSerie: 'EPC001-3',
    apelido: 'Antonieta',
    idEspecie: 3,
  },
  {
    id: 6,
    numeroSerie: 'EPC002-3',
    apelido: 'Mariazinha',
    idEspecie: 3,
  },
]

;(async () => {
  const db = await openDB()
  await db.exec(CREATE_TABLE_SPECIE)
  await db.exec(CREATE_TABLE_SPECIME)

  await db.exec(TRUNCATE_SPECIME)
  await db.exec(TRUNCATE_SPECIE)

  for (let i = 0; i < species.length; i++) {
    const { id, nomeCientifico, nomePopular, habitat, familia, ordem } =
      species[i]

    console.log({ id, nomeCientifico, nomePopular, habitat, familia, ordem })

    await db.run(
      INSERT_SPECIE,
      id,
      nomeCientifico,
      nomePopular,
      habitat,
      familia,
      ordem
    )

    console.log(`Espécie #${i + 1} criada`)
  }

  for (let i = 0; i < specimes.length; i++) {
    const { id, numeroSerie, apelido, idEspecie } = specimes[i]

    console.log({
      id,
      numeroSerie,
      apelido,
      idEspecie,
    })

    await db.run(INSERT_SPECIME, id, numeroSerie, apelido, idEspecie)
    console.log(`--> Espécime #${i + 1} criada`)
  }

  console.log('Mal feito desfeito')
})()