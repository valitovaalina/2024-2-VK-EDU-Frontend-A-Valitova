import {type FC} from 'react';
import {ProfileBasic} from '../components/ProfileBasic/ProfileBasic';
import {ProfilePageHeader} from '../components/ProfilePageHeader/ProfilePageHeader';
import {userMock} from '../mocks/mocks';

export const ProfilePage: FC = () => {
    return (
        <div>
            <ProfilePageHeader />
            <ProfileBasic user={userMock} editBasicHandler={() => {}} />
        </div>
    );
}