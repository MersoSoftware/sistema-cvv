import { Categoria } from "./categoria";
import { Imagem } from "./imagem";
import { Status } from "./status.enum";

export class Produto {
    public id!: number;
    public categoria!: Categoria;
    public nome!: string;
    public preco!: number;
    public descricao!: string;
    public status!:Status;
    public imagens = new Array<Imagem>();

    
}
