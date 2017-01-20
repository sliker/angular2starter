import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';

import { createInputTransfer, createNewHosts, removeNgStyles } from '@angularclass/hmr';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreLogMonitorModule, useLogMonitor } from '@ngrx/store-log-monitor';

import { AppState, rootReducer } from './reducers';

import { AppComponent } from './app.component';
import { NotFoundModule } from './not-found/not-found.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AboutUsModule } from './about-us/about-us.module';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
    imports: [
        BrowserModule,
        AboutUsModule,
        CoreModule,
        HomeModule,
        NotFoundModule,
        StoreModule.provideStore(rootReducer),
        StoreDevtoolsModule.instrumentStore({
            monitor: useLogMonitor({
                visible: true,
                position: 'right'
            })
        }),
        AppRoutingModule,
        StoreLogMonitorModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        Title
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
    constructor(public appRef: ApplicationRef, private appState: Store<AppState>) {

    }

    hmrOnInit(store: any) {
        if (!store || !store.state) return;

        // restore state by dispatch a SET_ROOT_STATE action
        if (store.rootState) {
            this.appState.dispatch({
                type: 'SET_ROOT_STATE',
                payload: store.rootState
            });
        }

        if ('restoreInputValues' in store) { store.restoreInputValues(); }
        this.appRef.tick();
        Object.keys(store).forEach(prop => delete store[prop]);
    }

    hmrOnDestroy(store: any) {
        const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        this.appState.take(1).subscribe(s => store.rootState = s);
        store.disposeOldHosts = createNewHosts(cmpLocation);
        store.restoreInputValues = createInputTransfer();
        removeNgStyles();
    }

    hmrAfterDestroy(store: any) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
        // anything you need done the component is removed
    }
}
