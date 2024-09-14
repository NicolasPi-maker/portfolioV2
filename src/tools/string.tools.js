export const ucFirst = (str) => {
    const firstLetter = str.slice(0,1).toUpperCase();
    return firstLetter + str.slice(1);
}