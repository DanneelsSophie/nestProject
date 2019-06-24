'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-typescript-starter documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AnimalsModule.html" data-type="entity-link">AnimalsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AnimalsModule-ee80b998b2c9824183834ab299330b37"' : 'data-target="#xs-controllers-links-module-AnimalsModule-ee80b998b2c9824183834ab299330b37"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AnimalsModule-ee80b998b2c9824183834ab299330b37"' :
                                            'id="xs-controllers-links-module-AnimalsModule-ee80b998b2c9824183834ab299330b37"' }>
                                            <li class="link">
                                                <a href="controllers/AnimalsController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AnimalsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AnimalsModule-ee80b998b2c9824183834ab299330b37"' : 'data-target="#xs-injectables-links-module-AnimalsModule-ee80b998b2c9824183834ab299330b37"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AnimalsModule-ee80b998b2c9824183834ab299330b37"' :
                                        'id="xs-injectables-links-module-AnimalsModule-ee80b998b2c9824183834ab299330b37"' }>
                                        <li class="link">
                                            <a href="injectables/CatsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CatsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/DogsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DogsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationModule.html" data-type="entity-link">ApplicationModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CatsModule.html" data-type="entity-link">CatsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CatsModule-9106052152ead7bd0f7f08c5fb7d8b38"' : 'data-target="#xs-injectables-links-module-CatsModule-9106052152ead7bd0f7f08c5fb7d8b38"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CatsModule-9106052152ead7bd0f7f08c5fb7d8b38"' :
                                        'id="xs-injectables-links-module-CatsModule-9106052152ead7bd0f7f08c5fb7d8b38"' }>
                                        <li class="link">
                                            <a href="injectables/CatsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CatsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link">DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DogsModule.html" data-type="entity-link">DogsModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-DogsModule-71e4f42ed33331d8ebb8db22591fc944"' : 'data-target="#xs-injectables-links-module-DogsModule-71e4f42ed33331d8ebb8db22591fc944"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DogsModule-71e4f42ed33331d8ebb8db22591fc944"' :
                                        'id="xs-injectables-links-module-DogsModule-71e4f42ed33331d8ebb8db22591fc944"' }>
                                        <li class="link">
                                            <a href="injectables/DogsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DogsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/PersonsController.html" data-type="entity-link">PersonsController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Animal.html" data-type="entity-link">Animal</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCatDto.html" data-type="entity-link">CreateCatDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateDogDto.html" data-type="entity-link">CreateDogDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockCatModel.html" data-type="entity-link">MockCatModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/PersonsService.html" data-type="entity-link">PersonsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TerminusOptionsService.html" data-type="entity-link">TerminusOptionsService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/AnimalMatcher.html" data-type="entity-link">AnimalMatcher</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AnimalPattern.html" data-type="entity-link">AnimalPattern</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AnimalService.html" data-type="entity-link">AnimalService</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AnimalServicePattern.html" data-type="entity-link">AnimalServicePattern</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Cat.html" data-type="entity-link">Cat</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Dog.html" data-type="entity-link">Dog</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});