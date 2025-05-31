
document.getElementById("biz-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const form = e.target;
  const data = {
    name: form.name.value,
    category: form.category.value,
    location: form.location.value,
    whatsapp: form.whatsapp.value,
    instagram: form.instagram.value,
    description: form.description.value,
    imageUrl: form.imageUrl.value,
    approved: false,
    isFeatured: false,
    createdAt: new Date()
  };
  await db.collection("businesses").add(data);
  alert("Negocio enviado correctamente");
  form.reset();
});
