import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar"
import style from './nav.module.css';

class Nav extends React.Component {
    constructor (props){
        super(props);
    }

    render(){
        return(
            <div className={style.navBar}>
                <Link to='/home' className={style.linnks}><h3>Home</h3></Link>
                <Link to='/favorite' className={style.linnks}><h3>Favorite</h3></Link>
                <Link to='/about' className={style.linnks}><h3>About</h3></Link>
                <h1 className={style.h1}>Personajes de Rick & Morty</h1>
                <SearchBar onSearch={this.props.onSearch}/>
            </div>
        )
    }
}

export default Nav;