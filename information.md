# 个人介绍

姓名：何恺锋
现居广东

23届本科，中山大学，软件工程学院，软件工程专业（珠海校区）

头像：![alt text](image.png)
github：https://github.com/Arw-Wow
邮箱：hekaifeng70@gmail.com



# 研究经历

老师：中山大学刘名威副教授（https://mingwei-liu.github.io/）
课题组：sysuselab（课题组主页：[sysuse.github.io](https://sysuselab.github.io/)）（专注于探索大型语言模型与软件工程前沿交叉领域的科研团队。研究方向涵盖LLM4SE（大模型赋能软件工程）、代码修复、代码翻译、代码生成等多个前沿领域。）

Towards Better Code Generation: Adaptive Decoding with Uncertainty Guidance:
https://arxiv.org/abs/2506.08980
Kaifeng He（我）, Mingwei Liu, Chong Wang, Zike Li, Yanlin Wang, Xin Peng, Zibin Zheng
介绍：
提出了一种名为 ADADEC 的不确定性引导自适应解码框架，用于优化大语言模型的代码生成任务。该框架通过学习特定模型的熵阈值，动态检测解码过程中易引发逻辑偏移的高不确定性步骤，并触发前瞻重排序机制（lookahead-based reranking）来纠正候选预测，从而在维持较高推理效率的同时显著提升代码生成的准确率。
overview图：![alt text](image-1.png)


A Systematic Review of Generated Code and Training Data Quality Issues in Code LLMs: Taxonomy, Causal Mapping, Detection, and Mitigation
（双盲评审中；尚未有公开预印本）
介绍：
综述，系统性地回顾了代码大语言模型（Code LLMs）中训练数据缺陷与生成代码质量问题之间的内在联系。文章建立了两者的多维度分类框架与因果映射机制，并全面梳理了贯穿数据准备、模型训练及代码生成全生命周期的质量检测与缺陷缓解技术。


A Preliminary Study on the Robustness of Code Generation by Large Language Models
https://arxiv.org/abs/2503.20197
Zike Li, Mingwei Liu, Anji Li, Kaifeng He（我）, Yanlin Wang, Xin Peng, Zibin Zheng
介绍：
论文对大语言模型生成代码的鲁棒性进行了实证研究，指出生成代码的主要缺陷在于往往缺乏必要的条件（如空值）检查。针对该问题，提出了一种名为RobGen的免训练插件框架，通过行级检查与分词级别的概率调整，引导模型生成必要的控制流，从而有效提升了代码的鲁棒性。
overview图：![alt text](image-2.png)

项目：
- 2026 年度国家级大学生创新创业训练计划项目主持人：基于工程规范约束的代码智能体可控生成与质量治理研究（经费2.4万元）
- 2026 年度校级大学生创新创业训练计划项目成员：面向消费级显卡的自适应大模型异构推理系统设计与实现（经费0.6万元）
- 2025 年度校级大学生创新创业训练计划项目主持人：面向代码大模型生成质量问题的训练数据归因与治理技术（经费0.6万元）