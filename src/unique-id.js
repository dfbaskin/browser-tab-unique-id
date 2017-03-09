
export function getUniqueId() {

    let value = window.sessionStorage.getItem('unique-id');

    if(!value) {
        value = generateUuid();
        window.sessionStorage.setItem('unique-id', value);
    }

    return value;
}

// https://www.ietf.org/rfc/rfc4122.txt
// http://stackoverflow.com/a/2117523
export function generateUuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}
