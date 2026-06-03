---
layout: page
title: ETHZ Path Tracing Project 2015
description: A rendering competition submission.
img: assets/img/cards/ray-tracing.png
importance: 1
category: masters
---

<div class="img-grid">
  {% include figure.liquid path="assets/img/rt/rt-image-1.png" class="rounded z-depth-1" caption="A test for microfacet material model (Veach's PhD Thesis)" %}
  {% include figure.liquid path="assets/img/rt/rt-image-2.png" class="rounded z-depth-1" caption="Cornell box" %}
  {% include figure.liquid path="assets/img/rt/rt-image-3.png" class="rounded z-depth-1" caption="Photon mapping" %}
  {% include figure.liquid path="assets/img/rt/rt-image-4.png" class="rounded z-depth-1" caption="Subsurface scattering (milk parameters)" %}
  {% include figure.liquid path="assets/img/rt/rt-image-5.png" class="rounded z-depth-1" caption="Subsurface scattering (potato parameters)" %}
  {% include figure.liquid path="assets/img/rt/rt-image-6.png" class="rounded z-depth-1" caption="Heterogeneous participating medium" %}
  {% include figure.liquid path="assets/img/rt/rt-image-7.png" class="rounded z-depth-1" caption="Homogeneous participating medium" %}
  {% include figure.liquid path="assets/img/rt/rt-image-8.png" class="rounded z-depth-1" caption="Microfacet bowl and glass scene" %}
  {% include figure.liquid path="assets/img/rt/rt-image-9.png" class="rounded z-depth-1" caption="Cornell box with participating media" %}
  {% include figure.liquid path="assets/img/rt/rt-image-10.png" class="rounded z-depth-1" caption="Final project image" %}
</div>

In the computer graphics course at ETH Zurich, our task was to gradually add features and extend the capabilities of a ray-tracing framework called Nori.

Some of the features that are showcased in the images and implemented throughout the course are listed below:

- Volumetric path tracing with multiple importance sampling
- Photon mapping
- Smooth mirror and dielectric BRDF models
- Microfacet BRDF model with Beckmann distribution
- Subsurface scattering with dipole approximation
- Multiple different types of light sources

For the final project, we were tasked with producing an image that combines implemented features into a given theme.
