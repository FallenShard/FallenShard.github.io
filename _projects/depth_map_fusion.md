---
layout: page
title: Depth Map and Normal Direction Fusion
description: 3D Vision Project.
img: assets/img/cards/depth-fusion.png
importance: 2
category: masters
images:
  compare: true
  slider: true
---

<img-comparison-slider>
  <img slot="first" width="100%" src="{{ "/assets/img/dmf/t1.png" | relative_url }}">
  <img slot="second" width="100%" src="{{ "/assets/img/dmf/t2.png" | relative_url }}">
</img-comparison-slider>

Starting from multiple noisy depth images taken by a real camera from multiple angles, the goal is to fuse them into a single 3D mesh.

For the 3D Vision course during master studies at ETH, I've worked on the problem of depth map fusion, where a
3D model is assembled given many coarse and noisy depth images of that model taken with a real camera.

For our project, we've extended the baseline methods of depth map fusion described in 
<i>Fast and High Quality Fusion of Depth Maps</i> by Zach et al. (2008) by including
the surface normal estimation. These normal maps which correspond to the depth images were obtained
using a deep learning-based classifier.

The fusion method is implemented on the GPU using CUDA and is based on the Primal-Dual algorithm
for energy minimization with total variation regularization.

The final result gave us a slightly better mesh compared to the baseline methods. The project was realized in a team of three.

## References &amp; Further Reading

1. D. Vicini, N. Bartolovic and D. Keyes.<a href="https://drive.google.com/file/d/1c7YidM2nyGMx_6MaIkNX4-_CbjqjQa1i/view?usp=drive_link">
    <em>Depth map and normal direction fusion</em></a>. ETH Zurich, 3D Vision course. 2016.
2. C. Zach. <a href="https://www.inf.ethz.ch/personal/pomarc/pubs/paper196.pdf"><em>Fast and high quality fusion of depth maps</em></a>. Proceedings of the international symposium on 3D data processing, visualization and transmission (3DPVT). Vol. 1. No. 2. 2008.


