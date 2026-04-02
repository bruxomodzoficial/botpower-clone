async function buscarPerfil() {
  const userId = document.getElementById("userId").value;
  if (!userId) return alert("Digite um UserID!");

  // 🔹 Perfil
  const resPerfil = await fetch(`https://api.imvu.com/user/user-${userId}`);
  const jsonPerfil = await resPerfil.json();
  const user = jsonPerfil.denormalized[`https://api.imvu.com/user/user-${userId}`].data;

  const perfil = {
    nome: user.display_name || "Sem nome",
    arroba: user.username || "Sem @",
    pais: user.country || "Não informado",
    genero: user.gender || "N/A",
    vip: user.is_vip ? "Sim 💎" : "Não ❌",
    tagline: user.tagline || "Sem bio",
    online: user.online ? "🟢 Online" : "🔴 Offline"
  };

  // 🔹 Mostrar perfil
  const perfilContainer = document.getElementById("perfil-container");
  perfilContainer.innerHTML = `
    <div class="perfil-card">
      <h2>@${perfil.arroba}</h2>
      <p>Nome: ${perfil.nome}</p>
      <p>Status: ${perfil.online}</p>
      <p>VIP: ${perfil.vip}</p>
      <p>País: ${perfil.pais}</p>
      <p>Tagline: ${perfil.tagline}</p>
    </div>
  `;

  // 🔹 Aqui depois você pode adicionar outfits, inventário, salas e hashtags
  document.getElementById("outfits-container").innerHTML = "<p>Outfits: Em construção...</p>";
  document.getElementById("inventario-container").innerHTML = "<p>Inventário: Em construção...</p>";
  document.getElementById("salas-container").innerHTML = "<p>Salas públicas: Em construção...</p>";
  document.getElementById("hashtags-container").innerHTML = "<p>Hashtags: Em construção...</p>";
}