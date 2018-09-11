const fs = require('fs');
const { exec } = require('child_process');

const type = process.argv[2];
const name = process.argv[3];

const TYPES = {
  COMPONENT: 'component',
  CONTAINER: 'container'
};

const COMPONENT_BOILERPLATE = `import { React, Component } from 'react';

  class ${name}Component extends Component {
    componentDidMount() {
    }

    render() {
      return(
        <div>Test value</div>
      )
    }
  }

  export default ${name}Component;`;

const CONTAINER_BOILERPLATE = `import { React, Component } from 'react';

  class ${name}Container extends Component {
    componentDidMount() {
    }

    render() {
      return(
        <div>Test value</div>
      )
    }
  }

  export default ${name}Container;`;

if (type === TYPES.COMPONENT) {
  generateComponent(name);
};

if (type === TYPES.CONTAINER) {
  generateContainer(name);
};

function generateComponent(dirName) {
  if (!fs.existsSync(dirName)) {
    exec(`mkdir ${dirName}Component`, (err) => {
      if (err) {
        throw err
      }
    })
  }
  fs.writeFileSync(`${dirName}Component/index.js`, COMPONENT_BOILERPLATE);
  fs.writeFileSync(`${dirName}Component/index.css`, null);
}

function generateContainer(dirName) {
  if (!fs.existsSync(dirName)) {
    exec(`mkdir ${dirName}Container`, (err) => {
      if (err) {
        throw err
      }
    })
  }
  fs.writeFileSync(`${dirName}Container/index.js`, CONTAINER_BOILERPLATE);
}