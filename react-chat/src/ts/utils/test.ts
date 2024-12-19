import {translate} from './translate';

export const test = async () => {
    const result = await translate({
        text: 'Фронтенд - это круто!',
        sourceLang: 'ru',
        totalLang: 'en',
    });

    console.log(result);
};
