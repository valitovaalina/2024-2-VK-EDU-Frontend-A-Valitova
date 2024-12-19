import type {TranslateResponseParameters} from '../types/TranslateResponseParameters';

export const getValueFromCache = (map: Map<string, string>, key: string): TranslateResponseParameters => {
    return {
        translatedText: map.get(key) ?? '',
    };
}