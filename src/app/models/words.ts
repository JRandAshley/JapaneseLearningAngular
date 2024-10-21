export interface Word {
    id: string,
    type: string,
    kanji: string,
    hiraKata: string,
    romanji: string,
    english: string
}

export interface Particle {
    id: string
    hasKanji: boolean,
    Kanji: string,
    hiraKata: string,
    romanji: string,
    english: string,
    functionality: string,
    formation: string,
    example: string,
    notes: string,
    synonyms: string[],
    tags: string[]
}

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
    verbType: string
    dictionaryFormK: string,
    dictionaryFormHK: string,
    dictionaryFormRomanji: string,
    english: string,
    B1FormK: string,
    B1FormHK: string,
    B1FormRomanji: string,
    B2FormK: string,
    B2FormHK: string,
    B2FormRomanji: string,
    B3FormK: string,
    B3FormHK: string,
    B3FormRomanji: string,
    B4FormK: string,
    B4FormHK: string,
    B4FormRomanji: string,
    B5FormK: string,
    B5FormHK: string,
    B5FormRomanji: string,
    BTeFormK: string,
    BTeFormHK: string,
    BTeFormRomanji: string,
    BTaFormK: string,
    BTaFormHK: string,
    BTaFormRomanji: string,
    notes: string,
    synonyms: string[],
    tags: string[]
}

export interface UsableVerb {
    Kanji: string,
    HiraKata: string,
    romanji: string
}