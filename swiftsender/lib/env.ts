import isDefined from "@/hooks/isDefined"

isDefined(process.env.GOOGLE_CLIENT_ID)
isDefined(process.env.GOOGLE_CLIENT_SECRET)
isDefined(process.env.GOOGLE_REDIRECT_URI)
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
export const GOOGLE_REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI
