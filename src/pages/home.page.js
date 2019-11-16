import React, {Fragment} from 'react';

import Alert from '../components/layout/Alert.component';
import Search from '../components/search/Search.component';
import UsersGrid from '../components/users/UsersGrid.component';



function Home(props) {
    return (
        <Fragment>
            <Alert />
            <Search />
            <UsersGrid />
        </Fragment>
    )
}

export default Home;
