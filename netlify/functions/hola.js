export default async (req, context) => {
  const url = new URL(req.url);
  const nombre = url.searchParams.get("nombre") || "Estudiante";

  return new Response(JSON.stringify({
    mensaje: `¡Hola, ${nombre}! Tu función Serverless en Netlify funciona.`,
    fecha: new Date().toISOString()
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
