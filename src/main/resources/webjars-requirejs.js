requirejs.config({
    paths: { "ngInfiniteScroll": webjars.path("ngInfiniteScroll", "ng-infinite-scroll") },
    shim: { "ngInfiniteScroll": [ "jquery", "angular" ] }
});
