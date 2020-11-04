import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSampleUygulamaSharedModule } from 'app/shared/shared.module';
import { JhipsterSampleUygulamaCoreModule } from 'app/core/core.module';
import { JhipsterSampleUygulamaAppRoutingModule } from './app-routing.module';
import { JhipsterSampleUygulamaHomeModule } from './home/home.module';
import { JhipsterSampleUygulamaEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSampleUygulamaSharedModule,
    JhipsterSampleUygulamaCoreModule,
    JhipsterSampleUygulamaHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSampleUygulamaEntityModule,
    JhipsterSampleUygulamaAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipsterSampleUygulamaAppModule {}
