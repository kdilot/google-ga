import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import { createBrowserHistory } from 'history';
// import ReactGA from 'react-ga';

// ReactGA.initialize('G-5FFWEJK8SC');

const Main = loadable(() => import('pages/main'));
const First = loadable(() => import('pages/first'));
const Second = loadable(() => import('pages/second'));

const history = createBrowserHistory();

const Root: React.FC = () => {
    //  페이지 전환 시
    history.listen(location => {
        // ReactGA.set({ page: location.pathname });
        // ReactGA.pageview(location.pathname);
    });

    // 최초 접속 시
    useEffect(() => {
        // ReactGA.pageview(window.location.pathname);
    }, []);

    return (
        <BrowserRouter basename="/google-ga">
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/first" component={First} />
                <Route path="/second" component={Second} />
            </Switch>
        </BrowserRouter>
    );
};

export default Root;
