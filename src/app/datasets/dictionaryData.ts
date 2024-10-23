import { Noun, Verb, Particle } from "../models/words";
export { Nouns };
export { Verbs };
export { Particles };

const Particles: Particle[] = [{
    id: "wa",
    hasKanji: false,
    Kanji: "は",
    hiraKata: "は",
    romanji: "wa",
    english: "Topic Marker",
    functionality: "は comes after the topic of the sentence, phrase, or conversation. It always comes after a noun or a pronoun or, sometimes, after the grammatical subject of the sentence.",
    formation: "[ A ] wa [ B ] desu. = [ A ] is [ B ].",
    example: "Nihon wa utsukushii desu. = Japan is beautiful./Jon wa igirisu jin desu. = John is British.",
    notes: "は (wa) follows the topic the speaker wants to talk about. Therefore, wa（は）is often called topic marking particle. The “topic” is often the grammatical subject, but can be anything (including the grammatical object, and sometimes the verb), and it may also follow some other particles.",
    synonyms: [],
    tags: []
},{
    id: "ga",
    hasKanji: false,
    Kanji: "が",
    hiraKata: "が",
    romanji: "ga",
    english: "Subject Marker",
    functionality: "が marks the grammatical subject of a sentence when it’s not the same as the topic of the sentence. It usually comes after a noun, a pronoun or a question word.",
    formation: "Word + ga (が)",
    example: "Neko ga suki desu. = I like cats./Dare ga kimasu ka. = Who will come?",
    notes: "が (ga) marks the grammatical subject of a sentence when it is first introduced to a conversation. It can also be used to join sentences, like the word “but,” though that が is technically a different word. The particle が can also be used to emphasize the subject or distinguish it from others. While は is used when a question word (who, where, etc.) comes after the topic in the sentence (レストランはどこですか。), we use the particle が when the question word is the subject or part of it.",
    synonyms: [],
    tags: []
},{
    id: "o",
    hasKanji: false,
    Kanji: "を",
    hiraKata: "を",
    romanji: "o",
    english: "Direct object marker",
    functionality: "を shows the direct object of an action verb. It always follows the noun or pronoun that is the object of the sentence.",
    formation: "Noun + o (を) + verb",
    example: "Watashi wa choko o tabemasu. = I eat chocolate.",
    notes: "を (o) marks the grammatical object of a sentence. It follows nouns and noun phrases.",
    synonyms: [],
    tags: []
},{
    id: "no",
    hasKanji: false,
    Kanji: "の",
    hiraKata: "の",
    romanji: "no",
    english: "Possessive/attributive",
    functionality: "の is used to indicate possession, similar to “s” in English. It connects two nouns, showing a relationship or belonging.",
    formation: "Object1 + の + Object2",
    example: "Watashi no kuruma. = My car./Kare no inu. = His dog.",
    notes: "の (no) indicates possession (functioning like the English “apostrophe-S”). In the structure A no B, B belongs to A, however, many nouns act like adjectives when followed by no. It directly follows nouns and noun phrases.",
    synonyms: [],
    tags: []
},{
    id: "ka",
    hasKanji: false,
    Kanji: "か",
    hiraKata: "か",
    romanji: "ka",
    english: "Question marker",
    functionality: "か is used at the end of a sentence to turn a statement into a question. It’s the equivalent of the question mark in English.",
    formation: "End of the sentence + ka (か)",
    example: "Kore wa nan desu ka. = What is this?/Kare wa gakusei desu ka. = Is he a student?",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "to",
    hasKanji: false,
    Kanji: "と",
    hiraKata: "と",
    romanji: "to",
    english: "Conjunction or quotation",
    functionality: "と connects nouns in a list, similarly to “and” in English. You also use it before a direct quote.",
    formation: "Noun + to (と) + Noun",
    example: "Inu to neko ga suki desu. = I like dogs and cats./Kare wa “arigatō” to itta.) = He said “thank you.”",
    notes: "と (to) is used to join nouns together into an exhaustive list that functions as a single noun: ”with,” “and.” It’s also the particle used to indicate a direct quote (from someone’s mind or speech), functioning like quotation marks in English.",
    synonyms: [],
    tags: []
},{
    id: "ya",
    hasKanji: false,
    Kanji: "や",
    hiraKata: "や",
    romanji: "ya",
    english: "Inclusive list",
    functionality: "や is used to list items, implying that the list isn’t complete. It’s similar to “and” or “such as” in English.",
    formation: "AやB",
    example: "Ringo ya banana o kaimashita. = I bought apples and bananas, among other things./Nihon ya kankoku o otozuretai. = I want to visit places like Japan and Korea.",
    notes: "や (ya) is used in the same way as the first sense of と, but the list is not exhaustive. It means “such things as A, B, and C.”",
    synonyms: [],
    tags: []
},{
    id: "ni",
    hasKanji: false,
    Kanji: "に",
    hiraKata: "に",
    romanji: "ni",
    english: "Direction and time indicator",
    functionality: "に is used for showing direction, destination, time, or an indirect object. It marks the point in time when something happens or the direction and destination of an action.",
    formation: "Place + ni (に)",
    example: "Gakkō ni ikimasu. = I go to school./Hachi-ji ni okimasu. = I wake up at 8 o’clock.",
    notes: "に (ni) indicates a place towards which someone or something moves. It is preceded by the name of the place and followed by a verb that indicates a moving action such as iku (行く) “to go.” It is also used with giving/receiving verbs and can then mean “from”. In the case of passive verbs, it marks the grammatical agent, making it the same as “by” in English. (i.e. “my wallet was stolen by my brother.” ). に is also used to indicate the location of existence when combined with the verbs いる or ある, making it the Japanese version of “at” (in some instances).",
    synonyms: [],
    tags: []
},{
    id: "e",
    hasKanji: false,
    Kanji: "へ",
    hiraKata: "へ",
    romanji: "e",
    english: "Direction marker",
    functionality: "へ indicates a direction or goal, with more emphasis on the journey than the final destination (like with に).",
    formation: "Location/direction + e(へ)",
    example: "Umi e ikitai. = I want to go to the sea./Nihon e ikimasu. = I am going to Japan.",
    notes: "へ (e) is basically the same as に, except it emphasizes direction over arrival. The main difference is usage. へ is never used as “from”, “by”, “at”. In addition, the particle の can follow the へ particle directly, whereas it cannot follow に.",
    synonyms: [],
    tags: []
},{
    id: "de",
    hasKanji: false,
    Kanji: "で",
    hiraKata: "で",
    romanji: "de",
    english: "Context marker",
    functionality: "で shows where something happens or how something is done.",
    formation: "Location/context + de (で)",
    example: "Watashi wa ie de hon o yomimasu. = I read books at home./Basu de ikimasu. = I will go by bus.",
    notes: "で (de) is used to indicate the location of an action. The performer of the action (the subject) is followed by either of the particles wa or ga, and the place is followed by de. However, it can’t be used with with the verbs いる or ある.",
    synonyms: [],
    tags: []
},{
    id: "mo",
    hasKanji: false,
    Kanji: "も",
    hiraKata: "も",
    romanji: "mo",
    english: "Inclusive particle/also/too",
    functionality: "も means “also” or “too.” It’s used after a noun or pronoun to show addition or inclusion.",
    formation: "[Object1] は [property1/action1] です. [Object2] も [property1/action1] です.",
    example: "Kare mo gakusei desu. = He is also a student./Watashi mo ikimasu. = I will go, too.",
    notes: "も (mo) functions as “also” or “too” in English. It is used to indicate that something which has previously been stated also holds true for the item currently under discussion. It replaces ga, wa or o when used.",
    synonyms: [],
    tags: ["preposition"]
},{
    id: "made",
    hasKanji: false,
    Kanji: "まで",
    hiraKata: "まで",
    romanji: "made",
    english: "Endpoint/until/to",
    functionality: "まで specifies an endpoint or limit in time or space. It’s used to express “until” or “to.”",
    formation: "Noun + made (まで)",
    example: "Eki made hashirimasu. = I will run to the station./Ashita made matte. = Wait until tomorrow.",
    notes: "まで (made) indicates that an action/effect extends or reaches a specified limit or a point in time or space. It is therefore equivalent to the English expression “until.”",
    synonyms: [],
    tags: ["preposition"]
},{
    id: "kara",
    hasKanji: false,
    Kanji: "から",
    hiraKata: "から",
    romanji: "kara",
    english: "Starting point/from/because/since",
    functionality: "から indicates a starting point in time or space or a reason/cause. It translates to “from” or “since.”",
    formation: "Noun + kara (から)",
    example: "Rokuji kara benkyou shimasu. = I study from 6 o’clock./Shigoto kara kaetta. = I returned from work.",
    notes: "から (kara) indicates the source of an object or action. This starting position may be either a point in space (in which case it is translated as “from”), or a point in time (in which case it is translated as “since” or “after”).",
    synonyms: [],
    tags: ["preposition"]
},{
    id: "ne",
    hasKanji: false,
    Kanji: "ね",
    hiraKata: "ね",
    romanji: "ne",
    english: "Agreement and confirmation",
    functionality: "ね is often used at the end of a sentence to seek agreement or confirmation. It’s the same as adding “isn’t it?” to the end of your English sentences. It can also soften a statement.",
    formation: "End of the sentence + ne (ね)",
    example: "Tanoshikatta ne. = It was fun, wasn’t it?/Samui ne. = It’s cold, isn’t it?",
    notes: "ね (ne) is used at the end of sentences, basically in the same way as an English tag question. If said with rising intonation, it indicates a request for confirmation from the listener (i.e., “It’s a beautiful day, isn’t it?” ), whereas if said with falling intonation, it’s used as a rhetorical device (i.e., “It’s a beautiful day, isn’t it.” )",
    synonyms: [],
    tags: []
},{
    id: "yo",
    hasKanji: false,
    Kanji: "よ",
    hiraKata: "よ",
    romanji: "yo",
    english: "Emphasis particle",
    functionality: "よ is used at the end of a sentence to add emphasis.",
    formation: "End of the sentence + yo (よ)",
    example: "Ashita wa ame ga furu yo. = It will rain tomorrow./Mō iku yo. = I’m going now.",
    notes: "よ (yo) is used by the speaker to express a strong conviction about something or to emphatically declare something.",
    synonyms: [],
    tags: []
}]

