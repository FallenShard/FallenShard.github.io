---
layout: page
title: ETHZ Path Tracing Project 2015
description: A rendering competition submission.
img: assets/img/cards/ray-tracing.png
importance: 1
category: masters
images:
  slider: true
---

<swiper-container keyboard="true" navigation="true" pagination="true" pagination-clickable="true" pagination-dynamic-bullets="true" rewind="true">
  <swiper-slide>{% include figure.liquid path="assets/img/rt/rt-image-1.png" class="img-fluid rounded z-depth-1" caption="A test for microfacet material model (Veach's PhD Thesis)" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid path="assets/img/rt/rt-image-2.png" class="img-fluid rounded z-depth-1" caption="Cornell box" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid path="assets/img/rt/rt-image-3.png" class="img-fluid rounded z-depth-1" caption="Photon mapping" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid path="assets/img/rt/rt-image-4.png" class="img-fluid rounded z-depth-1" caption="Subsurface scattering (milk parameters)" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid path="assets/img/rt/rt-image-5.png" class="img-fluid rounded z-depth-1" caption="Subsurface scattering (potato parameters)" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid path="assets/img/rt/rt-image-6.png" class="img-fluid rounded z-depth-1" caption="Heterogeneous participating medium" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid path="assets/img/rt/rt-image-7.png" class="img-fluid rounded z-depth-1" caption="Homogeneous participating medium" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid path="assets/img/rt/rt-image-8.png" class="img-fluid rounded z-depth-1" caption="Microfacet bowl and glass scene" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid path="assets/img/rt/rt-image-9.png" class="img-fluid rounded z-depth-1" caption="Cornell box with participating media" %}</swiper-slide>
  <swiper-slide>{% include figure.liquid path="assets/img/rt/rt-image-10.png" class="img-fluid rounded z-depth-1" caption="Final project image" %}</swiper-slide>
</swiper-container>

In the computer graphics course at ETH Zurich, our task was to gradually add features and extend the capabilities of a ray-tracing framework called Nori.

Some of the features that are showcased in the images and implemented throughout the course are listed below:

- Volumetric path tracing with multiple importance sampling
- Photon mapping
- Smooth mirror and dielectric BRDF models
- Microfacet BRDF model with Beckmann distribution
- Subsurface scattering with dipole approximation
- Multiple different types of light sources

For the final project, we were tasked with producing an image that combines implemented features into a given theme.
