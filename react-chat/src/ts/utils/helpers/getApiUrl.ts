export const getApiUrl = (text: string, sourceLang: string, totalLang: string): string => {
    return `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceLang}|${totalLang}`;
};