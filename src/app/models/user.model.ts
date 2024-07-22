export interface User {
  ID: number;
  username: string;
  password?: string;
  nombre?: string;
  apellido?: string;
  admin: boolean;  // Asegúrate de que esto esté presente y sea del tipo correcto
}
