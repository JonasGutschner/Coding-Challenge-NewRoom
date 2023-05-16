"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const user_interface_component_1 = require("./user-interface.component");
const node_test_1 = require("node:test");
(0, node_test_1.describe)('UserInterfaceComponent', () => {
    let component;
    let fixture;
    (0, node_test_1.beforeEach)(() => {
        testing_1.TestBed.configureTestingModule({
            declarations: [user_interface_component_1.UserInterfaceComponent]
        });
        fixture = testing_1.TestBed.createComponent(user_interface_component_1.UserInterfaceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    //it('should create', () => {
    //  expect(component).toBeTruthy();
    //});
});