const Nouns: Noun[] = [{
    id: "hon",
    hasKanji: true,
    Kanji: "本",
    hiraKata: "ほん",
    romanji: "hon",
    english: "book(s)",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "hana",
    hasKanji: false,
    Kanji: "花",
    hiraKata: "はな",
    romanji: "hana",
    english: "flower(s)",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "teburu",
    hasKanji: false,
    Kanji: "テーブル",
    hiraKata: "テーブル",
    romanji: "teburu",
    english: "table",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "doa",
    hasKanji: false,
    Kanji: "ドア",
    hiraKata: "ドア",
    romanji: "doa",
    english: "door",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "ringo",
    hasKanji: false,
    Kanji: "林檎",
    hiraKata: "りんご",
    romanji: "ringo",
    english: "apple",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "ima",
    hasKanji: false,
    Kanji: "今",
    hiraKata: "いま",
    romanji: "ima",
    english: "now/just now/soon/immediately",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "!test",
    hasKanji: true,
    Kanji: "TEST",
    hiraKata: "test",
    romanji: "test",
    english: "test",
    notes: "",
    synonyms: [],
    tags: []
}]

const Verbs: Verb[] = [{
    id: "suru",
    verbType: "Irregular",
    dictionaryFormK: "する",
    dictionaryFormHK: "する",
    dictionaryFormRomanji: "suru",
    english: "to do",
    B1FormK: "し",
    B1FormHK: "し",
    B1FormRomanji: "shi",
    B2FormK: "し",
    B2FormHK: "し",
    B2FormRomanji: "shi",
    B3FormK: "する",
    B3FormHK: "する",
    B3FormRomanji: "suru",
    B4FormK: "すれ",
    B4FormHK: "すれ",
    B4FormRomanji: "sure",
    B5FormK: "しよう",
    B5FormHK: "しよう",
    B5FormRomanji: "shiyou",
    BTeFormK: "して",
    BTeFormHK: "して",
    BTeFormRomanji: "shite",
    BTaFormK: "した",
    BTaFormHK: "した",
    BTaFormRomanji: "shita",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "kuru",
    verbType: "Irregular",
    dictionaryFormK: "来る",
    dictionaryFormHK: "くる",
    dictionaryFormRomanji: "kuru",
    english: "to come",
    B1FormK: "来",
    B1FormHK: "こ",
    B1FormRomanji: "ko",
    B2FormK: "来",
    B2FormHK: "き",
    B2FormRomanji: "ki",
    B3FormK: "来る",
    B3FormHK: "くる",
    B3FormRomanji: "kuru",
    B4FormK: "来れ",
    B4FormHK: "くれ",
    B4FormRomanji: "kure",
    B5FormK: "来よう",
    B5FormHK: "こよう",
    B5FormRomanji: "koyou",
    BTeFormK: "来て",
    BTeFormHK: "きて",
    BTeFormRomanji: "kite",
    BTaFormK: "来た",
    BTaFormHK: "きた",
    BTaFormRomanji: "kita",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "hanasu",
    verbType: "Godan",
    dictionaryFormK: "話す",
    dictionaryFormHK: "はなす",
    dictionaryFormRomanji: "hanasu",
    english: "to speak",
    B1FormK: "話さ",
    B1FormHK: "はなさ",
    B1FormRomanji: "hanasa",
    B2FormK: "話し",
    B2FormHK: "はなし",
    B2FormRomanji: "hanashi",
    B3FormK: "話す",
    B3FormHK: "はなす",
    B3FormRomanji: "hanasu",
    B4FormK: "話せ",
    B4FormHK: "はなせ",
    B4FormRomanji: "hanase",
    B5FormK: "話そう",
    B5FormHK: "はなそう",
    B5FormRomanji: "hanasou",
    BTeFormK: "話して",
    BTeFormHK: "はなして",
    BTeFormRomanji: "hanashite",
    BTaFormK: "話した",
    BTaFormHK: "はなした",
    BTaFormRomanji: "hanashita",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "iku",
    verbType: "Godan",
    dictionaryFormK: "行く",
    dictionaryFormHK: "いく",
    dictionaryFormRomanji: "iku",
    english: "to go/to come",
    B1FormK: "行か",
    B1FormHK: "いか",
    B1FormRomanji: "ika",
    B2FormK: "行き",
    B2FormHK: "いき",
    B2FormRomanji: "iki",
    B3FormK: "行く",
    B3FormHK: "いく",
    B3FormRomanji: "iku",
    B4FormK: "行け",
    B4FormHK: "いけ",
    B4FormRomanji: "ike",
    B5FormK: "行こう",
    B5FormHK: "いこう",
    B5FormRomanji: "ikou",
    BTeFormK: "行って",
    BTeFormHK: "いって",
    BTeFormRomanji: "itte",
    BTaFormK: "行った",
    BTaFormHK: "いった",
    BTaFormRomanji: "itta",
    notes: "iku can mean 'to come', such as 'Un! Ima kara iku yo!' meaing 'Yeah! From now I'm going!' or 'Yeah! I'm coming'",
    synonyms: ['kuru'],
    tags: []
},{
    id: "oyogu",
    verbType: "Godan",
    dictionaryFormK: "泳ぐ",
    dictionaryFormHK: "およぐ",
    dictionaryFormRomanji: "oyogu",
    english: "to swim",
    B1FormK: "泳が",
    B1FormHK: "およが",
    B1FormRomanji: "oyoga",
    B2FormK: "泳ぎ",
    B2FormHK: "およぎ",
    B2FormRomanji: "oyogi",
    B3FormK: "泳ぐ",
    B3FormHK: "およぐ",
    B3FormRomanji: "oyogu",
    B4FormK: "泳げ",
    B4FormHK: "およげ",
    B4FormRomanji: "oyoge",
    B5FormK: "泳ごう",
    B5FormHK: "およごう",
    B5FormRomanji: "oyogou",
    BTeFormK: "泳いで",
    BTeFormHK: "およいで",
    BTeFormRomanji: "oyoide",
    BTaFormK: "泳いだ",
    BTaFormHK: "およいだ",
    BTaFormRomanji: "oyoida",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "nomu",
    verbType: "Godan",
    dictionaryFormK: "飲む",
    dictionaryFormHK: "のむ",
    dictionaryFormRomanji: "nomu",
    english: "to drink",
    B1FormK: "飲ま",
    B1FormHK: "のま",
    B1FormRomanji: "noma",
    B2FormK: "飲み",
    B2FormHK: "のみ",
    B2FormRomanji: "nomi",
    B3FormK: "飲む",
    B3FormHK: "のむ",
    B3FormRomanji: "nomu",
    B4FormK: "飲め",
    B4FormHK: "のめ",
    B4FormRomanji: "nome",
    B5FormK: "飲もう",
    B5FormHK: "のもう",
    B5FormRomanji: "nomou",
    BTeFormK: "飲んで",
    BTeFormHK: "のんで",
    BTeFormRomanji: "nonde",
    BTaFormK: "飲んだ",
    BTaFormHK: "のんだ",
    BTaFormRomanji: "nonda",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "au",
    verbType: "Godan",
    dictionaryFormK: "会う",
    dictionaryFormHK: "あう",
    dictionaryFormRomanji: "au",
    english: "to meet",
    B1FormK: "会わ",
    B1FormHK: "あわ",
    B1FormRomanji: "awa",
    B2FormK: "会い",
    B2FormHK: "あい",
    B2FormRomanji: "ai",
    B3FormK: "会う",
    B3FormHK: "あう",
    B3FormRomanji: "au",
    B4FormK: "会え",
    B4FormHK: "あえ",
    B4FormRomanji: "ae",
    B5FormK: "会おう",
    B5FormHK: "あおう",
    B5FormRomanji: "aou",
    BTeFormK: "会って",
    BTeFormHK: "あって",
    BTeFormRomanji: "atte",
    BTaFormK: "会った",
    BTaFormHK: "あった",
    BTaFormRomanji: "atta",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "katsu",
    verbType: "Godan",
    dictionaryFormK: "勝つ",
    dictionaryFormHK: "かつ",
    dictionaryFormRomanji: "katsu",
    english: "to win",
    B1FormK: "勝た",
    B1FormHK: "かた",
    B1FormRomanji: "kata",
    B2FormK: "勝ち",
    B2FormHK: "かち",
    B2FormRomanji: "kachi",
    B3FormK: "勝つ",
    B3FormHK: "かつ",
    B3FormRomanji: "katsu",
    B4FormK: "勝て",
    B4FormHK: "かて",
    B4FormRomanji: "kate",
    B5FormK: "勝とう",
    B5FormHK: "かとう",
    B5FormRomanji: "katou",
    BTeFormK: "勝って",
    BTeFormHK: "かって",
    BTeFormRomanji: "katte",
    BTaFormK: "勝った",
    BTaFormHK: "かった",
    BTaFormRomanji: "katta",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "uru",
    verbType: "Godan",
    dictionaryFormK: "売る",
    dictionaryFormHK: "うる",
    dictionaryFormRomanji: "uru",
    english: "to sell",
    B1FormK: "売ら",
    B1FormHK: "うら",
    B1FormRomanji: "ura",
    B2FormK: "売り",
    B2FormHK: "うり",
    B2FormRomanji: "uri",
    B3FormK: "売る",
    B3FormHK: "うる",
    B3FormRomanji: "uru",
    B4FormK: "売れ",
    B4FormHK: "うれ",
    B4FormRomanji: "ure",
    B5FormK: "売ろう",
    B5FormHK: "うろう",
    B5FormRomanji: "urou",
    BTeFormK: "売って",
    BTeFormHK: "うって",
    BTeFormRomanji: "utte",
    BTaFormK: "売った",
    BTaFormHK: "うった",
    BTaFormRomanji: "utta",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "asobu",
    verbType: "Godan",
    dictionaryFormK: "遊ぶ",
    dictionaryFormHK: "あそぶ",
    dictionaryFormRomanji: "asobu",
    english: "to play",
    B1FormK: "遊ば",
    B1FormHK: "あそば",
    B1FormRomanji: "asoba",
    B2FormK: "遊び",
    B2FormHK: "あそび",
    B2FormRomanji: "asobi",
    B3FormK: "遊ぶ",
    B3FormHK: "あそぶ",
    B3FormRomanji: "asobu",
    B4FormK: "遊べ",
    B4FormHK: "あそべ",
    B4FormRomanji: "asobe",
    B5FormK: "遊ぼう",
    B5FormHK: "あそぼう",
    B5FormRomanji: "asobou",
    BTeFormK: "遊んで",
    BTeFormHK: "あそんで",
    BTeFormRomanji: "asonde",
    BTaFormK: "遊んだ",
    BTaFormHK: "あそんだ",
    BTaFormRomanji: "asonda",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "shinu",
    verbType: "Godan",
    dictionaryFormK: "死ぬ",
    dictionaryFormHK: "しぬ",
    dictionaryFormRomanji: "shinu",
    english: "to die",
    B1FormK: "死な",
    B1FormHK: "しな",
    B1FormRomanji: "shina",
    B2FormK: "死に",
    B2FormHK: "しに",
    B2FormRomanji: "shini",
    B3FormK: "死ぬ",
    B3FormHK: "しぬ",
    B3FormRomanji: "shinu",
    B4FormK: "死ね",
    B4FormHK: "しね",
    B4FormRomanji: "shine",
    B5FormK: "死のう",
    B5FormHK: "しのう",
    B5FormRomanji: "shinou",
    BTeFormK: "死んで",
    BTeFormHK: "しんで",
    BTeFormRomanji: "shinde",
    BTaFormK: "死んだ",
    BTaFormHK: "しんだ",
    BTaFormRomanji: "shinda",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "aruku",
    verbType: "Godan",
    dictionaryFormK: "歩く",
    dictionaryFormHK: "あるく",
    dictionaryFormRomanji: "aruku",
    english: "to walk",
    B1FormK: "歩か",
    B1FormHK: "あるか",
    B1FormRomanji: "aruka",
    B2FormK: "歩き",
    B2FormHK: "あるき",
    B2FormRomanji: "aruki",
    B3FormK: "歩く",
    B3FormHK: "あるく",
    B3FormRomanji: "aruku",
    B4FormK: "歩け",
    B4FormHK: "あるけ",
    B4FormRomanji: "aruke",
    B5FormK: "歩こう",
    B5FormHK: "あるこう",
    B5FormRomanji: "arukou",
    BTeFormK: "歩いて",
    BTeFormHK: "あるいて",
    BTeFormRomanji: "aruite",
    BTaFormK: "歩いた",
    BTaFormHK: "あるいた",
    BTaFormRomanji: "aruita",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "kesu",
    verbType: "Godan",
    dictionaryFormK: "消す",
    dictionaryFormHK: "けす",
    dictionaryFormRomanji: "kesu",
    english: "to erase/turn off",
    B1FormK: "消さ",
    B1FormHK: "けさ",
    B1FormRomanji: "kesa",
    B2FormK: "消し",
    B2FormHK: "けし",
    B2FormRomanji: "keshi",
    B3FormK: "消す",
    B3FormHK: "けす",
    B3FormRomanji: "kesu",
    B4FormK: "消せ",
    B4FormHK: "けせ",
    B4FormRomanji: "kese",
    B5FormK: "消そう",
    B5FormHK: "けそう",
    B5FormRomanji: "kesou",
    BTeFormK: "消して",
    BTeFormHK: "けして",
    BTeFormRomanji: "keshite",
    BTaFormK: "消した",
    BTaFormHK: "けした",
    BTaFormRomanji: "keshita",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "taberu",
    verbType: "Ichidan",
    dictionaryFormK: "食べる",
    dictionaryFormHK: "たべる",
    dictionaryFormRomanji: "taberu",
    english: "to eat",
    B1FormK: "食べ",
    B1FormHK: "たべ",
    B1FormRomanji: "tabe",
    B2FormK: "食べ",
    B2FormHK: "たべ",
    B2FormRomanji: "tabe",
    B3FormK: "食べる",
    B3FormHK: "たべる",
    B3FormRomanji: "taberu",
    B4FormK: "食べれ",
    B4FormHK: "たべれ",
    B4FormRomanji: "tabere",
    B5FormK: "食べよう",
    B5FormHK: "たべよう",
    B5FormRomanji: "tabeyou",
    BTeFormK: "食べて",
    BTeFormHK: "たべて",
    BTeFormRomanji: "tabete",
    BTaFormK: "食べた",
    BTaFormHK: "たべた",
    BTaFormRomanji: "tabeta",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "iru",
    verbType: "Ichidan",
    dictionaryFormK: "いる",
    dictionaryFormHK: "いる",
    dictionaryFormRomanji: "iru",
    english: "to exist(animate)/to be somewhere",
    B1FormK: "い",
    B1FormHK: "い",
    B1FormRomanji: "i",
    B2FormK: "い",
    B2FormHK: "い",
    B2FormRomanji: "i",
    B3FormK: "いる",
    B3FormHK: "いる",
    B3FormRomanji: "iru",
    B4FormK: "いれ",
    B4FormHK: "いれ",
    B4FormRomanji: "ire",
    B5FormK: "いよう",
    B5FormHK: "いよう",
    B5FormRomanji: "iyou",
    BTeFormK: "いて",
    BTeFormHK: "いて",
    BTeFormRomanji: "ite",
    BTaFormK: "いた",
    BTaFormHK: "いた",
    BTaFormRomanji: "ita",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "miru",
    verbType: "Ichidan",
    dictionaryFormK: "見る",
    dictionaryFormHK: "みる",
    dictionaryFormRomanji: "miru",
    english: "to see",
    B1FormK: "見",
    B1FormHK: "み",
    B1FormRomanji: "mi",
    B2FormK: "見",
    B2FormHK: "み",
    B2FormRomanji: "mi",
    B3FormK: "見る",
    B3FormHK: "みる",
    B3FormRomanji: "miru",
    B4FormK: "見れ",
    B4FormHK: "みれ",
    B4FormRomanji: "mire",
    B5FormK: "見よう",
    B5FormHK: "みよう",
    B5FormRomanji: "miyou",
    BTeFormK: "見て",
    BTeFormHK: "みて",
    BTeFormRomanji: "mite",
    BTaFormK: "見た",
    BTaFormHK: "みた",
    BTaFormRomanji: "mita",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "neru",
    verbType: "Ichidan",
    dictionaryFormK: "寝る",
    dictionaryFormHK: "ねる",
    dictionaryFormRomanji: "neru",
    english: "to sleep",
    B1FormK: "寝",
    B1FormHK: "ね",
    B1FormRomanji: "ne",
    B2FormK: "寝",
    B2FormHK: "ね",
    B2FormRomanji: "ne",
    B3FormK: "寝る",
    B3FormHK: "ねる",
    B3FormRomanji: "neru",
    B4FormK: "寝れ",
    B4FormHK: "ねれ",
    B4FormRomanji: "nere",
    B5FormK: "寝よう",
    B5FormHK: "みよう",
    B5FormRomanji: "neyou",
    BTeFormK: "寝て",
    BTeFormHK: "ねて",
    BTeFormRomanji: "nete",
    BTaFormK: "寝た",
    BTaFormHK: "ねた",
    BTaFormRomanji: "neta",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "kiru",
    verbType: "Ichidan",
    dictionaryFormK: "着る",
    dictionaryFormHK: "きる",
    dictionaryFormRomanji: "kiru",
    english: "to wear/put on",
    B1FormK: "着",
    B1FormHK: "き",
    B1FormRomanji: "ki",
    B2FormK: "着",
    B2FormHK: "き",
    B2FormRomanji: "ki",
    B3FormK: "着る",
    B3FormHK: "きる",
    B3FormRomanji: "kiru",
    B4FormK: "着れ",
    B4FormHK: "きれ",
    B4FormRomanji: "kire",
    B5FormK: "着よう",
    B5FormHK: "きよう",
    B5FormRomanji: "kiyou",
    BTeFormK: "着て",
    BTeFormHK: "きて",
    BTeFormRomanji: "kite",
    BTaFormK: "着た",
    BTaFormHK: "きた",
    BTaFormRomanji: "kita",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "dekiru",
    verbType: "Ichidan",
    dictionaryFormK: "出来る",
    dictionaryFormHK: "できる",
    dictionaryFormRomanji: "dekiru",
    english: "can do",
    B1FormK: "出来",
    B1FormHK: "でき",
    B1FormRomanji: "deki",
    B2FormK: "出来",
    B2FormHK: "でき",
    B2FormRomanji: "deki",
    B3FormK: "出来る",
    B3FormHK: "できる",
    B3FormRomanji: "dekiru",
    B4FormK: "出来れ",
    B4FormHK: "できれ",
    B4FormRomanji: "dekire",
    B5FormK: "出来よう",
    B5FormHK: "できよう",
    B5FormRomanji: "dekiyou",
    BTeFormK: "出来て",
    BTeFormHK: "できて",
    BTeFormRomanji: "dekite",
    BTaFormK: "出来た",
    BTaFormHK: "できた",
    BTaFormRomanji: "dekita",
    notes: "",
    synonyms: [],
    tags: []
},{
    id: "oboeru",
    verbType: "Ichidan",
    dictionaryFormK: "覚える",
    dictionaryFormHK: "おぼえる",
    dictionaryFormRomanji: "oboeru",
    english: "to remember",
    B1FormK: "覚え",
    B1FormHK: "おぼえ",
    B1FormRomanji: "oboe",
    B2FormK: "覚え",
    B2FormHK: "おぼえ",
    B2FormRomanji: "oboe",
    B3FormK: "覚える",
    B3FormHK: "おぼえる",
    B3FormRomanji: "oboeru",
    B4FormK: "覚えれ",
    B4FormHK: "おぼえれ",
    B4FormRomanji: "oboere",
    B5FormK: "覚えよう",
    B5FormHK: "おぼえよう",
    B5FormRomanji: "oboeyou",
    BTeFormK: "覚えて",
    BTeFormHK: "おぼえて",
    BTeFormRomanji: "oboete",
    BTaFormK: "覚えた",
    BTaFormHK: "おぼえた",
    BTaFormRomanji: "oboeta",
    notes: "",
    synonyms: [],
    tags: []
}]