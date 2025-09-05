const API_BASE = window.ENV_API_BASE; // injeta via <script> no index.html
export const token = () => localStorage.getItem("jwt");
export const authHeaders = () => token() ? { Authorization: `Bearer ${token()}` } : {};
export async function getPhotos(params){
  const q = new URLSearchParams(params);
  try{
    const r = await fetch(`${API_BASE}/api/photos?${q}`, { headers: authHeaders()});
    if(!r.ok){
      const msg = await r.text();
      throw new Error(msg || 'erro ao buscar fotos');
    }
    return r.json();
  }catch(err){
    console.error(err);
    throw err;
  }
}
