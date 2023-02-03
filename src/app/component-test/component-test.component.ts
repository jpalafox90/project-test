import { Component } from '@angular/core';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.css']
})
export class ComponentTestComponent {
 titulo = "el titulo";
 categorias : any;
 errorMessage:any;
  constructor(private clienteService : ClientesService){
  }
  ngOnInit() {
/*     this.clienteService.getCategorias().subscribe(data => {
      this.categorias = data;
    })
    console.log(this.categorias); */
    this.clienteService.getCategorias()
    .subscribe(
      (response) => {                           //next() callback
        console.log('response received')
        this.categorias = response;
        console.log(this.categorias);
      },
      (error) => {                              //error() callback
        console.error('Request failed with error')
        this.errorMessage = error;
        // this.loading = false;
      },
      () => {                                   //complete() callback
        console.error('Request completed')      //This is actually not needed
        //this.loading = false;
      })
  }
}
