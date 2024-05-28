import { ReactComponent as ProfileSvg } from './ProfileSvg.svg';
import { useTheme } from '../../Providers/ThemeContext';

const ProfileIcon = () => {
    const theme = useTheme()
    const color = theme ? 'white' : 'black';
    return (
        <div>
            <ProfileSvg width={50} height={50} fill={color}/>
        </div>
    );
};

export default ProfileIcon;
