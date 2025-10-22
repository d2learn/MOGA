# MSCP | 流程结构与玩法详解

本文档将对下图中, 主线剧情和支线剧情中涉及的节点做详细的解析...

![](/imgs/activity/mscp-flowchart.svg)

::: warning 代码描述
```cpp
int main() {
  Queue<Task> taskQ = create_task_queue();
  auto player = create_player();

  join_mscp_game(player); // MLine-0

  while (!taskQ.empty()) {

    if (player.progress() >= 1 and player.want_to_join(mscp_group)) {
      new_thread_and_start(mscp_branch_line); // 并发一个分支剧情
    }

    auto t = task.front(); task.pop();
    bool ok = player.learn_and_complete(t);  // MLine-1
    while (!ok) {
      player.goto_community(); // MLine-1-1
      ok = player.retry_current_task();
    }
    player.release_results(); // MLine-2
    if (mcpp_standard.has(BUG | OTHER_ISSUE | FEATURE...)) {
      player.contributor_to(mcpp_standard); // MLine-2-1
    }
    player.submit(); // MLine-3
    if (player.has_idea()) {
      mcpp_standard.new_issues();
      // ...
    }
    player.join_live(); // MLine-4
  }
  player.add_id_to(mscp_pass_list); // MLine-5
}
```
:::

## 一、主线活动

> 任何人可以随时参见 -> 完成周学习任务 -> [遇到问题: 创建论坛话题并参与讨论] -> 发布学习成果 -> [参与mcpp-standard贡献] -> 提交到MSCP活动记录表 -> [对项目或活动提出建议和想法] -> 参与线上交流会

### MLine-0 | 任何人可以随时参见

> 没有年龄、性别、学历的限制

