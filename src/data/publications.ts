export interface Author {
  name: string;
  url?: string;
}

export interface Publication {
  title: string;
  authors: Author[];
  venue: string;
  year: number;
  image: string;
  award?: string;
  links?: {
    pdf?: string;
    arxiv?: string;
    code?: string;
    project?: string;
  };
}

export const publications: Publication[] = [
  {
    title: "Gradient Domain Reconstruction for Monte Carlo PDE Solvers",
    authors: [
      { name: "Jiaqi Wu", url: "https://jiaoplusjuan.github.io/" },
      { name: "Xuejun Hu" },
      { name: "Shuang Zhao", url: "https://cs.illinois.edu/~szhao/" },
      { name: "Kun Xu", url: "https://cg.cs.tsinghua.edu.cn/people/~kun/" },
    ],
    venue: "ACM Transactions on Graphics (SIGGRAPH 2026)",
    year: 2026,
    image: "/pubs/gdmcpde.jpg",
    award: "Best Paper Honorable Mention",
    links: {
      pdf: "#",
      code: "#",
      project: "https://jiaoplusjuan.github.io/GDMCPDE.html",
    },
  },
  {
    title: "Kernel Predicting Neural Shadow Maps",
    authors: [
      { name: "Xuejun Hu" },
      { name: "Jinfan Lu", url: "https://github.com/LJFYC007" },
      { name: "Kun Xu", url: "https://cg.cs.tsinghua.edu.cn/people/~kun/" },
    ],
    venue: "SIGGRAPH 2025 Conference Paper",
    year: 2025,
    image: "/pubs/kpnsm.png",
    links: {
      pdf: "/publications/kpnsm.pdf",
      code: "https://github.com/Hoosus/KPNSM",
      project: "/kpnsm",
    },
  },
  {
    title:
      "Extended Path Space Manifolds for Physically Based Differentiable Rendering",
    authors: [
      { name: "Jiankai Xing", url: "https://jkxing.github.io/academic/" },
      { name: "Xuejun Hu" },
      { name: "Fujun Luan" },
      { name: "Ling-Qi Yan", url: "https://sites.cs.ucsb.edu/~lingqi/" },
      { name: "Kun Xu", url: "https://cg.cs.tsinghua.edu.cn/people/~kun/" },
    ],
    venue: "SIGGRAPH Asia 2023 Conference Paper",
    year: 2023,
    image: "/pubs/epsm.png",
    links: {
      pdf: "https://dl.acm.org/doi/10.1145/3610548.3618195",
      code: "https://github.com/jkxing/EPSM_Mitsuba3",
      project: "https://jkxing.github.io/academic/publication/EPSM",
    },
  },
  {
    title:
      "Differentiable Rendering using RGBXY Derivatives and Optimal Transport",
    authors: [
      { name: "Jiankai Xing", url: "https://jkxing.github.io/academic/" },
      { name: "Fujun Luan" },
      { name: "Ling-Qi Yan", url: "https://sites.cs.ucsb.edu/~lingqi/" },
      { name: "Xuejun Hu" },
      { name: "Houde Qian" },
      { name: "Kun Xu", url: "https://cg.cs.tsinghua.edu.cn/people/~kun/" },
    ],
    venue: "ACM Transactions on Graphics (SIGGRAPH Asia 2022)",
    year: 2022,
    image: "/pubs/rgbxy.jpeg",
    links: {
      pdf: "https://dl.acm.org/doi/10.1145/3550454.3555479",
      code: "https://github.com/jkxing/DROT",
      project: "https://jkxing.github.io/academic/publication/DROT",
    },
  },
];
