export interface Noun {
    id: string
    hasKanji: boolean,
    Kanji: string,
    hiraKata: string,
    romanji: string,
    english: string,
    notes: string,
    synonyms: string[],
    tags: string[]
}

export interface Verb {
    id: string
    verbForm: string
    hasKanji: boolean,
    Kanji: string,
    hiraKata: string,
    romanji: string,
    english: string,
    notes: string,
    conjugations: string,
    synonyms: string[],
    tags: string[]
}