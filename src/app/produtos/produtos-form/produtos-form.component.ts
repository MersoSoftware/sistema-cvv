import { Component, OnInit } from '@angular/core';
import { ProdutosService} from '../../produtos.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from 'src/share/produto';



@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})
export class ProdutosFormComponent implements OnInit {
  
  title: string ="Cadastro de Produtos"
  
  produtos!: Produto;
  success: boolean = false;
  erros!: string[];
  errors= null;
  id!: any;

  constructor(
    //Declaração de service
    private produtoService: ProdutosService,
    private activatedRoute :ActivatedRoute
 
  ) {
    this.produtos = new Produto();
    
   }

  ngOnInit(): void {
     let param: Observable<Params> = this.activatedRoute.params;
     param.subscribe(
       urlParams =>{
        this.id = urlParams['id'];
        if(this.id){
         this.produtoService
          .getByProdutoId(this.id)
          .subscribe(response => this.produtos = response,
            errorResponse => this.produtos = new Produto()
          )}
       });
  }
  
  onSubmit(){
    this.produtoService.salvar(this.produtos)
    .subscribe(response =>{
      this.success = false;
      this.produtos = response;
    },errorResponse =>{
      this.success = true;
      this.erros = errorResponse.error.errors;
      
    })
  }
  
}
