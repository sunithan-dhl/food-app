import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodlistComponent } from './foodlist/foodlist.component';
import { MaterialComponent } from './material/material.component';

import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {SkeletonModule} from 'primeng/skeleton';
import { ConfirmationService, MessageService } from "primeng/api";
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {BadgeModule} from 'primeng/badge';
import {InputNumberModule} from 'primeng/inputnumber';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {ChipsModule} from 'primeng/chips';
import {MenubarModule} from 'primeng/menubar';



import { ToastModule } from "primeng/toast";
// import {RippleModule} from 'primeng/ripple';

import { MatSliderModule } from '@angular/material/slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from '@angular/material/card';
import { DetailComponent } from './detail/detail.component';
import { OrderComponent } from './order/order.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { LoaderComponent } from './loader/loader.component';
import { MulilevelComponent } from './mulilevel/mulilevel.component';
import { Checkout1Component } from './checkout1/checkout1.component';
import { CartComponent } from './cart/cart.component';
import { MenuComponent } from './menu/menu.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({
  declarations: [
    AppComponent,
    FoodlistComponent,
    MaterialComponent,
    DetailComponent,
    OrderComponent,
    CheckoutComponent,
    LoaderComponent,
    MulilevelComponent,
    Checkout1Component,
    CartComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    TableModule,
    VirtualScrollerModule,
    DataViewModule,
    InputTextModule,
    DropdownModule,
    PanelModule,
    SkeletonModule,
    ReactiveFormsModule,
    InputTextareaModule,
    ConfirmPopupModule,
    ToastModule,
    BadgeModule,
    InputNumberModule,
    OverlayPanelModule,
    ProgressSpinnerModule,
    ChipsModule,
    MenubarModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    
    // RippleModule

    MatSliderModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatCardModule


  ],
  providers: [ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
