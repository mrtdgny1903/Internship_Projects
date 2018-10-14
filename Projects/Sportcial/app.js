/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Sportcial.Application',

    name: 'Sportcial',

    requires: [
        // This will automatically load all classes in the Sportcial namespace
        // so that application classes do not need to require each other.
        'Sportcial.*'
    ],

    // The name of the initial view to create.
    mainView: 'Sportcial.view.main.Main'
});
