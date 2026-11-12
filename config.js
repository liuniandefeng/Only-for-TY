/* ==========================================================================
   🌹 玫瑰星球 · 配置文件
   --------------------------------------------------------------------------
   你只需要改这个文件里 "双引号" 中间的文字，改完保存，
   再双击 index.html 刷新就能看到效果。

   小规则（很重要）：
   1. 只改引号里面的字，引号、逗号、方括号都不要删。
   2. 想换行就写 \n ，例如 "第一行\n第二行"。
   3. 某一项留空 ""，网站会自动用这个场景的默认文案。
   4. 改坏了也不怕：把压缩包里的 config.js 重新复制一份过来就恢复了。
   ========================================================================== */

window.SITE_CONFIG = {

  /* ---------- ① 选择场景 ----------
     "birthday"    生日（有蛋糕吹蜡烛、许愿卡）
     "anniversary" 纪念日（有蛋糕吹蜡烛、许愿卡）
     "confession"  表白（没有蛋糕环节，直接进入情书）            */
  occasion: "birthday",

  /* ---------- ② TA 的名字和日期 ----------
     名字会显示成 “For 名字”；日期显示在名字下面。
     都可以留空 ""，留空时显示 “For you”。                        */
  name: "唐艺",
  date: "初见那天",

  /* ---------- ③ 浏览器标签上的标题 ---------- */
  pageTitle: "A Rose in Orbit — For You",

  /* ---------- ④ 开场 ----------
     打开网页看到的第一句话，以及下面那行英文小字。              */
  opening: "一次见面，\n一场心照不宣的心动。",
  openingEnglish: "every particle changed its orbit.",

  /* ---------- ⑤ 照片（最多 6 张，最少 1 张） ----------
     · 把你们的照片放进 photos 文件夹
     · file 写照片的文件名；caption 是点开照片后下面那两行字
     · 照片可以是 .jpg / .jpeg / .png / .webp，文件名别用空格
     · 想少放几张，就把多余的那几行整行删掉（连同末尾逗号）      */
  photos: [
    { file: "photos/01.png", caption: "第一次见你，\n时间好像慢了一拍。" },
    { file: "photos/02.png", caption: "那一面之后，\n我的日常里开始有你。" },
    { file: "photos/03.png", caption: "还没一起走过的路，\n我想和你慢慢走。" },
    { file: "photos/04.png", caption: "一起去远方，\n新的风景里，最好看的还是你。" },
    { file: "photos/05.png", caption: "普通的日常，\n也是和你在一起的限定款。" },
    { file: "photos/06.png", caption: "以后的每一个季节，\n都想和你一起过。" },
  ],

  /* ---------- ⑥ 穿越星际后，抵达星球时的那句话 ---------- */
  journeyMessage: "穿过整个宇宙，\n还是想来到你身边。",

  /* ---------- ⑦ 庆祝页（只有生日/纪念日有） ----------
     celebrationTitle 是大标题，留空会自动显示
     Happy Birthday / Happy Anniversary。
     wishPrompt 是吹完蜡烛后，许愿卡上的提示语。
     showWishCard 改成 false 就不弹出许愿卡。                     */
  celebrationTitle: "",
  celebrationLine: "世界那么大，\n偏偏只见过你一面就记住了。",
  wishPrompt: "",
  showWishCard: true,

  /* ---------- ⑧ 情书 ----------
     paragraphs 里一行就是一段，想加段落就照格式多加一行。         */
  letter: {
    salutation: "唐艺，",
    paragraphs: [
     "我们只见过一次。但那一次之后，我发现自己会不自觉地想起你。",
    "很奇怪，明明还没那么熟，却好像已经认识了很久。也许这就是所谓的，对的人。",
    "我想和你做的事情有很多。想和你再吃一顿饭，再走一段路，再聊一次天。",
    "所以今天不写太多。只想告诉你：那一次见面，对我来说不是偶然，是一个开始。",
    "生日快乐。下一次见面，希望能亲口对你说。",
    ],
    signature: "那个只见过你一次，却记住了的人",
  },

  /* ---------- ⑨ 最后点亮星座 ----------
     finalTitleBefore：点亮前的标题；finalTitleAfter：点亮后的标题
     constellationName：星座的名字（英文更好看）
     ending：点亮后出现的最后一句话                               */
  finalTitleBefore: "把散落的星光 连成我们的模样",
  finalTitleAfter: "此后 一直为你亮着",
  constellationName: "Evermore",
  ending: "我们才见过一面，\n但我已经想好了下一次。",
  endingWhisper: "to be continued, with you.",

  /* ---------- ⑩ 背景音乐 ----------
     把 mp3 放进 music 文件夹，在这里写文件名。
     不想要音乐就写 ""。
     自带的 default.mp3 是原创配乐，可以放心使用。               */
  music: "music/只为你着迷-李秉成.mp3",
};
