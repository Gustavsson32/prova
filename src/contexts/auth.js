import { createContext } from 'react';
import api from '../services/api';
const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
async function Login() {
const response = await api.post('/login', {
mail: 'john@gmail.com',
password: '123456',
});
console.log(response);
}
return (
<AuthContext.Provider value={{ signed: true, Login }}>
{children}
</AuthContext.Provider>
);
};
export default AuthContext;
