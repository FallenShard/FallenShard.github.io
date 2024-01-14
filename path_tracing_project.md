---
title: ETHZ Path Tracing Project
layout: project
---

<div class="offset-sm-2 col-sm-8 narrow-font">
    <div id="mat-carousel" class="carousel slide pad-box" data-ride="carousel">
        <ol class="carousel-indicators">
            <li data-target="#mat-carousel" data-slide-to="0" class="active"></li>
            <li data-target="#mat-carousel" data-slide-to="1"></li>
            <li data-target="#mat-carousel" data-slide-to="2"></li>
            <li data-target="#mat-carousel" data-slide-to="3"></li>
            <li data-target="#mat-carousel" data-slide-to="4"></li>
            <li data-target="#mat-carousel" data-slide-to="5"></li>
            <li data-target="#mat-carousel" data-slide-to="6"></li>
            <li data-target="#mat-carousel" data-slide-to="7"></li>
            <li data-target="#mat-carousel" data-slide-to="8"></li>
            <li data-target="#mat-carousel" data-slide-to="9"></li>
        </ol>

        <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
                <img class="d-block w-100" src="assets/images/rt/rt-image-1.png" alt="EnvLight">
                <div class="carousel-caption">
                    <h4>A test for microfacet material model (Veach's PhD Thesis)</h4>
                </div>
            </div>

            <div class="carousel-item">
                <img class="d-block w-100" src="assets/images/rt/rt-image-2.png" alt="Material">
                <div class="carousel-caption">
                    <h4>Cornell box</h4>
                </div>
            </div>

            <div class="carousel-item">
                <img class="d-block w-100" src="assets/images/rt/rt-image-3.png" alt="Sphere">
                <div class="carousel-caption">
                    <h4>Photon mapping</h4>
                </div>
            </div>

            <div class="carousel-item">
                <img class="d-block w-100" src="assets/images/rt/rt-image-4.png" alt="Sphere">
                <div class="carousel-caption">
                    <h4>Subsurface scattering (milk parameters)</h4>
                </div>
            </div>

            <div class="carousel-item">
                <img class="d-block w-100" src="assets/images/rt/rt-image-5.png" alt="Sphere">
                <div class="carousel-caption">
                    <h4>Subsurface scattering (potato parameters)</h4>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="assets/images/rt/rt-image-6.png" alt="Sphere">
                <div class="carousel-caption">
                    <h4>Heterogeneous participating medium</h4>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="assets/images/rt/rt-image-7.png" alt="Sphere">
                <div class="carousel-caption">
                    <h4>Homogeneous participating medium</h4>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="assets/images/rt/rt-image-8.png" alt="Sphere">
                <div class="carousel-caption">
                    <h4>Microfacet bowl and glass scene</h4>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="assets/images/rt/rt-image-9.png" alt="Sphere">
                <div class="carousel-caption">
                    <h4>Cornell box with participating media</h4>
                </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100" src="assets/images/rt/rt-image-10.png" alt="Sphere">
                <div class="carousel-caption">
                    <h4>Final project image</h4>
                </div>
            </div>
        </div>

        <a class="carousel-control-prev" href="#mat-carousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#mat-carousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>

<div class="col-12 content-text card-deck-margin">
                    
    <p>
        In the computer graphics course at ETH Zurich, our task was to gradually add features and extend the capabilities of a ray-tracing framework called Nori.
    </p>
    <p>
        Soms of the features that are showcased in the images and implemented throughout the course are listed below:
        <ul>
            <li>Volumetric path tracing with multiple importance sampling</li>
            <li>Photon mapping</li>
            <li>Smooth mirror and dielectric BRDF models</li>
            <li>Microfacet BRDF model with Beckmann distribution</li>
            <li>Subsurface scattering with dipole approximation</li>
            <li>Multiple different types of light sources</li>
        </ul>
        For the final project, we were tasked with producing an image that combines implemented features into a given theme.
    </p>
</div>