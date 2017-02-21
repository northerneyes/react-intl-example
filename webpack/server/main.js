import webpack from 'webpack';
import webpackDev from 'webpack-dev-middleware';
import webpackHot from 'webpack-hot-middleware';
import config from '../../webpack.config';
import express from 'express';

const app = express();

const compiler = webpack(config);

app.use(webpackDev(compiler, {
  headers: {'Access-Control-Allow-Origin': '*'},
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(webpackHot(compiler));

const port = '8080';
app.listen(port, () => {
  console.log('Hot server started at port %d', port); // eslint-disable-line no-console
});
