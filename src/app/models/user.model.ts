export interface User {
  ID_Usuario: number;
  Nombre: string;
  Apellido: string;
  Usuario: string;
  Password: string; // Asegúrate de que esta línea esté presente
  Admin: number;
  selected?: boolean; // Añadimos esta propiedad opcionalmente
}

