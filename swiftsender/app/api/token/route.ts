import { oauth2Client } from "@/lib/google/oauth2Client";
import { google } from "googleapis";
import { NextRequest } from "next/server"

export async function GET (request: NextRequest){
    const code = request.nextUrl.searchParams.get('code')
    if(!code)
        console.log('no code');
    else {
        try {
            // generate token
            const { tokens } = await oauth2Client.getToken(code);
            const refreshToken = tokens.refresh_token;
            
            // set credentials to access account info
            oauth2Client.setCredentials({ refresh_token: refreshToken });
            // Use the access token to fetch user data or create a user session
            const userInfoClient = google.oauth2('v2').userinfo;
            const { data } = await userInfoClient.get({ auth: oauth2Client });
            console.log(data);
            console.log(refreshToken);
            
            
        }catch (error){
            console.log(error);
        }
    }
}