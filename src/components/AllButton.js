import React from 'react';
import { Link } from 'react-router-dom';

const AllButton = () => {
    return (
        <div>
            <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <Link class="nav-item nav-link" data-toggle="tab" to="/" role="tab">ALL RECIPE(S)</Link>
                    <Link class="nav-item nav-link" data-toggle="tab" to="/inc" role="tab">INCORRECT</Link>
                    <Link class="nav-item nav-link" data-toggle="tab" to="/un" role="tab">UNTAGGED</Link>
                    <Link class="nav-item nav-link" data-toggle="tab" to="/dis" role="tab">DISABLED</Link>
                </div>
            </nav>
        </div>
    )
}
export default AllButton;