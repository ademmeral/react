export function isNaN(param) {
    const arg = param.toString();
    if ( arg == 'NaN' ) return true
    else return false;
};

export function checkObjectById(id, arr){
    const cond = arr.some( obj => obj.id == id );
    if (cond) return true
    else return false;
};

export function checkObjectByEmail(email, arr){
    const cond = arr.some( obj => obj.email == email );
    if (cond) return true
    else return false;
};

export function setRandomPhoto(gender){
    const randomIndex = Math.floor( Math.random() * 75 ) + 1;
    const URL = "https://xsgames.co/randomusers/assets/avatars/" + gender + "/" + randomIndex +".jpg";
    return URL;
};

export function findUserById(id, users){
    return users.find( user => user.id == id);
};

export function removeObjectFromArray(param = Object, arr = Array){
    const findObj = arr.find( obj => obj[param.key] == param.val );
    const index = arr.indexOf(findObj);
    arr.splice(index, param.many);
    return arr;                     // yeah, i know. i could also use "filter" =)
};

export function searchWordInString(str, word){
    const strToArr = str.split('');
    const wordToArr = word.split('');
    return wordToArr.find(char => strToArr.includes(char) );
}