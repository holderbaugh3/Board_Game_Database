import React from 'react';

const divStyle = {
    color:'white'
};

class About extends React.Component {

    render() {
        return (
            <div style={divStyle}>
                <h2>About Page</h2>
                <main>
                    <p>Jana Holderbaugh graduated from Michigan State in 2020. From there Jana
                        has been in two major positions one at Yahoo as a Front end developer,
                        and the other at Amazon as a Full stack developer.
                    </p>
                </main>
            </div>
        )
    }
}



export default About;
