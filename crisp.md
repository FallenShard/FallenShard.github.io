---
title: Crisp
layout: project
---

<div class="col-12 content-text">
                    
    <p>
        Crisp is a personal open-source project created with an intent to showcase reference implementations and appearances
        of various rendering techniques I've encountered throughout studying and independent exploration of topics in computer
        graphics.
    </p>
    <p>
        The application includes rendering algorithms and topics approached with either rasterization or ray tracing.
        In addition, there's also a small, custom GUI layer for learning purposes.
    </p>
    <p>    
        The real-time (rasterization) rendering part of the project is built on top of Vulkan API. The ray tracer subsystem is inspired by
        the architecture of Nori, an educational ray tracer used in the Computer Graphics AS15 course at ETH Zurich.
    </p>
    <p>
        The project's source code is hosted on my <a href="https://github.com/FallenShard/Crisp">GitHub</a> profile. A quick
        overview of implemented features is given below.
    </p>
    <p>
        Rasterization-based/real-time rendering on the GPU:
        <ul>
            <li>Screen space ambient occlusion</li>
            <li>Weakly compressible SPH fluid simulation with surface tension (in Vulkan compute shaders)</li>
            <li>Shadow mapping techniques: PCF, VSM, CSM</li>
            <li>Blinn-Phong shading</li>
            <li>UE4 style physically-based material shading with image-based lighting</li>
            <li>Screen-space reflections</li>
            <li>Point sprite rendering</li>
            <li>Basic alpha masking for foliage rendering</li>
            <li>Tiled forward shading</li>
            <li>Dynamic terrain tessellation</li>
            <li>Experiments with Vulkan ray-tracing API through official KHR extension</li>
            <li>FFT-based ocean simulation</li>
            <li>Dynamic atmospheric shading based on <a href=https://sebh.github.io/publications/egsr2020.pdf>A Scalable and
                    Production
                    Ready Sky and Atmosphere Rendering Technique</a></li>
        </ul>
    </p>
    <p>
        Ray tracing on the CPU:
        <ul>
            <li>Materials/BRDFs
                <ul>
                    <li>Lambertian</li>
                    <li>Oren Nayar</li>
                    <li>Rough &amp; smooth conductor</li>
                    <li>Rough &amp; smooth dielectric</li>
                    <li>Ideal mirror</li>
                </ul>
            </li>
            <li>Integrators
                <ul>
                    <li>Ambient occlusion</li>
                    <li>Direct lighting</li>
                    <li>Path tracing with multiple importance sampling</li>
                </ul>
            </li>
            <li>Point, area, environment lights</li>
        </ul>
    </p>
    <p>
        Some examples and illustrations are shown below.
    </p>
</div>
<div class="col-12">
    <div class="line-breaker"></div>
</div>


<div class="col-12">
    <h1 class="text-center center-block heading">Gallery</h1>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="assets/images/crisp/atmo_rising.png" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Atmospheric shading at dawn </figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="assets/images/crisp/atmo_noon.png" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Atmospheric shading at noon</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="assets/images/crisp/atmo_sunset.png" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Atmospheric shading at sunset</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="assets/images/crisp/foliage.png" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Foliage with basic alpha testing</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="assets/images/crisp/sph_sim.png" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">A still frame from an SPH simulation
        </figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="assets/images/crisp/ocean_sim.png" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">FFT-based ocean simulation</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="assets/images/crisp/ssao.png" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Screen-space ambient occlusion</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="assets/images/crisp/forward_clustered.png" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Forward-clustered lighting</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="assets/images/crisp/atmo_zoomed.png" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Atmospheric shading viewed from space</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="assets/images/crisp/pbr_marble.png" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">PBR-shaded marble</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="assets/images/crisp/rt_materials.png" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Ray-traced frosted glass, diffuse and copper</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="assets/images/crisp/rt_cornell.png" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">Ray-traced modified Cornell scene</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="assets/images/crisp/pbr_gold.png" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">PBR-shaded gold</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="assets/images/crisp/pbr_rusted_iron.png" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">PBR-shaded rusted iron</figcaption>
    </figure>
</div>

<div class="col-4">
    <figure class="figure">
        <img src="assets/images/crisp/pbr_brick.png" class="figure-img img-fluid rounded" alt="Fluid">
        <figcaption class="figure-caption text-center">PBR-shaded brick</figcaption>
    </figure>
</div>

<div class="col-12 content-text">
    <div class="line-breaker"></div>
    <p>
        The shader ball with thinner base used in ray-traced images was modeled by myself in Blender with inspirations from various other shader balls
        used in other rendering systems. The other shader ball is borrowed from <a href="https://github.com/derkreature/ShaderBall">Derkreature</a>.
    </p>
    <p>
        The environment maps in the showcased images produced with ray tracing are provided by 
        <a href="http://dativ.at/lightprobes/">Bernhard Vogl</a>. The physically-based textures are from <a href="https://freepbr.com/">FreePBR.com</a>.
    </p>
</div>
<div class="col-12 content-text">
    <div class="line-breaker"></div>
    <h3 class="content-section-title">References &amp; Further Reading</h3>
    <ol class="reference-list">
        <li>J. Chapman <a href="http://john-chapman-graphics.blogspot.com/2013/01/ssao-tutorial.html"><em>SSAO Tutorial</em></a>. 2013.</li>
        <li>M. Becker, M. Teschner <a href="https://cg.informatik.uni-freiburg.de/publications/2007_SCA_SPH.pdf"><em>Weakly compressible SPH for free surface flows</em></a>.
                In Proceedings of the ACM Siggraph/Eurographics Symposium on Computer Animation (2007),
            pp. 209–217</li>
        <li>J. de Vries <a href="https://learnopengl.com/PBR/IBL/Specular-IBL"><em>PBR & IBL at learnopengl.com</em></a>.</li>
        <li>Hillaire, S. (2020, July). <a href="https://sebh.github.io/publications/egsr2020.pdf"><em>A Scalable and Production
                    Ready Sky and Atmosphere Rendering Technique. In Computer
                    Graphics Forum (Vol. 39, No. 4, pp. 13-22).</em></a></li>
    </ol>
</div>