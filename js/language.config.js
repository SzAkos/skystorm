//
// Note that language "ALL" matched sLanguageManager.LANGUAGE.UNIVERSAL, and will be used if no matching language-specific string is given.
//

window._language_config = {

    //
    // Date formatting strings...
    //

    //
    // These formats are not visible to consumers.
    // Modify only if back-end data formats require it...
    //

    "ui.parsing.epgEventDate": {
        "ALL": "DD.MM.YYYY"
    },
    "ui.parsing.epgEventTime": {
        "ALL": "HH:mm"
    },
    "ui.parsing.onAirStartDate": {
        "ALL": "YYYY/MM/DD"
    },
    "ui.parsing.daypassValidityDate": {
        "ALL": "YYYY/MM/DD"
    },
    "ui.parsing.daypassValidityTime": {
        "ALL": "HH:mm"
    },
    "ui.parsing.deviceDate": {
        "ALL": "YYYY-MM-DD"
    },
    "ui.parsing.newsDate": {
        "ALL": "DD.MM.YYYY HH:mm:ss"
    },

    //
    // There are for formatting text that's visible to consumers, in the UI.
    //

    "ui.format.epgEventTime": {
        "ALL": "HH:mm" // Used in metadata and on the timeline.
    },
    "ui.format.epgShortDate": {
        "ALL": "ddd, DD.MM." // Used at the left of the timeline.
    },
    "ui.format.epgMenuDate": {
        "ALL": "DD.MM." // Used in the epg day selection menu
    },
    "ui.format.subscriptionExpiryDate": {
        "ALL": "DD.MM.YYYY"
    },
    "ui.format.deviceDate": {
        "ALL": "DD.MM.YYYY"
    },
    "ui.format.minutesDurationSuffix": {
        "ALL": "min."
    },
    "ui.format.onAirTime": {
        "ALL": "hh:mm a"
    },
    "ui.format.onAirDate": {
        "ALL": "dddd, DD.MM.YYYY"
    },
    "ui.format.newsTime": {
        "ALL": "DD.MM.YYYY, HH:mm"
    },
    "ui.format.highlightNewsTime": {
        "ALL": "DD.MM.YYYY HH:mm"
    },
    "ui.format.daypassValidityDate": {
        "ALL": "DD.MM.YYYY"
    },

    //
    // These are good translations, but ones that have to be embedded in the UI rather than retrieved from server at runtime.
    //

    "ui.maintenance.default": {
        "en": "App is currently undergoing maintenance. Please check back later!",
        "de": "Es werden momentan Wartungsarbeiten durchgef&uuml;hrt.<br>Bitte probieren Sie es in K&uuml;rze erneut." // Official, but hard-coded in the app.
    },
    "ui.exit.title": {
        "en": "Really exit?",
        "de": "App verlassen?"
    },
    "ui.exit.body": {
        "en": "Are you sure you want to leave now?",
        "de": "Wollen Sie diese App wirklich verlassen?" // From SST-6 / SKYSTORM-653.
    },
    "ui.exit.exitYesButton": {
        "en": "Exit",
        "de": "Verlassen" // From SST-6 / SKYSTORM-653.
    },
    "ui.exit.exitNoButton": {
        "en": "Cancel",
        "de": "Abbruch" // From SST-6 / SKYSTORM-653.
    },
    "ui.networkFail.title": {
        "en": "Network Error",
        "de": "Verbindung nicht möglich"
    },
    "ui.networkFail.body": {
        "en": "Please ensure the LAN cable is connected or the Wi-fi is network accessible.",
        "de": "Ihr {device} kann sich aktuell leider nicht mit einem Server verbinden. Bitte pr&uuml;fen Sie, ob Ihre Wifi-Verbindung hergestellt ist oder ob Ihr Netzwerkkabel korrekt angeschlossen ist."
    },
    "ui.global.retry": {
        "en": "Retry",
        "de": "Erneut versuchen"
    },
    "ui.global.abort": { // ui.global.abort not currently in use, but supplied under SST-120.
        "en": "Abort",
        "de": "Abbrechen"
    },
    "Binge.Binge_ContinueWatchingAlert_top_label_movie": {
       "en": "Continue watching: [title] [fsk] | [partner_channel]",
       "de": "Jetzt fortsetzen: [title] [fsk] | [partner_channel]"
    }

};
