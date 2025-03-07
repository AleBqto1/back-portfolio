export default [
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          // Permitir iframe solo desde tu dominio frontend
          "frame-ancestors": ["'self'", "https://alejandrosalazar.vercel.app"], // Asegúrate de poner el dominio correcto
        },
      },
    },
  },
  // Otros middlewares predeterminados de Strapi
  "strapi::logger",
  "strapi::errors",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
