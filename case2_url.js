process.argv.forEach(function(arg, index) {
    if (arg === "--input") {
        input = process.argv[index + 1];
    }
});

/*
 I couldn't find any decoder and encoder algorithm that shorten long to short text.
 Any shorterner links site ussualy use database to store both shortened url and real url.
*/

class Hasher {
    encode(text) {
        return Buffer.from(text).toString('base64');
    }

    decode(text) {
        return Buffer.from(text, 'base64').toString('ascii');
    }
}

if (input) {

    let mainUrl = input.substr(0, 27);
    let paramUrl = input.substr(27, input.length);
    let hasher = new Hasher();

    let encode = hasher.encode(paramUrl);
    let decode = hasher.decode(encode);
    console.log("long url : ", input);
    console.log("encode : ", "qo.ala/" + encode);
    console.log("decode : ", mainUrl + decode);

} else {
    console.error("Param (--input) required");
}