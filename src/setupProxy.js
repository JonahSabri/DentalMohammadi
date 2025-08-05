const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api': '/api',
      },
      onProxyReq: function(proxyReq, req, res) {
        console.log('Proxying:', req.method, req.url, '->', proxyReq.path);
      },
      onError: function(err, req, res) {
        console.error('Proxy error:', err);
      }
    })
  );

  app.use(
    '/admin',
    createProxyMiddleware({
      target: 'http://localhost:8000',
      changeOrigin: true,
      secure: false,
      onProxyReq: function(proxyReq, req, res) {
        console.log('Proxying admin:', req.method, req.url, '->', proxyReq.path);
      },
      onError: function(err, req, res) {
        console.error('Admin proxy error:', err);
      }
    })
  );
}; 