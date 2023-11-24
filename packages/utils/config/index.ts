
export const config = {
    get value(){
        return {
            DEV_URL: process.env.NEXT_APP_PUBLIC_BASE_URL
        }
    }
}