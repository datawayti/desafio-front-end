export class Distrito {
  id!: number;
  nome!: string;
  municipio!: {
    id: number;
    nome: string;
    microrregiao: {
      id: number;
      nome: string;
    }
  }
}