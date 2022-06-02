import React from "react";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
    return (
        <nav>
            <h1>samantha</h1>
            <button onClick={ () => setLibraryStatus(!libraryStatus) } >
                <h1>library</h1>
            </button>
        </nav>
    );
};

export default Nav;