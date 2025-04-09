export interface Book {
    id: number
    title: string
    authors: Author[]
    summaries: string[]
    subjects: string[]
    formats: Formats
  }
  
  export interface Author {
    name: string
    birth_year: any
    death_year: any
  }
  
  export interface Formats {
    "text/html": string
    "application/epub+zip": string
    "application/x-mobipocket-ebook": string
    "text/plain; charset=us-ascii": string
    "application/rdf+xml": string
    "image/jpeg": string
    "application/octet-stream": string
  }
  