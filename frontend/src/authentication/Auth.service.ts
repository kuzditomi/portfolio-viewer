import axios from 'axios';

class AuthService {
    private user: string = '';

    async GetUser() {
        const response = await axios.get('/api/account/me');
        this.user = response.data;

        return this.user;
    }
}

export const authService = new AuthService();