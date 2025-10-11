export default function sitemap() {
  const base = "https://orgatlas.vercel.app";
  const routes = ["/", "/discover", "/people", "/jobs", "/about", "/careers", "/press", "/pricing", "/sales", "/partners", "/api", "/docs", "/security", "/embed"];
  return routes.map((r) => ({ url: `${base}${r}`, changeFrequency: "weekly", priority: r === "/" ? 1 : 0.6 }));
}
