function refineText(source, options) {
    return [normalizeWhiteSpaces, compactWhitespaces, maskBannedWords, trimWhitespaces].reduce(
        (value, filter) => filter(value, options), source
    );
}

function normalizeWhiteSpaces(source) {
    return source
        .replace("\t", " ");
}

function maskBannedWord(source, bannedWord) {
    const mask = "*".repeat(bannedWord.length);
    return source.replace(bannedWord, mask);
}

function maskBannedWords(source, options) {
    return (options && options.bannedWords) ? options.bannedWords.reduce(maskBannedWord, source) : source;
}

function compactWhitespaces(source) {
    return source.indexOf("  ") < 0 ? source : compactWhitespaces(source.replace("  ", " "));
}

function trimWhitespaces(value) {
    return value.trim();
}

module.exports = refineText;