export const getMapKey = (text: string, sourceLang: string, totalLang: string): string => {
    return `text=${text};sourceLang=${sourceLang};totalLang=${totalLang}`;
}