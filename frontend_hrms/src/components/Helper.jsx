export default async function TokenExpiry() {
    console.log(document.cookie);
    const refreshToken = document.cookie.match(/(^|;\s*)refresh=([^;]*)/)?.[2];

    console.log("cookie", refreshToken);
    if (!refreshToken) {
        console.error("No refresh token found.");
        return null; 
    }

    console.log("Entered function");
    async function fetchToken() {
        const token = localStorage.getItem('token');
        console.log('Token Expiry Function hit');
    
        try {
            const response = await fetch('http://localhost:8000/auth/token_refresh/', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                },
                credentials: 'include', 
                body: JSON.stringify({ refresh: refreshToken }) 
            });

            // Check if response is JSON
            let data;
            try {
                data = await response.json();
            } catch (jsonError) {
                console.error('Failerd to parse JSON:', jsonError);
                throw new Error('Invalid response from server');
            }

            if (!response.ok) {
                throw new Error(data.message || 'Failed to refresh token');
            }

            console.log('New Access Token:', data.access);
            setCookie('refresh', data.refresh);
            localStorage.setItem('token', data.access); 
            return data.access;
        } catch (error) {
            console.error('Error refreshing token:', error);
            return null; 
        }
    }

    return fetchToken(); // Call the fetchToken function
}

function setCookie(name, value, days = 7) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}