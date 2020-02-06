const IIIFImageAPI = {
    region: 'full',
    size: 'max',
    rotation: '0',
    qualityAndFormat: 'default.jpg',
}

export const constants = {
    fetchTypes: {
        WORKS: 'WORKS',
        ALL: 'ALL',
        AUTHORS: 'AUTHORS',
        SUBJECTS: 'SUBJECTS',
        RESULTS: 'RESULTS',
        ID: 'ID',
        PAGES: 'PAGES',
        POSTS: 'POSTS',
        GS: 'GS',
    },
    status: {
        START: 'START',
        SUCCESS: 'SUCCESS',
        FAILURE: 'FAILURE',
        REQUEST: 'REQUEST',
        RECEIVE: 'RECEIVE',
        ERROR: 'ERROR',
    },
    actions: {
        SET_LANG: 'SET_LANG',
        SET_PAGE: 'SET_PAGE',
        SET_COLLAPSE: 'SET_COLLAPSE',
        SET_MENU: 'SET_MENU',
        SET_BROWSE: 'SET_BROWSE',
        SET_COLLECTION: 'SET_COLLECTION',
        SET_OFFSETS: 'SET_OFFSETS',
        SET_MODAL: 'SET_MODAL',
        RESET_OFFSETS: 'RESET_OFFSETS',
        CLEAR_RESULTS: 'CLEAR_RESULTS',
        CLEAR_FILTER_TERM: 'CLEAR_FILTER_TERM',
        CLEAR_FILTER_ARRAY: 'CLEAR_FILTER_ARRAY',
        DELETE_FULL_TEXT: 'DELETE_FULL_TEXT',
        REQUEST_PAGES: 'REQUEST_PAGES',
        RECEIVE_PAGES: 'RECEIVE_PAGES',
        REQUEST_POSTS: 'REQUEST_POSTS',
        RECEIVE_POSTS: 'RECEIVE_POSTS',
        REQUEST_GS: 'REQUEST_GS',
        RECEIVE_GS: 'RECEIVE_GS',
        REQUEST_WORKS: 'REQUEST_WORKS',
        RECEIVE_WORKS: 'RECEIVE_WORKS',
        REQUEST_ALL: 'REQUEST_ALL',
        RECEIVE_ALL: 'RECEIVE_ALL',
        REQUEST_AUTHORS: 'REQUEST_AUTHORS',
        RECEIVE_AUTHORS: 'RECEIVE_AUTHORS',
        REQUEST_SUBJECTS: 'REQUEST_SUBJECTS',
        RECEIVE_SUBJECTS: 'RECEIVE_SUBJECTS',
        REQUEST_ID: 'REQUEST_ID',
        RECEIVE_ID: 'RECEIVE_ID',
        REQUEST_RESULTS: 'REQUEST_RESULTS',
        RECEIVE_RESULTS: 'RECEIVE_RESULTS',
        ADD_TERM_TO_HISTORY: 'ADD_TERM_TO_HISTORY',
        ADD_TERM_TO_FILTER: 'ADD_TERM_TO_FILTER',
        SET_CURRENT_SEARCH_TERM: 'SET_CURRENT_SEARCH_TERM',
        SET_CURRENT_FILTER_TERM: 'SET_CURRENT_FILTER_TERM',
        SET_FILTER_ARRAY: 'SET_FILTER_ARRAY',
        REMOVE_FILTER: 'REMOVE_FILTER',
    },
    routerActions: {
        LOCATION_CHANGE: '@@router/LOCATION_CHANGE',
    },
    buildYear: '2018',
    defaultLanguage: 'en',
    languages: {
        en: 'English',
        mn: 'Mongolian',
    },
    pages: ['home', 'archives'],
    browseOptions: ['Title', 'Author', 'Subject'],
    menuItems: [
        { key: 'browse', label: 'Browse' },
        { key: 'search', label: 'Search results' },
    ],
    browseItems: [
        { key: 'works', label: 'Works' },
        { key: 'authors', label: 'Authors' },
        { key: 'subjects', label: 'Subjects' },
    ],
    browseTypes: ['works', 'authors', 'subjects'],
    searchTypeOptions: [
        { key: 'work', color: 'col-green' },
        { key: 'topic', color: 'col-blue' },
        { key: 'person', color: 'col-gold' },
        { key: 'place', color: 'col-green' },
    ],
    defaultColor: 'col-gold',
    searchOptions: {
        searchOffset: 0,
        resultSetSize: 10,
    },
    searchTerms: [
        `TSUL`,
        `MDZES PA DBYIG GNYEN`,
        `GUHYASAMAJA`,
        `DPAL`,
        `RGYAS PAR`,
        `LTAR`,
        `MI JOGS`,
        `NOTES`,
        `BLO BZANG GRAGS PA`,
    ],
    links: {
        wpAdmin: 'http://178.128.7.239/wp-login.php',
        acipEmail: 'mailto:info@asianclassics.org',
        nlmSite: 'http://nationallibrary.mn/mn/',
    },
    smallScreenWidth: 601,
    bdrGender: {
        'bdr:GenderMale': 'Male',
        'bdr:GenderFemale': 'Female',
    },

    bdrObjectType: {
        'bdr:ObjectTypeBlockprint': 'Blockprint',
    },

    bdrPurlURL: `http://purl.bdrc.io/resource/`,

    collections: [
        { key: '1', name: 'Collection 1' },
        { key: '2', name: 'Collection 2' },
    ],

    searchParams: {
        initialIndex: 'v1_bdrc_work',
        initialIndexPrefix: 'v1_bdrc_',
        type: '_doc',
        size: 10,
    },

    v1Indices: ['v1_*'],
    v2Indices: ['v2_*'],
    IIIFsuffix: `/${IIIFImageAPI.region}/${IIIFImageAPI.size}/${IIIFImageAPI.rotation}/${IIIFImageAPI.qualityAndFormat}`,
}
