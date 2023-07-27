export const getFromSessionStorage = (key: string) => {
    return sessionStorage.getItem(key) || ''
}
