// state.ts: defines the state field for the global Vuex `store`.
/** Initial state of the Vuex store.
 */
export const defaultState = {
    blog: {
        title: null,
        description: null,
        base: null,
    },
    header: {
        showCover: false,
        coverImage: null,
        title: null,
        description: null,
    },
    nav: [],
    params: {},
    current: {},
    route: {},
    index: [],
    loading: true,
    search: "",
    sidebarOpen: false,
    type: null,
    posts: [],
    footer: [],
    social: [],
    author: null,
};
export default defaultState;
