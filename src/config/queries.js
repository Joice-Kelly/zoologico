
export const CREATE_TABLE_SPECIE = `
    create table if not exists specie (
      id INTEGER PRIMARY KEY,
      nome_cientifico TEXT NOT NULL,
      nome_popular TEXT NOT NULL,
      habitat TEXT NOT NULL,
      familia TEXT NOT NULL,
      ordem TEXT NOT NULL 
    )
`

export const CREATE_TABLE_SPECIME = `
    create table if not exists specime(
      id INTEGER PRIMARY KEY,
      numero_serie TEXT NOT NULL,
      apelido TEXT NOT NULL,
      species_id INTEGER NOT NULL,
      FOREIGN KEY (species_id) REFERENCES species(id)
)
`;

export const INSERT_SPECIE = `
      insert into specie values (
        ?, ?, ?, ?, ?, ?
      )
`

export const INSERT_SPECIME = `
      insert into specime values (
        ?, ?, ?, ?
      )
`

export const SELECT_SPECIE_BY_HABITAT = `
        select * from specie where lower(habitat) like lower(?)
`

export const SELECT_SPECIE_BY_NOME_CIENTIFICO = `
        select * from specie where lower(nome_cientifico) = lower(?)
`

export const SELECT_SPECIME_BY_ID_SPECIE = `
        select * from specime where id_specie = ?
`

export const TRUNCATE_SPECIE = `
        delete from specie
`

export const TRUNCATE_SPECIME = `
        delete from specime
`