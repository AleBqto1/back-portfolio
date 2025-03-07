export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  security: {
    contentSecurityPolicy: {
      directives: {
        "default-src": ["'self'"], // Permite cargar recursos solo desde el mismo dominio
        "frame-ancestors": [
          "'self'",
          "https://portfolio-front-iota-taupe.vercel.app",
        ], // Permite cargar el iframe solo desde tu frontend
        "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'"], // Permite ejecutar scripts
        "style-src": ["'self'", "'unsafe-inline'"], // Permite cargar estilos
        "img-src": ["'self'", "data:", "https://res.cloudinary.com"], // Permite cargar imágenes desde el mismo dominio o servicios como Cloudinary
        "connect-src": ["'self'"], // Permite conexiones AJAX solo desde el mismo dominio
        "font-src": ["'self'"], // Permite cargar fuentes solo desde el mismo dominio
      },
    },
  },
});
