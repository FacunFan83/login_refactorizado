import crypto from 'crypto'

export const PORT = 8080
export const MONGODB_STR_CNX = 'mongodb+srv://facundofandino:pass123@cluster0.xpodi4a.mongodb.net/sessions'
export const MONGODB_STR_CNX_DB = 'mongodb+srv://facundofandino:pass123@cluster0.xpodi4a.mongodb.net/'
export function createSalt () {
    return crypto.randomBytes(128).toString('base64')
}

export const encriptedString = (salt, pass) => {
    return crypto.createHmac('sha256', salt).update(pass).digest('hex')
}

export const github_appId = '729517'
export const gitbub_clientID = 'Iv1.79453a756623e5f6'
export const github_clientSecret = '039152580493f01580c45c57dd1b56ef850964d1'
export const github_CallBackURL = 'http://localhost:8080/githubcallback'