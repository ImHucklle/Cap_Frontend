import { render } from '@testing-library/react';
import React, { Component } from 'react'

class Landing extends Component {


    render() {
        return(
            <nav class="navbar navbar-light bg-light">
                <form class="container-fluid">
                    <div class="input-group">
                        <span class="input-group-text" id="basic-addon1">Find</span>
                        <input type="text" class="form-control" placeholder="Italian cuisine with chicken..." aria-label="Username" aria-describedby="basic-addon1"></input>
                    </div>
                </form>
            </nav>
        )
    }
}

export default Landing;
