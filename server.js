const app = require('./modules/app/app');
const {port} = require('./config');

app.listen(port, () => {
  console.log(`[petful-server] Listening on ${ port }.`);
});
