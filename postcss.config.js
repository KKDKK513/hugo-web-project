const purgecss = {
  content: ["./hugo_stats.json"],
  defaultExtractor: (content) => {
    const elements = JSON.parse(content).htmlElements;
    return [
      ...(elements.tags || []),
      ...(elements.classes || []),
      ...(elements.ids || []),
    ];
  },
  safelist: [
    /^swiper-/,
    /^lb-/,
    /^gl/,
    /^go/,
    /^gc/,
    /^gs/,
    /^gi/,
    /^gz/,
    /^gprev/,
    /^gnext/,
    /^desc/,
    /^zoom/,
    /^search/,
    /^:is/,
    /dark/,
    /show/,
    /dragging/,
    /fullscreen/,
    /loaded/,
    /visible/,
    /current/,
    /active/,
  ],
};

module.exports = {
  plugins: {
    tailwindcss: {},
    // 用于删除没用到的css  因为有点击添加class实现css效果的代码  所以本项目不能用css-shake相关依赖
    // "@fullhuman/postcss-purgecss":
    //   process.env.HUGO_ENVIRONMENT === "production" ? purgecss : false, 
    autoprefixer: process.env.HUGO_ENVIRONMENT === "production" ? {} : false,
  },
};
