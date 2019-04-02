function generateHashtag(str){
    return (str.length > 140 || str ==='') ? false : '#' + str.split(' ').map(capitalize).join(' ');
}

function capitalize(w){
    console.log(w);
    return w.charAt(0).toUpperCase() + w.slice(1);
}

// #How Are You
console.log(generateHashtag('How are you'));
console.log(generateHashtag(''));
console.log(generateHashtag('How Are YouHow Are YouHow Are YouHow Are YouHow Are YouHow Are YouHow Are YouvHow Are YouHow Are YouHow Are YouHow Are YouHow Are YouHow Are You'));