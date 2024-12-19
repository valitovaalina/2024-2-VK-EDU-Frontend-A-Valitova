import {getApiUrl} from './helpers/getApiUrl';
import {getMapKey} from './helpers/getMapKey';
import {getValueFromCache} from './helpers/getValueFromCache';
import type {TranslateRequestParameters} from './types/TranslateRequestParameters';
import type {TranslateResponseParameters} from './types/TranslateResponseParameters';

export const translate = async ({text, sourceLang, totalLang}: TranslateRequestParameters): Promise<TranslateResponseParameters> => {
    const map = new Map<string, string>();
    const key = getMapKey(text, sourceLang, totalLang);

    if (map.has(key)) {
        return getValueFromCache(map, key);
    }

    const apiUrl = getApiUrl(text, sourceLang, totalLang);
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.responseStatus !== 200) {
        throw new Error('Что-то пошло не так');
    }

    const translatedText = data.responseData.translatedText;

    map.set(key, translatedText);

    return {
        translatedText,
    };
};