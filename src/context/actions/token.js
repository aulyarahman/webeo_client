export function authHeader() {
    // return authorization header with basic auth credentials
    let token = localStorage.getItem('tokenAuth');

    return  `Bearer ${token}`
    
}