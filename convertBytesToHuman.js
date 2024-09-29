/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

export default function convertBytesToHuman(bytes) {
  if (typeof bytes !== 'number' || isNaN(bytes) || bytes < 0) {
      return false;
  }

    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    let index = 0;

    while (bytes >= 1024 && index + 1 < sizes.length) {
        bytes /= 1024;
        index++;
    }

    return (bytes * 10) % 10 !== 0 ? `${bytes.toFixed(2)} ${sizes[index]}` : `${bytes} ${sizes[index]}`;
}
