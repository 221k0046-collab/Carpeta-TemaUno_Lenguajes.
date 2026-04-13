import axios from "axios";

// 🚀 Función principal
const ejecutar = async () => {
  try {
    // 🔐 1. Enviar usuario y contraseña (POST)
    const loginResponse = await axios.post("https://dummyjson.com/auth/login", {
      username: "emilys",
      password: "emilyspass"
    });

    const token = loginResponse.data.accessToken;
    console.log("✅ Token obtenido:", token);

    // 🔑 2. Usar el token para acceder a datos protegidos
    const datosResponse = await axios.get("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    console.log("📦 Datos protegidos:", datosResponse.data);

  } catch (error) {
    console.error("❌ Error:", error.response?.data || error.message);
  }

  // ❌ 3. Probar con token inválido
  try {
    const responseInvalido = await axios.get("https://dummyjson.com/auth/me", {
      headers: {
        Authorization: "Bearer TOKEN_INVALIDO"
      }
    });

    console.log(responseInvalido.data);

  } catch (error) {
    console.error("🚫 Error con token inválido:", error.response?.data || error.message);
  }
};

// Ejecutar todo
ejecutar();