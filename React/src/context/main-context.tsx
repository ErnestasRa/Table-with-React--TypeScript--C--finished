import * as React from 'react';

type MainContextType = {
    profilePicture: string | undefined,
    setProfilePicture: React.Dispatch<React.SetStateAction<string | string[] | undefined>>;
};

const MainContext = React.createContext<MainContextType | undefined>(undefined);
export default MainContext;
