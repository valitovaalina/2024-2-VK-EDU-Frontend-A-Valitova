import {getApiUrl} from './helpers/getApiUrl';
import {getMapKey} from './helpers/getMapKey';
import type {TranslateRequestParameters} from './types/TranslateRequestParameters';
import type {TranslateResponseParameters} from './types/TranslateResponseParameters';

const map = new Map<string, string>();

export const translate = async ({text, sourceLang, totalLang}: TranslateRequestParameters): Promise<TranslateResponseParameters> => {
    const key = getMapKey(text, sourceLang, totalLang);

    if (map.has(key)) {
        return {
            translatedText: map.get(key) ?? '',
        };
    }

    const apiUrl = getApiUrl(text, sourceLang, totalLang);
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.responseStatus !== 200) {
        throw new Error(`Что-то пошло не так: ${data.error.message}`);
    }

    const translatedText = data.responseData.translatedText;
    map.set(key, translatedText);

    return {
        translatedText,
    };
};