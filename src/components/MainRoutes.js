import React, {Component} from 'react';

import Content from "./content";
import SelectedPlaylist from "./pages/playListSelected";
import Artist from "./pages/artistSong";
import {Switch, Route} from 'react-router-dom';

export default class MainRoute extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
          }

        }
        

    render(){
        return(
            <div>
                <Switch>
                    <Route path="/" exact component={Content}></Route>
                    <Route path="/playList/:id" 
                    render={(props) => (<SelectedPlaylist {...props}/>)        
                }
                    />
                    <Route path="/Artist/:id"
                    render={(props) => (<Artist {...props}/>)}
                 
                    />
                </Switch>
            </div>
        )
    }
}