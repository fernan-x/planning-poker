export function generateUUID() {
    return Date.now() + Math.floor(Math.random() * 100).toString();
}