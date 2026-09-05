export default async (req, context) => {
  const url = new URL(req.url);
  const nombre = url.searchParams.get("nombre") || "Estudiante";
  const area = url.searchParams.get("area") || "TI";

  return new Response(JSON.stringify({
    mensaje: `¡Hola, ${nombre}! Tu función Serverless en Netlify funciona. Eres del area ${area}`,
    fecha: new Date().toISOString()
  }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
};
