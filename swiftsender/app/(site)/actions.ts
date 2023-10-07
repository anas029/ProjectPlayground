import isDefined from '@/hooks/isDefined';
import { oauth2Client } from '@/lib/google/oauth2Client';
import { google } from 'googleapis';

export const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline', // Request offline access for refresh token
    scope: ['https://www.googleapis.com/auth/gmail.send','https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email']
});

interface ITokenData{
    email: string
    picture: string
    google_id: string
    token: string
}
