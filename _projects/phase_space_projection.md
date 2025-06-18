---
layout: page
title: Phase Space Projection of Dynamical Systems
description: A dimensionality reduction technique for high-dimensional flows.
img: assets/img/cards/phase-space-proj.png
importance: 4
category: phd
---

<div class="row">
<div class="offset-1 col-10 embed-responsive embed-responsive-16by9 mb-3">
    <iframe src="https://www.youtube.com/embed/DmJtsm02Uyw" width="640" height="480" allowfullscreen></iframe>
</div>
</div>

During my first year of PhD studies, I was working with high-dimensional flow data in the context of
scientific visualization. As a result, we created a method for dimensionality reduction which creates a projection
that tries to match the flow and geometric properties of the high-dimensional data set.

I have presented the paper at Eurographics & Eurovis 2020 joint conference. We achieved <b>Honorable Mention Award</b> for our work, as one of the best papers of Eurovis 2020.

The abstract is given here:

<div class="offset-1 col-10 content-text text-justify">
    <p>
        <i>
        Dynamical systems are commonly used to describe the state of time-dependent systems. In many engineering and control problems, 
        the state space is high-dimensional making it difficult to analyze and visualize the 
        behavior of the system for varying input conditions. We present a novel dimensionality 
        reduction technique that is tailored to high-dimensional dynamical systems. 
        In contrast to standard general purpose dimensionality reduction algorithms, 
        we use energy minimization to preserve properties of the flow in the high-dimensional space. 
        Once the projection operator is optimized, further high-dimensional trajectories are projected easily. 
        Our 3D projection maintains a number of useful flow properties, such as critical points and flow maps, 
        and is optimized to match geometric characteristics of the high-dimensional input, 
        as well as optional user constraints. We apply our method to trajectories traced in the phase spaces of 
        second-order dynamical systems, including finite-sized objects in fluids, the circular restricted three-body 
        problem and a damped double pendulum. We compare the projections with standard visualization techniques,
        such as PCA, t-SNE and UMAP, and visualize the dynamical systems with multiple coordinated views
        interactively, featuring a spatial embedding, projection to subspaces, our dimensionality reduction
        and a seed point exploration tool.
        </i>
    </p>
</div>

## References &amp; Further Reading

1. N. Bartolovic, M. Gross, T. Günther <a href="https://drive.google.com/file/d/1SvW-37hXQtHFumby_9_KkampsLwLMsw3/view?usp=sharing"><em>Phase Space Projection of Dynamical Systems</em></a>. Eurovis 2020.
