import React from 'react';
import * as auth from "../helpers/auth";



class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
        };
    }


    render() {
        return (
            <div>
                <button onClick={() => {
                    auth.SignOut(() => this.history.push('/'))
                }}>Sign out</button>
                Hello ...
            </div>
        );
    }
}

export default MainPage;
