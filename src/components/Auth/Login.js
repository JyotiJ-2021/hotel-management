import { useNavigate } from 'react-router';
import { auth, googleProvider } from '../../firebase.config.js';
import { signInWithPopup } from 'firebase/auth';

export function Login() {
    const navigate = useNavigate();
    const signin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/home');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="log">
            <button onClick={signin}>Sign in with Google</button>
        </div>
    );
}
