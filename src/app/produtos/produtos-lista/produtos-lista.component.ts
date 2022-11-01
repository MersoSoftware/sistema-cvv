import {ProdutosService} from '../../core/share/services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/share/produto';


@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent implements OnInit {
  title="Consulta Produtos"
  produtos: Produto[] = [];
  produtoSelecionado!: Produto;
  mensagemSucesso!: string;
  mensagemErro!: string;

  constructor(private produtoService: ProdutosService) {

   }

  ngOnInit(): void {
    this.produtoService
    .allProdutos()
    .subscribe(response=> this.produtos = response);

  }
  preparaDelete(produto: Produto){
    this.produtoSelecionado = produto;
  }

  deleteProduto(){
    this.produtoService
    .deleteProduto(this.produtoSelecionado.id)
    .subscribe(
      response => {this.mensagemSucesso ="Produto deletado com sucesso!",
        ( erro: any) => this.mensagemErro ="Ocorreu erro ao deletar produto."
    });
  }



}
