import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {translocoLoader} from './transloco.loader';
import {TranslocoModule, TRANSLOCO_CONFIG, TranslocoConfig} from '@ngneat/transloco';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        TranslocoModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {
            provide: TRANSLOCO_CONFIG,
            useValue: {
                listenToLangChange: true,
                defaultLang: 'en',
                prodMode: environment.production
            } as TranslocoConfig
        },
        translocoLoader
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
