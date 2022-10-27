import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from 'src/share/produto';



@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { 
   
  }

  salvar(produtos : Produto) : Observable<Produto>{
    return this.http.post<Produto>('http://localhost:8090/api-produto/produtos',produtos);
  }


  
  allProdutos(): Observable<Produto[]>{
   return this.http.get<Produto[]>('http://localhost:8090/api-produto/produtos');
  }
  

  getByProdutoId(id: number): Observable<Produto>{
    return this.http.get<any>(`http://localhost:8090/api-produto/produtos/${id}`);
  }

  deleteProduto(id: number) : Observable<any>{
    return this.http.delete<any>(`http://localhost:8090/api-produto/produtos/${id}`);
  }
}
