import { NgModule } from '@angular/core';

import { RbfloyaltySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [RbfloyaltySharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [RbfloyaltySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class RbfloyaltySharedCommonModule {}
