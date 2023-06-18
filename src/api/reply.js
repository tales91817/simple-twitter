import axios from 'axios';
const baseUrl = 'https://afternoon-waters-66047.herokuapp.com';

export const getAllReplies = async(tweet_id) => {
    try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImFjY291bnQiOiJ1c2VyMCIsImVtYWlsIjoidXNlcjBAZXhhbXBsZS5jb20iLCJuYW1lIjoiRXJpa2EgRnJpdHNjaCIsImF2YXRhciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzE0MC8xNDAvZm9vZC8_bG9jaz02MS45MzA3ODc1Mjk1NTY2NzUiLCJjb3ZlciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzY0MC8yMDAvbW91bnRhaW4vP2xvY2s9NzIuNjE5NDQyOTA1ODg3OTEiLCJpbnRyb2R1Y3Rpb24iOiJWZWwgdm9sdXB0YXRlbSBwb3NzaW11cyBpbi4gUXVhZSBxdWFlIHF1byBtYWduYW0gaSIsInJvbGUiOiJ1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0xMlQwOTo0MzoxMC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0wNi0xMlQwOTo0MzoxMC4wMDBaIiwiaWF0IjoxNjg2NTYzOTM2LCJleHAiOjE2ODkxNTU5MzZ9.GwX_wkXUJXAsGNq4kKov6q_xVjA0-_tr6OUd0PqoF20'
        const headers = {
            Authorization: `Bearer ${token}`
        }

        localStorage.setItem('token', token);
        const response = await axios.get( `${baseUrl}/api/tweets/${tweet_id}/replies`, { headers })
        return response.data

    } catch (error) {
        console.error(error)
    }
};

export const replyToTweet = async(userComment, tweet_id) => {
    try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjQsImFjY291bnQiOiJ1c2VyMSIsImVtYWlsIjoidXNlcjFAZXhhbXBsZS5jb20iLCJuYW1lIjoiVmlyZ2luaWUgTG93ZSIsImF2YXRhciI6Imh0dHBzOi8vaS5wcmF2YXRhci5jYy8zMDA_aW1nPTI4IiwiY292ZXIiOiJodHRwczovL2xvcmVtZmxpY2tyLmNvbS82NDAvMjAwL21vdW50YWluLz9sb2NrPTMwLjYwNTQzNTMyNTI0OTQyIiwiaW50cm9kdWN0aW9uIjoiSGVsbG8gV29ybGQiLCJyb2xlIjoidXNlciIsImNyZWF0ZWRBdCI6IjIwMjMtMDYtMTdUMTI6MTY6MTYuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDYtMThUMDk6NTg6NTAuMDAwWiIsImlhdCI6MTY4NzA4OTU3NiwiZXhwIjoxNjg5NjgxNTc2fQ.Vw5jHTbPSw6OdYPyFV6Rd1YarbSQ_cMLNmit8iPNWmo'
        const headers = {
            Authorization: `Bearer ${token}`
        }

        localStorage.setItem('token', token);
        const response = await axios.post( `${baseUrl}/api/tweets/${tweet_id}/replies`, { 
            comment: userComment
        }, { headers })
        return response.data 

    } catch(error) {
        console.error(error)
    }
}

