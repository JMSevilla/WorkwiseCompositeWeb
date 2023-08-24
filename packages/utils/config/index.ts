
export const config = {
    get value(){
        return {
            DEV_URL: process.env.NEXT_PUBLIC_COMMONS_API_BASE_URL
        }
    }
}