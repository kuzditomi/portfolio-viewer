import axios from 'axios';

class AuthService {
    private user: string = '';

    async GetUser() {
        const response = await axios.get('/api/account/me');
        this.user = response.data;

        return this.user;
    }

    async LogIn() {
        window.location.replace('/api/account/login');
    }

    async SignOut() {
        await axios.get('/api/account/logout');
    }
}

export const authService = new AuthService();