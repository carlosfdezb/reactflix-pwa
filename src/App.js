import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Crew } from './pages/Crew';
import { Related } from './pages/Related';

import { Seasons } from './pages/Seasons';
import { Episodes } from './pages/Episodes';

import { Search } from './pages/Search';
import { Player } from './pages/Player';
import { PlayerEpisode } from './pages/PlayerEpisode';
import { Movies } from './pages/Movies';
import { Series } from './pages/Series';

import { MyList } from './pages/MyList';

const App = () => {
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />

      <Router>
        <Route exact path='/' component={Home} />

        <Route path='/detail/:type/:id' component={Detail} />
        <Route path='/crew/:type/:id' component={Crew} />
        <Route path='/related/:type/:id' component={Related} />

        {/* Series routes */}
        <Route path='/seasons/:type/:id' component={Seasons} />
        <Route path='/episodes/:type/:id/:season' component={Episodes} />

        <Route path='/search' component={Search} />
        <Route path='/player/:type/:id' component={Player} />
        <Route path='/playerepisode' component={PlayerEpisode} />
        <Route path='/movies' component={Movies} />
        <Route path='/series' component={Series} />

        <Route path='/mylist' component={MyList} />

      </Router>
    </Suspense>
  );
};

export default App;
