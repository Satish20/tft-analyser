import Api from '@/services/Api'

export default function (credentials: any) {
    return Api().post('register', credentials)
}
