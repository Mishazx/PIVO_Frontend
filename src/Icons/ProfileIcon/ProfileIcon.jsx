import { ReactComponent as ProfileSvg } from './ProfileSvg.svg';

const ProfileIcon = ({color}) => {
    return (
        <div>
            <ProfileSvg width={50} height={50} fill={color}/>
        </div>
    );
};

export default ProfileIcon;
