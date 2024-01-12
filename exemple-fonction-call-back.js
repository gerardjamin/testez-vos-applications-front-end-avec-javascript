function operationAsynchrone(callback) {
    // Simulons une opération asynchrone (par exemple, une requête AJAX)
    setTimeout(function() {
      console.log("Opération asynchrone terminée !");
      callback();  // Appel du callback après l'opération asynchrone
    }, 2000);
  }
  
  function monCallback() {
    console.log("Callback appelé !");
  }

  // Utilisation de la fonction avec un callback
operationAsynchrone(monCallback);