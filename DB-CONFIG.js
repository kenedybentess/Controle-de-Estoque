
// ================== DB_CONFIG - COLE NO TOPO DO SEU SCRIPT SE PRECISAR ==================
// Este objeto já existe no seu index.html, não precisa criar de novo.
// Basta trocar os valores SUA_API_KEY pelo seu firebaseConfig real.

const DB_CONFIG = {
  enabled: true,
  firebase: {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU-PROJETO.firebaseapp.com",
    databaseURL: "https://SEU-PROJETO-default-rtdb.firebaseio.com",
    projectId: "SEU-PROJETO",
    storageBucket: "SEU-PROJETO.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456:web:abcdef"
  },
  paths: {
    materiais: "wms_final/material_livre",
    ruas: "wms_final/ruas",
    posicoes: "wms_final/posicoes"
  }
};

// Seu app já faz isso automaticamente:
// localStorage.setItem("wms_firebase_config_override", JSON.stringify(DB_CONFIG.firebase))
// ===========================================================================================
