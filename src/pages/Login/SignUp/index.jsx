import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { LuX, LuCamera, LuUpload } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ButtonGoBack from '../../../components/ButtonGoBack';
import { registerUser, completeProfile } from '../../../services/api';
import '../Login.css'

// Página 1: Informações inicias

function StepOne({ onNext }) {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [ formData, setFormData ] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData (prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors (prev => ({
                ...prev, 
                [name]: ''
            }))
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'As senhas não se coincidem';
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        setError('');
        if (!validateForm()) {
            return;
        }

        // Não salva no banco, apenas passa os dados para a próxima etapa
        onNext(formData)
    }

    return (
        <main className='login-page'>
            <div className="container-login">
                <div className="login-logo">
                    <img src="../newBubbleIcon.png" alt="logo" />
                    <h1 className='login-tittle'>BUBBLE</h1>
                </div>

                <h2 className="login-tittle">Seja Bem-vindo</h2>

                <h4 className="login-tittle">Cadastre-se já e <br /> venha fazer parte de <br /> nossa comunidade</h4>

                <p id='login-p' >Ao você continuar, você estará concordando com nossos <br /> <span>Termos de Uso</span> e <span>Política de Privacidade</span> da Bubble</p>

                <h3 className='mt-8'>Já tem uma conta?</h3>

                <button type="submit" className='signup-input' onClick={() => {navigate('/')}}>Faça Login</button>
            </div>

            <div className="container-login-form">
                <div className="login-block">
                    <div className="login-return">
                        <ButtonGoBack />
                    </div>
                    <div className="parent-login-container-form">
                        <h3 className="login-tittle">Cadastro</h3>
                        <div className='child-login-container-form'>
                            <form onSubmit={handleRegister}>
                                <div className="login-form">
                                    <label htmlFor="username" className='mt-5'>Nome de usuário</label>
                                    <input type="text" id="username" name='username' placeholder='Digite o seu nome de usuário' value={formData.username} onChange={handleChange} required/>
                                </div>
                                <div className="login-form">
                                    <label htmlFor="email" className='mt-5'>Email</label>
                                    <input type="email" id="email" name='email' value={formData.email} onChange={handleChange} placeholder='Digite o seu Email' required/>
                                </div>
                                <div className="login-form">
                                    <label htmlFor="password" className='mt-5'>Senha</label>
                                    <div className="password-wrapper">
                                        <input type={showPassword ? "text" : "password"} id="password" name='password' placeholder="Digite a sua senha" value={formData.password}
                                        onChange={handleChange} className={errors.password ? 'inout-error' : ''} required />
                                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="toggle-password">
                                        {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                        </button>
                                    </div>
                                </div>
                                <div className="login-form">
                                    <label htmlFor="password" className='mt-5'>Confirme sua senha</label>
                                    <div className="password-wrapper">
                                        <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" name='confirmPassword' placeholder="Digite novamente a sua senha" value={formData.confirmPassword}
                                        onChange={handleChange} className={errors.confirmPassword ? 'input-error' : ''} required />
                                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="toggle-password">
                                        {showConfirmPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                                        </button>
                                    </div>
                                    {errors.confirmPassword && (
                                        <small className="error-text">{errors.confirmPassword}</small>
                                    )}
                                </div>
                                {error && <p className="error-text">{error}</p>}
                                <button type='submit' className='login-button'>Criar sua conta</button>
                            </form>

                            <div className='separator'><p>ou continue com</p></div>

                            <div className="account-cast">

                                <div>
                                    <div className="flex flex-col items-center justify-center rounded-full text-2xl h-20 w-20 bg-gray-800" ><FcGoogle/></div>
                                </div>

                                <div>
                                    <div className="flex flex-col items-center justify-center rounded-full text-2xl h-20 w-20 bg-gray-800" ><FaFacebook/></div>
                                </div>

                                <div>
                                    <div className="flex flex-col items-center justify-center rounded-full text-2xl h-20 w-20 bg-gray-800" > <FaXTwitter/></div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
} 

// Página 2: Customização com Preview

function StepTwo({userData, onComplete}) {
    const [ profilePic, setProfilePic ] = useState(null)
    const [ profilePreview, setProfilePreview ] = useState(null)
    const [ banner, setBanner ] = useState(null)
    const [ bannerPreview, setBannerPreview ] = useState(null)
    const [ nickname, setNickname ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ uploading, setUploading ] = useState(false)

    const handleFileChange = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                if (type === 'profile') {
                    setProfilePic(file);
                    setProfilePreview(reader.result);
                } else if (type === 'banner') {
                    setBanner(file)
                    setBannerPreview(reader.result)
                }
            };
            reader.readAsDataURL(file);
        } 
    };

    const removeImg = (type) => {
        if (type === 'profile') {
            setProfilePic (null)
            setProfilePreview (null)
        } else {
            setBanner(null)
            setBannerPreview(null)
        }
    }

const handleFinish = async () => {
    if (!nickname.trim()) {
        alert('Para continuar defina um nome de Exibição');
        return;
    }

    if (nickname.trim().length < 3) {
        alert('O nome de exibição deve ter pelo menos 3 caracteres');
        return;
    }

    setUploading(true)

    try {
        // Primeiro cria o usuário
        const { username, email, password } = userData;
        const registerResponse = await registerUser(username, email, password);
        console.log('Usuário criado:', registerResponse)
        
        const userId = registerResponse.user?.id || registerResponse.userId || registerResponse.id;

        if (!userId) {
            throw new Error('ID do usuário não foi retornado');
        }

        const formData = new FormData();
        formData.append('userId', userId)
        formData.append('nickname', nickname.trim())
        formData.append('description', description);

        if (description && description.trim()) {
            if (description.length > 150) {
                alert('Descrição não pode ter mais de 150 caracteres');
                return;
            }
            formData.append('bio', description.trim())
        }

        if (profilePic) {
            formData.append('profilePic', profilePic)
        }
        
        if (banner) {
            formData.append('banner', banner)
        }

        const profileData = await completeProfile(formData)

        onComplete(profileData);
    } catch (error) {
        const message = error.response?.data?.error || error.response?.data?.message || error.message || 'Erro ao finalizar cadastro';
        alert('Erro: ' + message);
        
        console.error('Erro completo:', error);
    } finally {
        setUploading(false)
    }
}

    const handleSkip = () =>{
        handleFinish();
    }

    return (
        <main className='login-page'>
            <div className="container-login-form">
                <div className="login-block">
                    <div className="login-return">
                        <ButtonGoBack />
                    </div>
                    <div className="parent-login-container-form">
                        <h3 className="login-tittle">Personalização</h3>
                        <div className='child-login-container-form'>
                            <form onSubmit={(e) => { e.preventDefault(); handleFinish(); }}>
                                <div className="login-form">
                                    <label htmlFor="nickname" className='mt-5'>Nome de Exibição</label>
                                    <input 
                                        type="text" 
                                        id="nickname" 
                                        name="nickname" 
                                        value={nickname} 
                                        onChange={(e) => setNickname(e.target.value)} 
                                        placeholder='Digite o seu nome de exibição' 
                                        required 
                                    />
                                </div>
                                
                                <div className="login-form">
                                    <label htmlFor="profilePic"  className='mt-5'>Foto de Perfil</label>
                                    <label htmlFor="profilePic" className='photo-input'>
                                        <LuCamera />
                                        <span>Escolher Foto</span>
                                    </label>
                                    <input 
                                        type="file" 
                                        id="profilePic" 
                                        accept="image/*" 
                                        hidden 
                                        onChange={(e) => handleFileChange(e, 'profile')} 
                                    />
                                </div>
                                
                                <div className="login-form">
                                    <label htmlFor="banner" className='mt-5'>Banner</label>
                                    <label htmlFor="banner" className='banner-input'>
                                        <LuUpload />
                                        <span className="text-sm text-gray-500">Clique para fazer upload</span>
                                        <span className="text-xs text-gray-400 mt-1">PNG, JPG até 10MB</span>
                                    </label>
                                    <input 
                                        type="file" 
                                        id="banner" 
                                        accept="image/*" 
                                        onChange={(e) => handleFileChange(e, 'banner')} 
                                        hidden 
                                    />
                                </div>
                                
                                <div className="login-form">
                                    <label htmlFor="description" className='mt-5'>Descrição (opcional)</label>
                                    <textarea 
                                        id="description" 
                                        maxLength={150} 
                                        value={description} 
                                        onChange={(e) => setDescription(e.target.value)} 
                                        placeholder="Conte um pouco sobre você..." 
                                    />
                                    <small>{description.length}/150</small>
                                </div>
                                
                                <button type='submit' className='login-button' disabled={uploading}>
                                    {uploading ? 'Finalizando...' : 'Finalizar Cadastro'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lado direito com preview */}
            <div className="container-login">
                <div className="login-logo">
                    <img src="../newBubbleIcon.png" alt="logo" />
                    <h1 className='login-tittle'>BUBBLE</h1>
                </div>

                {/* Preview do Perfil */}
                <div className="profile-preview-container">
                    {/* Banner Preview */}
                    <div className="preview-banner">
                        {bannerPreview ? (
                            <img src={bannerPreview} alt="Banner Preview" />
                        ) : (
                            <div className="preview-banner-placeholder">
                                <LuUpload size={40} />
                                <p>Adicione um banner</p>
                            </div>
                        )}
                    </div>

                    {/* Profile Picture + Info */}
                    <div className="preview-profile-info">
                        <div className="preview-avatar">
                            {profilePreview ? (
                                <img src={profilePreview} alt="Profile Preview" />
                            ) : (
                                <div className="preview-avatar-placeholder">
                                    <LuCamera size={32} />
                                </div>
                            )}
                        </div>

                        <div className="preview-user-details">
                            <h2 className="preview-nickname">
                                {nickname || 'Seu Nome'}
                            </h2>
                            <h6 className="preview-username">@{userData.username || 'username'}</h6>
                            <div className='max-w-[100%] min-h-24 text-justify break-words mt-6 border-2 border-[#1a1a2e] rounded-lg px-3 py-1.5 relative'>
                                {description}
                            <h6 className='absolute bg-[#2a2a3e] px-2 no-underline bottom-25'>Bio:</h6>
                            </div>
                            {/* {description} */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

function Success({ userData }) {
    const navigate = useNavigate();
    
    return (
        <main className=' w-screen h-screen flex justify-center items-center text-white'>
            <div className="container-login">
                <div className="login-logo">
                    <img src="../newBubbleIcon.png" alt="logo" />
                    <h1 className='login-tittle'>BUBBLE</h1>
                </div>
                <h2>Cadastro Completo! 🎉</h2>
                <p>Bem-vindo, {userData.nickname}!</p>
                <button 
                    className='login-button'
                    onClick={() => navigate('/')}
                >
                    Ir para o Login
                </button>
            </div>
        </main>
    );
}

export default function MultiStepRegistration() {
    const [step, setStep] = useState(1);
    const [userData, setUserData] = useState(null);
    const [profileData, setProfileData] = useState(null);

    const handleStepOneComplete = (formData) => {
        setUserData(formData);
        setStep(2);
    };

    const handleStepTwoComplete = (data) => {
        setProfileData(data);
        setStep(3);
    }
    
    return (
        <>
            {step === 1 && <StepOne onNext={handleStepOneComplete} />}
            {step === 2 && <StepTwo userData={userData} onComplete={handleStepTwoComplete} />}
            {step === 3 && <Success userData={profileData} />}
        </>
    )
}