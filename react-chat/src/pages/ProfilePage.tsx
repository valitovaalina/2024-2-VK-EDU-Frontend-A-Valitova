import {useState, type FC} from 'react';
import {ProfileBasic} from '../components/ProfileBasic/ProfileBasic';
import {ProfileBasicEdit} from '../components/ProfileBasicEdit/ProfileBasicEdit';
import {ProfilePageHeader} from '../components/ProfilePageHeader/ProfilePageHeader';
import {userMock} from '../mocks/mocks';

export const ProfilePage: FC = () => {
    const [editingBasic, setEditingBasic] = useState(false);
    const editBasicHandler = () => setEditingBasic((editingBasic) => !editingBasic);

    return (
        <div>
            <ProfilePageHeader />
            {!editingBasic
                ? <ProfileBasic user={userMock} editBasicHandler={editBasicHandler} />
                : <ProfileBasicEdit user={userMock} editBasicHandler={editBasicHandler} />
            }
        </div>
    );
}