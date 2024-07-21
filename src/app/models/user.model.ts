export interface User {
  username: string;
  password?: string; // Hacemos que la propiedad password sea opcional
  nombre?: string;
  apellido?: string;
  perfil?: string;
  selected?: boolean;
  role?: string; // Añadimos la propiedad role
}
