import React from 'react';
import './styles.css'

const App = (props) => {
return  <div>
          hello from {props.name}
          <br />
          My Age is {props.age}
        </div>
}
export default App