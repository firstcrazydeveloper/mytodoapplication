import { NgModule, ModuleWithProviders } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { WebApiManager } from './service/webApiManager.service';
import { AuthGuard } from './service/auth.guard.service';
import { AuthService } from './service/auth.service';
import { TopMenuComponent } from './components/topmenu/topmenu.component';
@NgModule({
    imports: [CommonModule, RouterModule, HttpModule, ReactiveFormsModule],
    declarations: [TopMenuComponent],
    exports: [TopMenuComponent],
    providers: []
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [AuthGuard, AuthService, WebApiManager]
        }
    }

}