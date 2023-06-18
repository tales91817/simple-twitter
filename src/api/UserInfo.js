import axios from 'axios';
const baseUrl = 'https://afternoon-waters-66047.herokuapp.com';

export const getUserTweetInfo = async(id) => {
    try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImFjY291bnQiOiJ1c2VyMCIsImVtYWlsIjoidXNlcjBAZXhhbXBsZS5jb20iLCJuYW1lIjoiRXJpa2EgRnJpdHNjaCIsImF2YXRhciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzE0MC8xNDAvZm9vZC8_bG9jaz02MS45MzA3ODc1Mjk1NTY2NzUiLCJjb3ZlciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzY0MC8yMDAvbW91bnRhaW4vP2xvY2s9NzIuNjE5NDQyOTA1ODg3OTEiLCJpbnRyb2R1Y3Rpb24iOiJWZWwgdm9sdXB0YXRlbSBwb3NzaW11cyBpbi4gUXVhZSBxdWFlIHF1byBtYWduYW0gaSIsInJvbGUiOiJ1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0xMlQwOTo0MzoxMC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0wNi0xMlQwOTo0MzoxMC4wMDBaIiwiaWF0IjoxNjg2NTYzOTM2LCJleHAiOjE2ODkxNTU5MzZ9.GwX_wkXUJXAsGNq4kKov6q_xVjA0-_tr6OUd0PqoF20'
        const headers = {
            Authorization: `Bearer ${token}`
        }

        localStorage.setItem('token', token);
        const response = await axios.get( `${baseUrl}/api/users/${id}/tweets`, { headers })
        return response.data

    } catch (error) {
        console.error(error)
    }
};

export const getUserInfo = async(id) => {
    try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImFjY291bnQiOiJ1c2VyMCIsImVtYWlsIjoidXNlcjBAZXhhbXBsZS5jb20iLCJuYW1lIjoiRXJpa2EgRnJpdHNjaCIsImF2YXRhciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzE0MC8xNDAvZm9vZC8_bG9jaz02MS45MzA3ODc1Mjk1NTY2NzUiLCJjb3ZlciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzY0MC8yMDAvbW91bnRhaW4vP2xvY2s9NzIuNjE5NDQyOTA1ODg3OTEiLCJpbnRyb2R1Y3Rpb24iOiJWZWwgdm9sdXB0YXRlbSBwb3NzaW11cyBpbi4gUXVhZSBxdWFlIHF1byBtYWduYW0gaSIsInJvbGUiOiJ1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0xMlQwOTo0MzoxMC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0wNi0xMlQwOTo0MzoxMC4wMDBaIiwiaWF0IjoxNjg2NTYzOTM2LCJleHAiOjE2ODkxNTU5MzZ9.GwX_wkXUJXAsGNq4kKov6q_xVjA0-_tr6OUd0PqoF20'
        const headers = {
            Authorization: `Bearer ${token}`
        }

        localStorage.setItem('token', token);
        const response = await axios.get( `${baseUrl}/api/users/${id}`, { headers })
        return response.data 

    } catch(error) {
        console.error(error)
    }
}

export const getUserReplies = async(user_id) => {
    try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImFjY291bnQiOiJ1c2VyMCIsImVtYWlsIjoidXNlcjBAZXhhbXBsZS5jb20iLCJuYW1lIjoiRXJpa2EgRnJpdHNjaCIsImF2YXRhciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzE0MC8xNDAvZm9vZC8_bG9jaz02MS45MzA3ODc1Mjk1NTY2NzUiLCJjb3ZlciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzY0MC8yMDAvbW91bnRhaW4vP2xvY2s9NzIuNjE5NDQyOTA1ODg3OTEiLCJpbnRyb2R1Y3Rpb24iOiJWZWwgdm9sdXB0YXRlbSBwb3NzaW11cyBpbi4gUXVhZSBxdWFlIHF1byBtYWduYW0gaSIsInJvbGUiOiJ1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0xMlQwOTo0MzoxMC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0wNi0xMlQwOTo0MzoxMC4wMDBaIiwiaWF0IjoxNjg2NTYzOTM2LCJleHAiOjE2ODkxNTU5MzZ9.GwX_wkXUJXAsGNq4kKov6q_xVjA0-_tr6OUd0PqoF20'
        const headers = {
            Authorization: `Bearer ${token}`
        }

        localStorage.setItem('token', token);
        const response = await axios.get( `${baseUrl}/api/tweets/${user_id}/replies`, { headers })
        return response.data

    } catch (error) {
        console.error(error)
    }
};

