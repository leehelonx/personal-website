async function loadProfile() {
  try {
    const response = await fetch("/api/profile");
    const profile = await response.json();

    document.querySelector("#name").textContent = profile.name;
    document.querySelector("#bio").textContent = profile.bio;
  } catch {
    // 后端未启动时，保留 HTML 中的默认内容，便于单独预览页面。
  }
}

loadProfile();
