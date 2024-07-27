
const lang = {
    en:{
        search:"search",
        gptSearchPH: "what would you like to watch today?"
    },
    hindi: {
        search:"खोज",
        gptSearchPH:"आज आप क्या देखना चाहेंगे?"
    },
    kannada:{
        search:"ಹುಡುಕಿ",
        gptSearchPH:"ನೀವು ಇಂದು ಏನನ್ನು ವೀಕ್ಷಿಸಲು ಬಯಸುತ್ತೀರಿ?"
    },
    japanese:{
        search:"検索",
        gptSearchPH:"今日は何を見たいですか？"
    },
    spanish:{
        search:"buscar",
        gptSearchPH:"¿Qué te gustaría ver hoy?"
    }
}

export default lang;

export const SUPPORTED_LANGUAGES = [{identifier:"en", name:"English"},{identifier:"kannada", name:"Kannada"},{identifier:"hindi", name:"Hindi"},{identifier:"spanish", name:"Spanish"},{identifier:"japanese", name:"Japanese"}]