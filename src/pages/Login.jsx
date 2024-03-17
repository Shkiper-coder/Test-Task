import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../router/useAuth';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { signin } = useAuth()

    const fromPage = location.state?.from?.pathname || "/";

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const user = form.username.value;

        signin(user, () => navigate(fromPage, { replace: true }))
    }

    return (
        <div>
            <h1>Страница входа</h1>
            <form onSubmit={handleSubmit}>
                <MyInput type="text" placeholder="Введите логи" />
                <MyInput type="password" placeholder="Введите пароль" />
                <MyButton>Войти</MyButton>
            </form>

        </div>
    );
};

export { Login };

