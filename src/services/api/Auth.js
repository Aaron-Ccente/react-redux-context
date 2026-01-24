import { API_BASE_URL } from "./prefix"

export class AuthService {
  static async login(data) {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      const errorBody = await response.json()
      throw new Error(errorBody.message || `Error HTTP: ${response.status}`)
    }

    return await response.json()
  }
  static async register(data){
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if(!response.ok){
        const errorBody = await response.json()
        throw new Error(errorBody.message || `Error HTTP: ${response.status}`)
      }
      const json = await response.json();
      return json;
    } catch (error) {
      throw new Error('Error en el registro: ' + error.message);
    }
  }
}
