import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';  // Componente importado
import { TecnicosDeLaEmpresaService } from './services/tecnicos-de-la-empresa.service';  // Servicio importado

@NgModule({
  declarations: [
    AppComponent,
    ContactanosComponent,  // Componente declarado
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    TecnicosDeLaEmpresaService,  // Añadir servicio a los proveedores si no usas providedIn: 'root'
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
