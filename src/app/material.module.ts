import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbar,
    MatCardModule, MatInputModule, MatProgressSpinnerModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
@NgModule({
  imports: [MatButtonModule, MatToolbarModule,
    MatInputModule, MatProgressSpinnerModule, MatCardModule, MatTableModule,
MatPaginatorModule ],
  exports: [MatButtonModule, MatToolbarModule, MatInputModule,
    MatProgressSpinnerModule, MatCardModule, MatTableModule,
    MatPaginatorModule],
})
export class MaterialModule { }
