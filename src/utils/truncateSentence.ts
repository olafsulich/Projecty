export const truncateSentence = (string: string) => string.replace(/^(.{65}[^\s]*).*/, '$1');
