
auth.onAuthStateChanged(async user => {
  if (!user) {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).catch(err => alert("Error de autenticación"));
    return;
  }

  const email = user.email;
  const adminDoc = await db.collection("allowed_admins").doc(email).get();
  if (!adminDoc.exists) {
    alert("Acceso denegado");
    auth.signOut();
    return;
  }

  document.getElementById("admin-form").style.display = "block";
  document.getElementById("login-status").innerText = "Conectado como: " + email;
});
