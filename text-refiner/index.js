function refineText(source, options) {
    return [normalizeWhiteSpaces, compactWhitespaces, maskBannedWords].reduce(
        (value, filter) => filter(value, options), source
    );
    // source = normalizeWhiteSpaces(source);
    // source = compactWhitespaces(source);
    // source = maskBannedWords(source, options);
    //
    // return source;
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

module.exports = refineText;