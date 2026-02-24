// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A collection of past graphics-related student projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-crisp",
          title: 'Crisp',
          description: "A personal project for exploration of rendering-related algorithms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/crisp/";
            },},{id: "projects-dark-spheres",
          title: 'Dark Spheres',
          description: "A concept user interface for a hypothetical cyberpunk MMO Dark Spheres.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dark_spheres/";
            },},{id: "projects-depth-map-and-normal-direction-fusion",
          title: 'Depth Map and Normal Direction Fusion',
          description: "3D Vision Project.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/depth_map_fusion/";
            },},{id: "projects-real-time-rendering-of-data-driven-fluid-simulations-with-style-transfer",
          title: 'Real-time Rendering of Data-driven Fluid Simulations with Style Transfer',
          description: "An application of style transfer in the context of real-time fluid rendering.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fluid_style_transfer/";
            },},{id: "projects-fruit-smashers",
          title: 'Fruit Smashers',
          description: "A multiplayer arcade racing game.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fruit_smashers/";
            },},{id: "projects-ethz-path-tracing-project-2015",
          title: 'ETHZ Path Tracing Project 2015',
          description: "A rendering competition submission.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/path_tracing_project/";
            },},{id: "projects-phase-space-projection-of-dynamical-systems",
          title: 'Phase Space Projection of Dynamical Systems',
          description: "A dimensionality reduction technique for high-dimensional flows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/phase_space_projection/";
            },},{id: "projects-target-driven-fire-simulation",
          title: 'Target-Driven Fire Simulation',
          description: "A project with user-guided Gaussian field to control the fire simulation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/target_driven_fire_simulation/";
            },},{id: "projects-dynamic-terrain-tessellation",
          title: 'Dynamic Terrain Tessellation',
          description: "Exploratory work on hardware tessellation features. Bachelor Thesis project.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/terrain_tessellation/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%65%6D%61%6E%6A%61%62%61%72%74%6F%6C%6F%76%69%63@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/FallenShard", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nemanjabart", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=8IIa3SwAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
