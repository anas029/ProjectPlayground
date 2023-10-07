import * as ENV from '@/lib/env';
import { google } from 'googleapis';


const {   
    GOOGLE_CLIENT_ID:clientId,
    GOOGLE_CLIENT_SECRET:clientSecret,
    GOOGLE_REDIRECT_URI:redirectUri,
} = ENV
    
export const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUri);
