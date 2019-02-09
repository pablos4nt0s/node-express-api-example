const app = require('./server/config/express');

// eslint-disable-next-line no-console
app.listen(process.env.PORT, async () => console.log(`Server running at port ${process.env.PORT}`));

module.exports = app;
