import React, {useState} from 'react';
import '../css/Password.css';
import showPasswordIcon from '../images/visible.svg';
import hidePasswordIcon from '../images/hide.svg';


export function usePasswordToggle(initialState = false) {
    const [showPassword, setShowPassword] = useState(initialState);
  
    const togglePasswordVisibility = () => {
      setShowPassword(prevState => !prevState);
    };
  
    return { showPassword, togglePasswordVisibility };
  }

export default function EnterPassword () {

    const { showPassword, togglePasswordVisibility } = usePasswordToggle();

    

    return (
      <div className='position card'>
        <h1 className='card-title ml-10 text-color'>Enter your password</h1>
          
        {/* Profile pic, type of account and username */}
        <div className='card-horizontal ml-10'>
            <img className='card-image' alt='Raul Lendines profile pic' src='https://xsgames.co/randomusers/avatar.php?g=male'></img>

            <div className='card-vertical vertical-middle ml-10'>
                <p className='type-account text-color'>Business Account</p>
                <p className='username text-color'>Raül Lendines</p>
            </div>

           
        </div>

        {/* Password */}
        <div className='mt-10 ml-10 mr-10 text-color'>
            <p className='header-text-password'>Password</p>
            <div className='card-horizontal'>
                <input
                    className='input-password icon-input'
                    type={showPassword ? 'text' : 'password'}
                />
                <img
                    className='toggle-password vertical-middle'
                    src={showPassword ? hidePasswordIcon : showPasswordIcon}
                    alt={showPassword ? 'Hide Password' : 'Show Password'}
                    onClick={togglePasswordVisibility}
                />
            </div>
        </div>

        <div className='card-horizontal space-between'>
            <Switch />

            <button className=' button-continue vertical-middle'> Continue</button>

        </div>
    </div>
  );
}

const Switch = ({ label, onToggle }) => {
    const [isChecked, setIsChecked] = useState(false);
  
    const toggleSwitch = () => {
      setIsChecked(prevState => !prevState);
      if (onToggle) {
        onToggle(!isChecked);
      }
    };
  
    return (
      <div className='switch-container mt-10'>
        <label className='switch-label'>{label}</label>
        <label className='switch'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={toggleSwitch}
          />
          <span className='slider'></span>
        </label>
        <p className='sign-in-button text-color ml-5 vertical-middle'>Stay signed in</p>
      </div>
    );
  };
  
  

