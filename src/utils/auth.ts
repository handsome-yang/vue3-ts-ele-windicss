

export const getToken = (name:string) => sessionStorage.getItem(name)

export const setToken = (name:string,token:string) => sessionStorage.setItem(name,token)

export const removeToken = (name:string) => sessionStorage.removeItem(name)
