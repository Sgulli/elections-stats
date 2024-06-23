export default {
  port: parseInt(Bun.env.PORT, 10) || 3000,
  baseUrl: Bun.env.BASE_URL,
};
