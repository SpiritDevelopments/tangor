import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "@material-ui/core";
import Icon from '../images/iphone-sea.jpg'

const Welcome = () => {
    return(
        // <Link to="/card">１．セキュリティ</Link>
        <div className="unko">
                <Button variant="contained" color="secondary" component={Link} to="/login">SIGN IN</Button>
                <Button variant="contained" color="primary" component={Link} to="/login">SIGN UP</Button>
                {/* <img src={Icon} /> */}

        </div>
    )
}

export default Welcome