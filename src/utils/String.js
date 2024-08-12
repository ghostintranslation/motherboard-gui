export function byteToString(array) {
    if (!array) {
        return;
    }

    const utf8decoder = new TextDecoder('utf-8');
    const messageString = utf8decoder.decode(array.slice(1, -1));
    return messageString;
}