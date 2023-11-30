const {
   spawn
} = require('child_process')
const path = require('path')

const express = require('express');
const app = express();
const port = 5000;

function isApplicationRunning() {
  // You can perform checks here, e.g., check the connection to WhatsApp
  // If everything is running correctly, return true; otherwise, return false.
  return true; // Modify this based on your checks
}

app.get('/', (req, res) => {
  const status = isApplicationRunning() ? 'Aplikasi berjalan' : 'Aplikasi tidak berjalan';
  res.status(200).send(status);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
J
function start() {
   let args = [path.join(__dirname, 'alpha.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1) start()
      })
}
start()