- 不论你是中学生、大学生、研究生或非计算机专业背景的人都可以参与
- 你可以获取活动中的所有资料和工具(他们都是开源或公开的
- 你可以自由选择参与主线活动 或 同时参加支线扩展活动

###  MLine-1 | 完成周学习任务

> 每周活动小组会以一个学习任务以及可选的其他参与项目的方式作为主题, 最后形成多个活动任务

- 1 - 在 [活动记录](/activity/mscp/log.md) 中查看发布的主线任务和其他可选的支线任务
- 2 - 根据自己的进度情况, 选择对应的任务进行学习或完成
  - 一般任务会包含核心任务, 和可选的扩展任务

::: tip 参考示例

完成mcpp-standard项目本地环境的搭建, 并成功运行自动检测程序。熟悉并完成第一个代码练习(hello-mcpp)

:::

### MLine-1-1 | [遇到问题: 创建论坛话题并参与讨论]

> 如果在完成任务的过程中遇到了问题, 可以选择到社区中进行提问并参与问题的讨论

- 1 - 在 [mcpp论坛](https://forum.d2learn.org/category/20) 创建问题贴
  - 尽可能的详细描述问题, 以及自己做过的尝试和理解, 可能的方向
- 2 - 在 mcpp活动交流群(1067245099)中广播, 号召社区玩家参与讨论, 加速问题的解决
  - 推荐 至少包含 标题 + 问题贴的链接
- 3 - 参与问题的交流和讨论
- 4 - 如果问题自己已解决, 尽量把解决方法也回复到问题贴下面

::: tip 参考示例

- [hello-mcpp中编译报错'auto' not allowed in function return type](https://forum.d2learn.org/topic/119)

:::

### MLine-2 | 发布学习成果

> 这个环节是使用"费曼学习法"的思路, 来对学习和已经完成的任务做巩固, 即如果通过你的讲解能让其他也搞懂这个过程进行自我验证和加强理解...

- 1 - 假设听众或看众不懂的情况下, 用技术分享/讲解者的视角, 制作一个讲解/教程视频或写一篇教程/博客进行公开发布
  - 相比文章, 更推荐视频平台和形式, 这样更容易获得反馈(但不绝对, 最好选适合你常用平台的内容形式)
  - `内容的一些可以参考角度`
    - 可以就按照任务的要求, 制作一个如何完成任务及注意事项的视频
    - 选择做任务中遇到的困难, 以这个困难如何解决的有什么注意事项为主要内容
    - 把任务中涉及的 C++核心语言特性, 通过自己组织的语言尝试给其他讲明白
    - 其他以主线任务中涉及的内容(C++技巧、核心特性、练习讲解、...)为中心的方向
- 2 - 可能用到的内容制作工具
  - 视频类: [OBS录制](https://obsproject.com), 剪映、必剪、PR...
  - 文章类: vscode + markdown预览插件
- 3 - 根据自己的风格和习惯, 选择对应的公共平台进行作品发布(保证其他人可查看)
  - `常见的公共平台:` [bilibili](https://www.bilibili.com) / [youtube](https://www.youtube.com) / [知乎](https://www.zhihu.com) / [抖音](https://www.douyin.com) / [小红书](https://www.xiaohongshu.com) / 个人博客...

::: warning 内容 和 内容形式

- 内容: 最后会提交到对应任务的[记录表](/activity/mscp/log.md)中, 让其他学习该任务的人进行参考和学习, 所以要求要以`MLine-1`中所完成的任务为中心展开
- 内容形式: 不做限制, 可以是 文章、视频、图文....

:::

::: tip 参考示例

- 环境搭建类型: [现代C++核心语言特性教程环境搭建](https://www.bilibili.com/video/BV182MtzPEiX)
- 功能演示类型: [现代C++教程项目 - 在线交互式代码练习演示](https://www.bilibili.com/video/BV1eCpazXEe4)
- 练习讲解类型: [auto和decltype | 现代C++核心语言特性](https://www.bilibili.com/video/BV1xkdYYUEyH)
- 知识点介绍类型: [现代C++中的初始化风格 { 列表初始化 }](https://www.bilibili.com/video/BV1vKuQzkEo2)
- 其他...

:::

### MLine-2-1 | [参与mcpp-standard项目贡献]

> 如果在过程中发现项目有可以优化的地方, 可以给项目提交PR

- 可能的一些角度
  - 文档完善
  - 练习代码优化
  - 一些问题修复
  - 功能扩展
- 1 - 在mcpp-standard项目创建 [new issue](https://github.com/Sunrisepeak/mcpp-standard/issues/new/choose), 填写项目的问题并进行描述
  - 建议包含: 具体的问题/功能背景, 预期解决的方法
- 2 - fork主仓库, 在个人账号生成对应仓库
- 3 - clone生成的仓库到本地, 本创建一个分支
- 4 - 修改代码, 并验证
- 5 - 提交(push)本地修改到生成的仓库
- 6 - 发起PR请求, 申请把代码合入主仓库
- 7 - 等待[活动小组](/activity/mscp/log.html#%E6%B4%BB%E5%8A%A8%E5%B0%8F%E7%BB%84%E6%88%90%E5%91%98)成员进行代码review并进行交流确认
- 8 - 合入代码

::: details Github开源代码贡献指南

![](/imgs/activity/github-pr-guide.png)

- 相关讨论: https://forum.d2learn.org/topic/120

:::

::: details commit规范

推荐使用`-s`自动生成签名信息

```bash
git commit -s
```

```bash
模块: 简要概述

- #1 issues号引用或社区问题链接追踪

1.更详细的说明
2.更详细的说明
...

邮箱签名
```

示例 - [commit](https://github.com/d2learn/xlings/commit/83418817c2c1619f14714a87235967240fd0bd13)

```bash
xim: optimize detect for system version

- #104

1. add detect type(*.cmd and *.bat) for windows platform
2. optimize pkginfo set, avoid clear failed

Signed-off-by: sunrisepeak <speakshen@163.com>

```

:::

::: tip 参考示例

- [Add GitHub Codespaces support and usage guide](https://github.com/Sunrisepeak/mcpp-standard/pull/11)
- [add update command - 'd2x update'](https://github.com/Sunrisepeak/mcpp-standard/pull/8)
- [修复emoji表情显示异常的问题](https://github.com/Sunrisepeak/mcpp-standard/pull/3)
- [docs: 修正代码链接，添加文件扩展名](https://github.com/Sunrisepeak/mcpp-standard/pull/1)

:::

### MLine-3 | 提交到MSCP活动记录表

> 添加主要成果到 任务记录表 和 进度记录表 中...

- 1 - 添加信息记录到对应的任务记录表
  - 一般主要是: github名, 主要做的内容/事情, 具体的成果
  - 具体成果一般包括: 和任务相关的教程内容, 参与的技术讨论, 创建的问题, 提交的PR等
  - 具体成果一般需要附上可供其他人能查看的链接, 以便参考学习, 一般建议发布在公开平台, 或可公开查看的个人博客上
- 2 - 添加进度信息到[玩家进度记录表](/activity/mscp/log.html#%E6%B4%BB%E5%8A%A8%E5%8F%82%E4%B8%8E%E8%80%85-%E7%8E%A9%E5%AE%B6-%E8%BF%9B%E5%BA%A6%E8%AE%B0%E5%BD%95%E8%A1%A8)
- 3 - 补充: 最好能在每周五晚12点前提交, 可以赶上 `MLine-4` 的线上交流展示


::: tip

具体任务的记录表中会有`主线成果`和`支线成果`

- 成果形式主要包括: 视频 / 文章 / 问题 / PR / 其他
- 格式: `类型( [1](url), [2](url) )`
  - 示例: PR([1](https://github.com/d2learn/MOGA/pull/3), [2](https://github.com/d2learn/MOGA/pull/3))

:::

::: details 方法一: 直接编辑页面

![](/imgs/activity/mscp-submit-results.png)

:::

::: details 方法二: 本地修改文件再PR提交

详细参考本文中的 -> [MLine2-1](/activity/mscp/docs/flowchart-details.html#mline-2-1-%E5%8F%82%E4%B8%8Emcpp-standard%E9%A1%B9%E7%9B%AE%E8%B4%A1%E7%8C%AE)

- 具体文件路径: `docs/activity/mscp/log.md`

- 本地打开网站查看验证
 - 在项目目录运行`xlings install`自动配置环境(仅第一次)
 - 启动命令: `d2x run` 就会出现类似如下链接, 即可访问

 ```

  vitepress v1.6.4

  ➜  Local:   http://localhost:5173/MOGA/
  ➜  Network: use --host to expose
  ➜  press h to show help

 ```

:::

### MLine-3-1 | [对项目或活动提出建议和想法]

> 如果在做任务的时候有遇到感觉Bug或设计不合理或感觉可以优化的地方, 可以在论坛或项目创建讨论话题反馈和交流

| 项目/活动 | 反馈和交流渠道 |
| --- | --- |
| [mcpp-standard项目](https://github.com/Sunrisepeak/mcpp-standard) | [new issues](https://github.com/Sunrisepeak/mcpp-standard/issues/new/choose) 或 [论坛发帖](https://forum.d2learn.org/compose?cid=20) |
| [MSCP活动](https://github.com/d2learn/MOGA) | [new issues](https://github.com/d2learn/MOGA/issues/new/choose) 或 [论坛发帖](https://forum.d2learn.org/compose?cid=20) |
| [xlings工具](https://xlings.d2learn.org) | [new issues](https://github.com/d2learn/xlings/issues/new/choose) 或 [论坛发帖](https://forum.d2learn.org/compose?cid=9) |

### MLine-4 | 参与线上交流

- 周六晚8点 - 线上交流会
- goto -> MLine-1 进行下一个任务, 直到完成所有任务

### MLine-5 | 完成本期活动

- 添加信息 -> [历届通过玩家名单](/activity/mscp/history.md)

## 二、支线活动

> 支线剧情是可选的, 适合有额外精力并对项目开发和社区维护感兴趣的参与者, <mark>没有加入活动小组的玩家也可以做支线任务</mark>

### BLine-0 | 活动小组申请

> 适合有额外精力想了解一个开源项目/社区/活动怎么开发维护以及运营的同学, 当活动结束后可以进一步申请加入项目和社区核心贡献者团队...

- 1 - 完成 [T0](/activity/mscp/log.md) 任务, 并在`MLine-3`提交成果到活动记录表
- 2 - 和小组成员进行沟通, 双向确认。具体细节参考 -> [申请加入活动小组](/activity/mscp/docs/join-group.md)
- 3 - 添加信息 -> [活动小组成员](/activity/mscp/log.html#%E6%B4%BB%E5%8A%A8%E5%B0%8F%E7%BB%84%E6%88%90%E5%91%98)

### BLine-1 | 参与社区/活动维护和项目开发

- 1 - 协助解决社区中玩家遇到和创建的问题 - `MLine-1-1`
  - 参与问题的讨论和解决
- 2 - 审核玩家在`MLine-2-1`提交的合入请求
  - 检查提交PR的内容, 如果存在问题和贡献者沟通修改
  - 当内容没有问题的时候进行`approval`确认
  - 评论区`@Sunrisepeak`进行代码合入
- 3 - 处理玩家创建和提交的问题、想法、新功能请求等
  - 整理汇总, 有可以实现的进行实现

### BLine-2 | 小组讨论会

- 1 - 活动小组工作会议, `MLine-4`前1个小时(周六晚7点)
- 2 - 回顾本周处理的问题和工作成果
- 3 - 根据玩家反馈的问题和功能请求讨论实现方案


## 三、活动结束

> 完成所有任务即"游戏通关"

- 同时完成 主线任务 + 支线任务, 可以选择进一步申请 -> [加入项目核心开发者团队](/activity/mscp/docs/join-group.html#%E5%8A%A0%E5%85%A5%E9%A1%B9%E7%9B%AE%E6%A0%B8%E5%BF%83%E5%BC%80%E5%8F%91%E8%80%85%E5%9B%A2%E9%98%9F)