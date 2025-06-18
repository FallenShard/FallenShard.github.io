---
layout: page
title: Crisp
description: A personal project for exploration of rendering-related algorithms.
img: assets/img/cards/crisp.png
importance: 1
category: personal
---

Crisp is an open-source project created with an intent to showcase reference implementations and examples
of various rendering techniques I've encountered throughout studies and independent exploration of topics in computer
graphics.

The application includes a selection of algorithms that cover real-time rendering, simulations and path tracing, written in Vulkan and C++.

The path tracer currently comes in two flavors:
 - A CPU one, which is inspired by Nori, an educational ray tracer used in the Computer Graphics AS15 course at ETH Zurich.
 - A GPU-based one that uses the Vulkan Ray Tracing extension.


Some of the features implemented:
 - GPU path tracer with multiple importance sampling with Ray Tracing extensions
 - Basic GLTF viewer
 - FFT-based ocean simulation
 - Dynamic atmospheric shading
 - Screen space ambient occlusion
 - GPU-based weakly compressible SPH fluid simulation with surface tension
 - Shadow mapping techniques: PCF, Variance, Cascaded
 - Blinn-Phong shading
 - UE4 style physically-based shading with image-based lighting
 - Screen-space reflections
 - Point sprite rendering
 - Basic alpha masking for foliage rendering<
 - Tiled forward shading
 - Dynamic terrain tessellation

The path tracer includes the following:
 - Materials:
   - Lambertian
   - Oren Nayar
   - Rough &amp; smooth conductor
   - Rough &amp; smooth dielectric
   - Ideal mirror
 - Integrators:
   - Ambient occlusion
   - Direct lighting
   - Standard path tracing with multiple importance sampling
 - Point, area, environment lights.
   
Some examples and illustrations are shown below.

<div class="col-12">
    <h1 class="text-center center-block heading">Gallery</h1>
</div>

<div class="row">
<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/atmo_rising.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Atmospheric shading at dawn </figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/atmo_noon.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Atmospheric shading at noon</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/atmo_sunset.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Atmospheric shading at sunset</figcaption>
    </figure>
</div>
</div>

<div class="row">
<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/foliage.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Foliage with basic alpha testing</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/sph_sim.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">A still frame from an SPH simulation
        </figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/ocean_sim.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">FFT-based ocean simulation</figcaption>
    </figure>
</div>
</div>

<div class="row">
<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/ssao.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Screen-space ambient occlusion</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/forward_clustered.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Forward-clustered lighting</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/atmo_zoomed.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Atmospheric shading viewed from space</figcaption>
    </figure>
</div>
</div>

<div class="row">
<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/pbr_marble.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">PBR-shaded marble</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/rt_materials.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Ray-traced frosted glass, diffuse and copper</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/rt_cornell.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Ray-traced modified Cornell scene</figcaption>
    </figure>
</div>
</div>

<div class="row">
<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/pbr_gold.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">PBR-shaded gold</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/pbr_rusted_iron.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">PBR-shaded rusted iron</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/pbr_brick.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">PBR-shaded brick</figcaption>
    </figure>
</div>
</div>

<div class="row">
<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/gltf_render.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">GLTF Helmet</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="{{ "assets/img/crisp/vulkan_ray_tracing.png" | relative_url }}" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Vulkan Path Tracer</figcaption>
    </figure>
</div>
</div>

The shader ball with thinner base used in ray-traced images was modeled by myself in Blender with inspirations from various other shader balls
used in other rendering systems. The other shader ball is borrowed from <a href="https://github.com/derkreature/ShaderBall">Derkreature</a>.

The environment maps in the showcased images produced with ray tracing are provided by 
<a href="http://dativ.at/lightprobes/">Bernhard Vogl</a>. The physically-based textures are from <a href="https://freepbr.com/">FreePBR.com</a>.

## References &amp; Further Reading

1. J. Chapman <a href="http://john-chapman-graphics.blogspot.com/2013/01/ssao-tutorial.html"><em>SSAO Tutorial</em></a>. 2013.
2. M. Becker, M. Teschner <a href="https://cg.informatik.uni-freiburg.de/publications/2007_SCA_SPH.pdf"><em>Weakly compressible SPH for free surface flows</em></a>.
            In Proceedings of the ACM Siggraph/Eurographics Symposium on Computer Animation (2007),
        pp. 209–217
3. J. de Vries <a href="https://learnopengl.com/PBR/IBL/Specular-IBL"><em>PBR & IBL at learnopengl.com</em></a>
4. Hillaire, S. (2020, July). <a href="https://sebh.github.io/publications/egsr2020.pdf"><em>A Scalable and Production
                Ready Sky and Atmosphere Rendering Technique. In Computer
                Graphics Forum (Vol. 39, No. 4, pp. 13-22).</em></a>