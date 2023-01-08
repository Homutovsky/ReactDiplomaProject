
export type FoundFilms = {
  alternativeName :string,
  description: string,
  enName:string | null,
  externalId: {
    imdb : string | null,
    kpHD : string,
    _id :string,
  },
  id?:number, 
  logo: {
    url: string
    _id: string
  }[],
  movieLength: number,
  name:string,
  names:[],
  poster: {
    previewUrl: string,
    url: string,
    _id: string,
  },
  rating? : {
    await?: number
    filmCritics?: number
    imdb?: any
    kp?: number
    russianFilmCritics?: number
    _id?: string
  } | undefined,
  releaseYears: {
    start: number, 
    end: number, 
    _id: string}[],
  shortDescription: string,
  type: string,
  votes: {
    await: number,
    filmCritics: number,
    imdb: number,
    kp: number,
    russianFilmCritics: number,
    _id: string,
  },
  watchability: {
    items : {}[],
    _id: number,
  },
  year: number
}

export  type FoundFilmsArray = Array<FoundFilms>

export type FilmType = {
  ageRating: null
  alternativeName:string
  backdrop: null
  budget: {
    _id: string, 
    qvalue: number, 
    currency: string}
  collections: []
  countries: Array<{
    name:string
  }>,
  createDate: string,
  description: string,
  distributors: {
    distributor: null, 
    distributorRelease: null}
  enName: null,
  externalId: {
    kpHD: null, 
    imdb: string, 
    _id: string}
  facts: [],
  fees: {
    world: {
      id:string
    }, 
    russia: {
      id:string
    }, 
    usa: {
      id:string
    }, 
    _id: string}
  genres: Array<{
    name:string
  }>
  id: number
  images: {
    framesCount: number}
  imagesInfo: {
    _id: string, 
    framesCount: number,}
  lists: []
  logo: {
    _id: string, 
    url: null}
  movieLength: number
  name: string
  names: Array<{
    name:string
  }>
  persons: Array<{
    enName: string,
    enProfession: string,
    id: number,
    name: string,
    photo: string,
  }>
  poster: {
    _id: string, 
    url: string, 
    previewUrl: string}
  premiere: {
    _id: string, 
    country: string, 
    world: string}
  productionCompanies: []
  rating: {
    kp: number, 
    imdb: any, 
    filmCritics: number, 
    russianFilmCritics: number, 
    await: number,
    id?:number}
  ratingMpaa: null
  releaseYears: Array<{
    end: number,
    start: number
    _id: string
  }>
  seasonsInfo: Array<{
    episodesCount: number
    number: number
  }>

  sequelsAndPrequels: Array<{
    id:number
  }>
  shortDescription: null
  similarMovies: []
  slogan: null
  spokenLanguages: []
  technology: {
    _id: string, 
    hasImax: false, 
    has3D: false}
  ticketsOnSale: false
  top10: null
  top250: null
  type: string
  typeNumber: number
  updateDates: []
  updatedAt: string
  videos: {
    teasers: []
    trailers: [
      Record<string, string>
    ]}
  votes: {
    kp: number, 
    imdb: number, 
    filmCritics: number, 
    russianFilmCritics: number, 
    await: number, 
    id?: string}
  watchability: {
    _id: string,
    items: null}
    year: number
} | undefined