export const getPopulars = async() => {
    try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImFjY291bnQiOiJ1c2VyMCIsImVtYWlsIjoidXNlcjBAZXhhbXBsZS5jb20iLCJuYW1lIjoiRXJpa2EgRnJpdHNjaCIsImF2YXRhciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzE0MC8xNDAvZm9vZC8_bG9jaz02MS45MzA3ODc1Mjk1NTY2NzUiLCJjb3ZlciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzY0MC8yMDAvbW91bnRhaW4vP2xvY2s9NzIuNjE5NDQyOTA1ODg3OTEiLCJpbnRyb2R1Y3Rpb24iOiJWZWwgdm9sdXB0YXRlbSBwb3NzaW11cyBpbi4gUXVhZSBxdWFlIHF1byBtYWduYW0gaSIsInJvbGUiOiJ1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0xMlQwOTo0MzoxMC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0wNi0xMlQwOTo0MzoxMC4wMDBaIiwiaWF0IjoxNjg2NTYzOTM2LCJleHAiOjE2ODkxNTU5MzZ9.GwX_wkXUJXAsGNq4kKov6q_xVjA0-_tr6OUd0PqoF20'
        const headers = {
            Authorization: `Bearer ${token}`
        }

        localStorage.setItem('token', token);
        const response = await axios.get( `${baseUrl}/api/users`, { headers })
        return response.data

    } catch(error) {
        console.error(error)
    }
}


export const getUserLikesInfo = async(id) => {
    try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImFjY291bnQiOiJ1c2VyMCIsImVtYWlsIjoidXNlcjBAZXhhbXBsZS5jb20iLCJuYW1lIjoiRXJpa2EgRnJpdHNjaCIsImF2YXRhciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzE0MC8xNDAvZm9vZC8_bG9jaz02MS45MzA3ODc1Mjk1NTY2NzUiLCJjb3ZlciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzY0MC8yMDAvbW91bnRhaW4vP2xvY2s9NzIuNjE5NDQyOTA1ODg3OTEiLCJpbnRyb2R1Y3Rpb24iOiJWZWwgdm9sdXB0YXRlbSBwb3NzaW11cyBpbi4gUXVhZSBxdWFlIHF1byBtYWduYW0gaSIsInJvbGUiOiJ1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0xMlQwOTo0MzoxMC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0wNi0xMlQwOTo0MzoxMC4wMDBaIiwiaWF0IjoxNjg2NTYzOTM2LCJleHAiOjE2ODkxNTU5MzZ9.GwX_wkXUJXAsGNq4kKov6q_xVjA0-_tr6OUd0PqoF20'
        const headers = {
            Authorization: `Bearer ${token}`
        }

        localStorage.setItem('token', token);
        const response = await axios.get( `${baseUrl}/api/users/${id}/likes`, { headers })
        return response.data

    } catch (error) {
        console.error(error)
    }
};

export const putUserProfileInfo = async(id, payload) => {
    const {
        username,
        userAccount,
        userEmail,
        userPassword,
        userIntroduction
    } = payload
    
    try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTQsImFjY291bnQiOiJ1c2VyMCIsImVtYWlsIjoidXNlcjBAZXhhbXBsZS5jb20iLCJuYW1lIjoiRXJpa2EgRnJpdHNjaCIsImF2YXRhciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzE0MC8xNDAvZm9vZC8_bG9jaz02MS45MzA3ODc1Mjk1NTY2NzUiLCJjb3ZlciI6Imh0dHBzOi8vbG9yZW1mbGlja3IuY29tLzY0MC8yMDAvbW91bnRhaW4vP2xvY2s9NzIuNjE5NDQyOTA1ODg3OTEiLCJpbnRyb2R1Y3Rpb24iOiJWZWwgdm9sdXB0YXRlbSBwb3NzaW11cyBpbi4gUXVhZSBxdWFlIHF1byBtYWduYW0gaSIsInJvbGUiOiJ1c2VyIiwiY3JlYXRlZEF0IjoiMjAyMy0wNi0xMlQwOTo0MzoxMC4wMDBaIiwidXBkYXRlZEF0IjoiMjAyMy0wNi0xMlQwOTo0MzoxMC4wMDBaIiwiaWF0IjoxNjg2NTYzOTM2LCJleHAiOjE2ODkxNTU5MzZ9.GwX_wkXUJXAsGNq4kKov6q_xVjA0-_tr6OUd0PqoF20'
        const headers = {
            Authorization: `Bearer ${token}`
        }

        localStorage.setItem('token', token);
        const response = await axios.put( `${baseUrl}/api/users/${id}`, {
            name: username,
            account: userAccount,
            email: userEmail,
            password: userPassword,
            checkPassword: userPassword,
            introduction: userIntroduction,
        }, { headers })
        return response.data

    } catch (error) {
        console.error(error)
    }
}
